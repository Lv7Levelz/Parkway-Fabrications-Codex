import http from 'node:http';
import { createReadStream } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { randomBytes, createHmac, timingSafeEqual } from 'node:crypto';
import { home, service, quote, simple, notFound, layout, adminPage, adminDetail } from './src/render.js';
import { services } from './src/content.js';
import { JsonlSubmissionRepository } from './src/adapters/jsonl-submission-repository.js';
import { LocalPrivateFileStorage } from './src/adapters/local-file-storage.js';

const PORT=Number(process.env.PORT||3000), root=process.cwd();
const submissions = new JsonlSubmissionRepository(join(root, 'data/submissions.jsonl'));
const privateFiles = new LocalPrivateFileStorage(join(root, 'data/uploads'));
const simpleRoutes=new Set(['/about/','/contact/','/projects/','/privacy-policy/','/terms/']);
const mime={'.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};
const allowed=new Map([['.dxf',['application/dxf','application/octet-stream','text/plain']],['.dwg',['application/acad','application/octet-stream']],['.step',['application/step','application/octet-stream','text/plain']],['.stp',['application/step','application/octet-stream','text/plain']],['.pdf',['application/pdf']],['.svg',['image/svg+xml']],['.jpg',['image/jpeg']],['.jpeg',['image/jpeg']],['.png',['image/png']]]);
const attempts=new Map();
const headers={'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','Permissions-Policy':'camera=(), microphone=(), geolocation=()','Content-Security-Policy':"default-src 'self'; style-src 'self'; script-src 'self'; img-src 'self' data:; form-action 'self'; frame-ancestors 'none'; base-uri 'self'",'X-Robots-Tag':'noindex, nofollow'};
function send(res,status,body,type='text/html; charset=utf-8',extra={}){res.writeHead(status,{...headers,'Content-Type':type,...extra});res.end(body)}
function cleanPath(url){const p=new URL(url,'http://local').pathname;return p!=='/'&&!p.endsWith('.')&&!extname(p)&&!p.endsWith('/')?p+'/':p}
function fieldsFromMultipart(buffer,boundary){const parts=buffer.toString('binary').split(`--${boundary}`).slice(1,-1), out={}; for(const raw of parts){const i=raw.indexOf('\r\n\r\n');if(i<0)continue;const head=raw.slice(0,i),data=raw.slice(i+4,-2),name=/name="([^"]+)"/.exec(head)?.[1];if(!name)continue;const filename=/filename="([^"]*)"/.exec(head)?.[1];const type=/Content-Type:\s*([^\r\n]+)/i.exec(head)?.[1];out[name]=filename?{filename:filename.split(/[\\/]/).pop(),type,data:Buffer.from(data,'binary')}:data;}return out}
function safeText(v,max=5000){return String(v||'').replace(/[<>\u0000-\u001f]/g,' ').trim().slice(0,max)}
function ref(){return `PF-${new Date().getUTCFullYear()}-${randomBytes(4).readUInt32BE().toString().padStart(10,'0').slice(0,6)}`}
function cookieToken(){const payload=Buffer.from(JSON.stringify({exp:Date.now()+8*3600e3})).toString('base64url');return `${payload}.${createHmac('sha256',process.env.SESSION_SECRET||'development-only').update(payload).digest('base64url')}`}
function authed(req){const token=/pf_admin=([^;]+)/.exec(req.headers.cookie||'')?.[1];if(!token)return false;const [p,s]=token.split('.');if(!p||!s)return false;const expected=createHmac('sha256',process.env.SESSION_SECRET||'development-only').update(p).digest();const got=Buffer.from(s,'base64url');if(got.length!==expected.length||!timingSafeEqual(got,expected))return false;try{return JSON.parse(Buffer.from(p,'base64url')).exp>Date.now()}catch{return false}}
async function body(req,max){const chunks=[];let size=0;for await(const c of req){size+=c.length;if(size>max)throw Error('too_large');chunks.push(c)}return Buffer.concat(chunks)}
async function rfq(req,res){const ip=req.socket.remoteAddress||'unknown',now=Date.now(),recent=(attempts.get(ip)||[]).filter(x=>now-x<3600e3);if(recent.length>=10)return send(res,429,JSON.stringify({error:'Too many enquiries. Please call Parkway.'}),'application/json');attempts.set(ip,[...recent,now]);try{const max=(Number(process.env.MAX_UPLOAD_MB)||20)*1024*1024+100000,buf=await body(req,max),boundary=/boundary=(.+)/.exec(req.headers['content-type']||'')?.[1];if(!boundary)throw Error('invalid_form');const f=fieldsFromMultipart(buf,boundary);if(f.website)return send(res,200,JSON.stringify({ok:true}),'application/json');const name=safeText(f.name,100),email=safeText(f.email,200),description=safeText(f.description),service=safeText(f.service,100);if(!name||!/^\S+@\S+\.\S+$/.test(email)||!description||!service||f.consent!=='yes')return send(res,400,JSON.stringify({error:'Complete all required fields with a valid email address.'}),'application/json');const id=ref(),record={id,createdAt:new Date().toISOString(),status:'New',name,email,company:safeText(f.company,120),phone:safeText(f.phone,40),service,material:safeText(f.material,80),thickness:safeText(f.thickness,40),quantity:safeText(f.quantity,30),dimensions:safeText(f.dimensions,100),requiredBy:safeText(f.requiredBy,20),description};if(f.drawing?.filename){const ext=extname(f.drawing.filename).toLowerCase(),types=allowed.get(ext);if(!types||!types.includes(f.drawing.type)||f.drawing.data.length>max-100000)return send(res,400,JSON.stringify({error:'That file type or size is not permitted.'}),'application/json');const stored=await privateFiles.put({reference:id,extension:ext,bytes:f.drawing.data});record.file={originalName:safeText(f.drawing.filename,200),stored:stored.key,type:f.drawing.type,size:f.drawing.data.length};}await submissions.create(record);send(res,201,JSON.stringify({ok:true,reference:id}),'application/json')}catch(e){send(res,e.message==='too_large'?413:400,JSON.stringify({error:e.message==='too_large'?'Upload exceeds the permitted size.':'The enquiry could not be processed.'}),'application/json')}}
async function admin(req, res, path) {
  if (path === '/admin/login/' && req.method === 'GET') {
    return send(res, 200, layout({ title:'Admin login | Parkway Fabrications', description:'Authorised access only.', path, body:`<section class="admin-login"><p class="eyebrow">Restricted workspace</p><h1>Admin access</h1><p>This development adapter is for authorised review only.</p><form method="post"><label>Password<input type="password" name="password" required autocomplete="current-password"></label><button class="button">Sign in</button></form></section>` }));
  }
  if (path === '/admin/login/' && req.method === 'POST') {
    const raw = (await body(req, 10000)).toString();
    const password = new URLSearchParams(raw).get('password') || '';
    const expected = process.env.ADMIN_PASSWORD || '';
    if (expected && password.length === expected.length && timingSafeEqual(Buffer.from(password), Buffer.from(expected))) {
      return send(res, 303, '', 'text/plain', { 'Set-Cookie':`pf_admin=${cookieToken()}; HttpOnly; SameSite=Strict; Path=/admin; Max-Age=28800${process.env.NODE_ENV==='production'?'; Secure':''}`, 'Location':'/admin/' });
    }
    return send(res, 401, 'Invalid credentials', 'text/plain');
  }
  if (!authed(req)) return send(res, 303, '', 'text/plain', { 'Location':'/admin/login/' });
  const detailMatch = path.match(/^\/admin\/enquiry\/([^/]+)\/$/);
  const statusMatch = path.match(/^\/admin\/enquiry\/([^/]+)\/status\/$/);
  if (statusMatch && req.method === 'POST') {
    const reference = decodeURIComponent(statusMatch[1]);
    const status = new URLSearchParams((await body(req, 10000)).toString()).get('status');
    try { await submissions.updateStatus(reference, status); } catch { return send(res, 400, 'Invalid status', 'text/plain'); }
    return send(res, 303, '', 'text/plain', { 'Location':`/admin/enquiry/${encodeURIComponent(reference)}/` });
  }
  if (detailMatch) {
    const record = await submissions.findByReference(decodeURIComponent(detailMatch[1]));
    return record ? send(res, 200, adminDetail(record)) : send(res, 404, notFound());
  }
  return send(res, 200, adminPage(await submissions.list()));
}

const server=http.createServer(async(req,res)=>{const path=cleanPath(req.url);if(req.method==='POST'&&path==='/api/rfq/')return rfq(req,res);if(path.startsWith('/admin/'))return admin(req,res,path);if(path==='/')return send(res,200,home());if(services[path])return send(res,200,service(path));if(path==='/request-a-quote/')return send(res,200,quote());if(simpleRoutes.has(path))return send(res,200,simple(path));if(path==='/robots.txt')return send(res,200,'User-agent: *\nDisallow: /\n','text/plain');if(path==='/sitemap.xml')return send(res,200,'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>','application/xml');if(extname(path)){const safe=normalize(path).replace(/^(\.\.(\/|\\|$))+/,'').replace(/^\//,'');if(safe.startsWith('public/'))return send(res,404,'Not found','text/plain');try{const file=join(root,'public',safe),stat=await import('node:fs/promises').then(x=>x.stat(file));res.writeHead(200,{...headers,'Content-Type':mime[extname(file)]||'application/octet-stream','Content-Length':stat.size,'Cache-Control':'public, max-age=86400'});return createReadStream(file).pipe(res)}catch{}}return send(res,404,notFound())});
if(process.env.NODE_ENV!=='test')server.listen(PORT,()=>console.log(`Parkway preview: http://localhost:${PORT}`));
export {server,allowed,safeText};
