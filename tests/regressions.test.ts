import { test } from 'node:test';
import assert from 'node:assert/strict';
import { matchesSearch } from '../src/lib/search';
import { readFilters, writeFilters } from '../src/lib/catalog';
import { validateInquiry, buildInquiryMessage } from '../src/lib/inquiry';
import { getActiveProducts, searchProducts } from '../src/data/products';
import { productJsonLd, websiteJsonLd } from '../src/components/seo/JsonLd';
import { getAllGuides } from '../src/data/guides';
import { slugifyHeading, extractTableOfContents } from '../src/components/guides/ArticleContent';

test('Turkish, ASCII and uppercase searches find the same equipment', () => {
  assert.equal(searchProducts('romork').length, searchProducts('römork').length);
  assert.ok(searchProducts('DİSKARO').length > 0);
  assert.ok(searchProducts('kazayagi').length > 0);
  assert.equal(matchesSearch('Torunoğlu Rotovatör', 'torunoglu rotavator'), true);
});
test('filter URLs normalize legacy aliases, preserve unrelated parameters and reset', () => {
  const query = writeFilters('?category=tasima&brand=other&ara=romork&utm_source=test', { category: 'romorklar' });
  assert.deepEqual(readFilters(query), {category: 'romorklar', brand: 'other', query: 'romork'});
  assert.equal(new URLSearchParams(query).get('utm_source'), 'test');
  assert.equal(new URLSearchParams(query).has('category'), false);
  assert.deepEqual(readFilters(writeFilters(query, { category: 'all', brand: 'all', query: '' })), { category: 'all', brand: 'all', query: '' });
});
test('inquiry validation blocks empty, malformed and unconsented messages', () => {
  assert.deepEqual(Object.keys(validateInquiry({name:'',phone:'12',location:'',message:'',consent:false})), ['name','phone','privacyConsent']);
  const valid = {name:'Test Kullanıcısı',phone:'0532 000 00 00',location:'Serik',message:'Model sorusu',consent:true};
  assert.deepEqual(validateInquiry(valid), {});
  const message = buildInquiryMessage(valid, 'ANKURT Kazayağı');
  assert.match(message, /İlgilendiğim Makine: ANKURT Kazayağı/);
  assert.equal(decodeURIComponent(encodeURIComponent(message)), message);
});
test('all product schemas omit unsupported commercial claims', () => {
  for (const product of getActiveProducts()) {
    const schema = productJsonLd(product);
    for (const key of ['offers','review','aggregateRating']) assert.equal(key in schema, false, `${product.slug}: ${key}`);
    if (!product.images.length || product.imageKind === 'reference') assert.equal('image' in schema, false);
  }
  const graph = websiteJsonLd()['@graph'];
  const business = graph.find(node => node['@id']?.endsWith('#business'))!;
  for (const key of ['geo','openingHoursSpecification','paymentAccepted']) assert.equal(key in business, false);
});
test('guides no longer invent field cases or universal PTO dimensions', () => {
  for (const guide of getAllGuides()) {
    assert.doesNotMatch(guide.content, /Gerçek Saha Senaryoları|%40 daha az yakıt|sıfır tıkanma/);
    assert.ok(parseInt(guide.readingTime) >= 2);
  }
  const pto = getAllGuides().find(g=>g.slug.startsWith('kuyruk-mili'))!;
  assert.doesNotMatch(pto.content, /30 [Dd]erece|en az 15 cm|sıfır hasar/);
  assert.equal(pto.sources?.length, 2);
});
test('Turkish heading anchors remain readable and match the table of contents', () => {
  assert.equal(slugifyHeading('Şaft Ölçüsü ve Bağlantı'), 'saft-olcusu-ve-baglanti');
  assert.deepEqual(extractTableOfContents('## Şaft Ölçüsü ve Bağlantı\nMetin'), [{id:'saft-olcusu-ve-baglanti', title:'Şaft Ölçüsü ve Bağlantı'}]);
});
