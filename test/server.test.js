import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
process.env.NODE_ENV = 'test';
const { server, safeText, allowed } = await import('../server.js');
const { JsonlSubmissionRepository } = await import('../src/adapters/jsonl-submission-repository.js');
const { isPublishableReview } = await import('../src/reviews.js');

test('sanitises user text', () => assert.equal(safeText('<b>Hello</b>'), 'b Hello /b'));
test('upload allowlist excludes executables', () => {
  assert.equal(allowed.has('.pdf'), true);
  assert.equal(allowed.has('.exe'), false);
});
test('publishes only complete verified five-star review records', () => {
  assert.equal(isPublishableReview({ rating:5, text:'Exact review', reviewerName:'Reviewer', googleSourceUrl:'https://google.com/review' }), true);
  assert.equal(isPublishableReview({ rating:4, text:'Not eligible', reviewerName:'Reviewer', googleSourceUrl:'https://google.com/review' }), false);
  assert.equal(isPublishableReview({ rating:5, text:'Missing source', reviewerName:'Reviewer' }), false);
});
test('development repository supports create, detail and controlled statuses', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'parkway-'));
  const repository = new JsonlSubmissionRepository(join(directory, 'submissions.jsonl'));
  await repository.create({ id:'PF-TEST-000001', status:'New', name:'Test buyer' });
  assert.equal((await repository.findByReference('PF-TEST-000001')).name, 'Test buyer');
  assert.equal((await repository.updateStatus('PF-TEST-000001', 'Quoted')).status, 'Quoted');
  await assert.rejects(() => repository.updateStatus('PF-TEST-000001', 'Invalid'), /invalid_status/);
  assert.match(await readFile(join(directory, 'submissions.jsonl'), 'utf8'), /Quoted/);
});
test('preview routes are noindex, linked and semantic; admin is protected', async t => {
  await new Promise(resolve => server.listen(0, resolve));
  t.after(() => server.close());
  const base = `http://127.0.0.1:${server.address().port}`;
  for (const path of ['/', '/laser-cutting/', '/granulator-screens/', '/request-a-quote/', '/contact/']) {
    const response = await fetch(base + path);
    const html = await response.text();
    assert.equal(response.status, 200);
    assert.match(response.headers.get('x-robots-tag'), /noindex/);
    assert.match(html, /<h1[ >]/);
    assert.match(html, /0114 242 2733/);
  }
  const robots = await fetch(base + '/robots.txt').then(response => response.text());
  assert.match(robots, /Disallow: \/$/m);
  const admin = await fetch(base + '/admin/', { redirect:'manual' });
  assert.equal(admin.status, 303);
  assert.equal(admin.headers.get('location'), '/admin/login/');
});
test('RFQ endpoint rejects disallowed executable upload', async t => {
  if (!server.listening) await new Promise(resolve => server.listen(0, resolve));
  t.after(() => { if (server.listening) server.close(); });
  const form = new FormData();
  form.set('name', 'Test Buyer'); form.set('email', 'buyer@example.com');
  form.set('service', 'Laser cutting'); form.set('description', 'Test project'); form.set('consent', 'yes');
  form.set('drawing', new Blob(['MZ'], { type:'application/octet-stream' }), 'malware.exe');
  const response = await fetch(`http://127.0.0.1:${server.address().port}/api/rfq/`, { method:'POST', body:form });
  assert.equal(response.status, 400);
  assert.match((await response.json()).error, /not permitted/);
});
