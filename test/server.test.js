import test from 'node:test';
import assert from 'node:assert/strict';
process.env.NODE_ENV='test';
const {server,safeText,allowed}=await import('../server.js');
test('sanitises user text',()=>assert.equal(safeText('<b>Hello</b>'),'b Hello /b'));
test('upload allowlist excludes executables',()=>{assert.equal(allowed.has('.pdf'),true);assert.equal(allowed.has('.exe'),false)});
test('preview routes are noindex and render semantic H1',async t=>{await new Promise(r=>server.listen(0,r));t.after(()=>server.close());const base=`http://127.0.0.1:${server.address().port}`;for(const path of ['/','/laser-cutting/','/request-a-quote/','/contact/']){const response=await fetch(base+path);const html=await response.text();assert.equal(response.status,200);assert.match(response.headers.get('x-robots-tag'),/noindex/);assert.match(html,/<h1[ >]/);assert.match(html,/0114 242 2733/)}const robots=await fetch(base+'/robots.txt').then(r=>r.text());assert.match(robots,/Disallow: \/$/m)});
