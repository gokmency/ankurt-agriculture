# Doğrulama ve sınırlar — 13 Ekim 2026

## Otomatik kontroller

- TypeScript, ESLint (sıfır uyarı), 6 regresyon testi, üretim export'u.
- 60 sitemap URL'si, tek H1, kanonik adres, geçerli JSON-LD ve dahili bağlantılar.
- JavaScript çalışmadan katalogda 20 ürün bağlantısı.
- Türkçe/ASCII arama, URL eski parametre uyumu ve sıfırlama, form doğrulama, doğru ürün mesajı, yanıltıcı şema ve PTO önerilerinin geri dönmemesi.
- Üretim bağımlılıklarında `npm audit --omit=dev`; geliştirme zincirindeki braces/fast-glob uyarıları ayrıca kaydedilir. Next 14'e zorunlu düşürme yapılmaz.

## Tasarım taraması

Premium audit script çalıştırıldı. Uygulama ekranlarına göre yazılmış sezgisel denetim, `Button asChild` içindeki gerçek Link/a hedeflerini 15 kez yanlış pozitif olarak “actionless” raporlar. Canonical Button sahibi alt bileşeni clone ederek gerçek anchor üretir. Native dialog içindeki `method=dialog` formu veri göndermez; kapatma sahibidir. Basit pazarlama formunda native select kasıtlıdır; uzun not alanı kullanıcı tarafından dikey büyütülebilir. Bunlar uygulama CRUD kontratı kurmayı gerektirmez. Standart scrollbar özellikleri eklendi.

## Ölçüm

Önceki GSC tabanı: 50 tıklama / 1.861 gösterim / %2,7 CTR / 7,6 ortalama konum; veri penceresi 2 Eylül–10 Ekim. Değişiklikler sıralama artışını garanti etmez. GSC güncellenmesi ve yeterli saha örneklemi beklenir. Mevcut CrUX örneklemi yetersiz; laboratuvar puanı veya iyileştirilmiş CWV değeri uydurulmaz.

Analiz reddedilirse GA yüklenmez. Onaylı ziyaretlerden gelen olaylar tüm trafiği temsil etmez. WhatsApp hazırlama, gerçek mesaj gönderimi veya satış sayılmaz.

## Brave ile doğrulanan akışlar

390×844 mobil ve geniş masaüstü görünümü: ASCII `romork` araması 4 sonuç; Taşıma filtresi 1 sonuç; tarayıcı Geri ile arama ve 4 sonuç geri geldi. Ürün formunda ilgili çizel seçiliydi. Boş gönderimde üç açıklama ve ilk alana odak görüldü. Fotoğraf dialog'u açıldı, Escape ile kapandı ve odak büyütme düğmesine döndü. Mobil menüde teklif bağlantısı iletişim sayfasına geçti ve drawer kapandı. Yerel analiz reddi uygulandı.

Konsoldaki hatalar kullanıcı profilindeki cüzdan uzantılarının `ethereum` global çakışmalarıydı; site kaynaklı React/hydration hatası görülmedi. Gerçek WhatsApp mesajı gönderilmedi.
