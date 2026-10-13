import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const out = path.resolve('out');
const sitemap = fs.readFileSync(path.join(out, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]));
assert.equal(urls.length, 60, 'Public sitemap route count changed: review intentionally');
for (const url of urls) {
  const file = path.join(out, url.pathname, 'index.html');
  assert.ok(fs.existsSync(file), `Missing sitemap page ${url.pathname}`);
  const html = fs.readFileSync(file, 'utf8');
  assert.ok(html.includes(`rel="canonical" href="${url.href}"`), `Wrong canonical ${url.pathname}`);
  assert.equal([...html.matchAll(/<h1[\s>]/g)].length, 1, `Expected one H1: ${url.pathname}`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) JSON.parse(match[1]);
  for (const match of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const target = decodeURIComponent(match[1]);
    if (target.startsWith('//')) continue;
    const local = path.join(out, target);
    assert.ok(fs.existsSync(local) || fs.existsSync(path.join(local, 'index.html')), `Broken internal URL ${target} on ${url.pathname}`);
  }
}
const catalog = fs.readFileSync(path.join(out,'urunler/index.html'),'utf8');
const productLinks = new Set([...catalog.matchAll(/href="\/urunler\/([^/]+)\/"/g)].map(m => m[1]).filter(slug=>slug!=='kategori'));
assert.equal(productLinks.size,20,'Catalog must contain all product links without JavaScript');
assert.ok(fs.existsSync(path.join(out, '404.html')));
const pto = fs.readFileSync(path.join(out,'rehber/kuyruk-mili-pto-nedir-guvenli-kullanim/index.html'),'utf8');
assert.match(pto, /https:\/\/www.hse.gov.uk\/agriculture\/topics\/machinery\/safe-use-3.htm/);
console.log(`Export verified: ${urls.length} canonical pages, 20 prerendered product links, JSON-LD and internal URLs.`);
