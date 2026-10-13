# ANKURT Tarım Makinaları

Serik / Antalya merkezli ANKURT için Türkçe ürün kataloğu ve rehber sitesi. Next.js App Router, React, TypeScript ve Tailwind CSS kullanır. Üretim çıktısı statik `out/` klasörüdür; sunucu veya form API'si gerektirmez.

## Çalıştırma

Node.js 22 ve npm kullanın.

```sh
npm ci
npm run dev
```

Üretim doğrulaması ve yerel önizleme:

```sh
npm run lint -- --max-warnings=0
npm run typecheck
npm test
npm run build
npm run check:export
npm start
```

Önizleme `http://localhost:3333` adresindedir; `PORT` ile değiştirilebilir. `next start`, statik export için kullanılmaz. GitHub Actions aynı kontrolleri çalıştırır ve `out/` dosyalarını artifact olarak saklar.

## İçerik ve veri

- `src/data/company.ts`: firma kimliği, telefon, adres, sosyal bağlantılar ve analiz kimliği.
- `src/data/products.ts`: 20 ürün. Model özellikleri satış öncesi teyit edilir; temsili fotoğraflar etiketlenir ve Product şemasına eklenmez.
- `src/data/guidesData.json`: 30 rehber; gerçek düzenleme tarihi `updatedDate`, kaynaklar `sources` alanında tutulur.
- `DESIGN.md`: mevcut ANKURT tasarımının kuralları.
- `docs/CONTENT-VERIFICATION.md`: işletme tarafından teyit edilecek bilgiler.
- `docs/DEPLOYMENT.md`: Cloudflare yayını, alan adı ve geri alma.
- `docs/QA.md`: doğrulama kapsamı ve bilinen sınırlar.

Ürün şemasına fiyat, stok, yorum veya teslim/iade koşulları yalnızca doğrulanıp sayfada görünür biçimde yayımlandığında eklenmelidir. Eksik bilgi yerine veri üretilmez. Temel Product kimliği tek başına Google ürün zengin sonucuna uygunluk sağlamayabilir.

## İletişim ve ölçüm

Teklif formu WhatsApp'ta düzenlenebilir bir mesaj hazırlar; otomatik mesaj göndermez. `whatsapp_handoff` bir iletişim niyetidir, gönderilmiş talep veya satış değildir. Ad, telefon, konum ve serbest metin analiz olaylarına eklenmez.

Google Analytics izin verilene kadar yüklenmez. Harita kullanıcı tıklayınca yüklenir. Analiz tercihi sayfa altından değiştirilebilir.
