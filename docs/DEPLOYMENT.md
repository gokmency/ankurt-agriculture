# Cloudflare yayın ve geri alma

## Tek yayın yapılandırması

`wrangler.json`, `assets.directory=./out` ve `not_found_handling=404-page` kullanır. Eski ikinci Wrangler yapılandırması kaldırıldı. Cloudflare build komutu `npm run build`; Worker deploy komutu `npx wrangler deploy` olarak kalmalıdır. Git bağlantılı üretim dalı `main` olmalıdır; bu ayar dashboard üzerinden doğrulanır. Gizli değişken veya API anahtarı bu depoya konulmaz.

`public/_headers` çıktı klasörüne kopyalanır. Hash içeren Next dosyaları immutable; aynı adlı ürün görselleri 1 saat sonra yeniden doğrulanır. Görsel değişikliğinden hemen sonra gerekiyorsa yalnızca ilgili URL'nin Cloudflare cache'i temizlenir.

## Alan adı

13 Ekim 2026'da Cloudflare Redirect Rules içinde `ANKURT canonical HTTPS and non-WWW` etkinleştirildi. Kural kimliği: `59a6de02010d4028af87e79aa8244836`.

Eşleşme:
```
(http.host eq "www.ankurt.com") or (http.host eq "ankurt.com" and not ssl)
```
Hedef:
```
concat("https://ankurt.com", http.request.uri.path)
```
301; sorgu dizgesi korunur. HTTPS ana alan adı eşleşmez, dolayısıyla döngü oluşmaz. WWW DNS proxy açık kalmalıdır. Bu, www origin 522 sorununa origin'e gitmeden yanıt verir. DNS/e-posta kayıtlarına değişiklik yapılmadı.

## Yayın sonrası doğrulama

```sh
curl -I 'http://ankurt.com/urunler/?q=romork'
curl -I 'https://www.ankurt.com/urunler/kazayagi/?q=romork'
curl -I 'https://ankurt.com/urunler/kazayagi/'
curl -I 'https://ankurt.com/bu-sayfa-yok/'
```

Beklenen: ilk ikisi hedefi koruyan 301, ürün 200, son istek 404. Katalog kaynak HTML'sinde 20 ürün bağlantısı bulunmalı. GSC URL Denetimi ile katalog, kazayağı rehberi ve bir ürün kontrol edilir. Sitemap yolu değişmedi: `https://ankurt.com/sitemap.xml`; gereksiz toplu yeniden gönderim yapılmaz.

## Geri alma

İçerik/arayüz için GitHub'da ilgili merge commit'ini revert edin; Cloudflare'ın önceki başarılı deployment'ını rollback seçeneğiyle yeniden etkinleştirin. Yönlendirmeyi geri almak gerekirse yalnızca yukarıdaki kuralı devre dışı bırakın. Silme, DNS sıfırlama veya cache'in tamamını silme gerekli değildir.
