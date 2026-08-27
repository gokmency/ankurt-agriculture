# ANKURT Yayın Kontrol Listesi

## Hazır olanlar

- Üretim alan adı ve tüm kanonik adresler: `https://ankurt.com`
- Her indekslenebilir sayfa için benzersiz başlık, açıklama ve kanonik adres
- Open Graph, X/Twitter kartları ve dinamik marka görseli
- `robots.txt`, görselli `sitemap.xml`, web manifesti ve uygulama ikonları
- WebSite, LocalBusiness, Product, Breadcrumb ve Article yapılandırılmış verileri
- KVKK, gizlilik ve çerez sayfaları `noindex`
- Form talepleri gerçek WhatsApp akışına bağlandı; yanıltıcı başarı mesajı kaldırıldı
- Statik varlık önbelleği ve temel güvenlik başlıkları

## Cloudflare yayın ayarları

- Build komutu: `npm run build`
- Çıktı klasörü: `out`
- Ana özel alan adı: `ankurt.com`
- `www.ankurt.com` alan adını da projeye ekleyin.
- Cloudflare Bulk Redirects üzerinden `https://www.ankurt.com/*` adresini `https://ankurt.com/${1}` hedefine `301` ile yönlendirin. Sorgu parametrelerini koruyun.
- Cloudflare'ın otomatik HTTPS ve Always Use HTTPS ayarlarını etkin tutun.
- Geçici `*.pages.dev` adresini arama motorlarına açmayın; özel alan adı bağlandıktan sonra Pages adresini ana alan adına yönlendirin.

## Yayın sonrası zorunlu doğrulamalar

1. Google Search Console'da `ankurt.com` alan adı mülkünü DNS kaydıyla doğrulayın.
2. `https://ankurt.com/sitemap.xml` adresini Search Console'a gönderin.
3. Ana sayfa, bir ürün ve bir rehber sayfasında URL Denetimi çalıştırın.
4. Google Business Profile web sitesi alanını `https://ankurt.com` olarak güncelleyin.
5. Gerçek GA4, Google Ads ve Meta Pixel kimlikleri kullanılacaksa `src/data/company.ts` içindeki alanlara ekleyin; veri toplamadan önce çerez onayı mekanizmasını etkinleştirin.
6. Telefon, WhatsApp, yol tarifi, ürün filtreleri ve mobil menüyü gerçek cihazda test edin.

## İçerik sahipliği kontrolü

- Firma unvanı, açık adres, telefonlar ve sosyal medya profilleri şirket yetkilisi tarafından son kez onaylanmalı.
- Yeni ürünlerde özgün fotoğraf, doğru model adı ve doğrulanmış teknik özellik kullanılmalı.
- Hukuki metinler yayın öncesinde şirketin hukuk/KVKK danışmanı tarafından onaylanmalı.
