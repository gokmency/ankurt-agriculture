# ANKURT TARIM MAKİNALARI — Resmi Web Sitesi

Antalya Serik (Yukarıkocayatak) merkezli **ANKURT TARIM MAKİNALARI** için hazırlanan tam kapsamlı, arama motoru ve dönüşüm odaklı, yapay zekâ destekli aramalara uyumlu resmi web sitesi.

> **Dijital Çözüm Ortağı:** GRAINZ DIGITAL

---

## 🛠️ Teknoloji Yığını (Tech Stack)

- **Framework:** Next.js 16 (App Router)
- **Dil:** TypeScript
- **Stil / Tasarım Sistemi:** Tailwind CSS v4 (Industrial Editorial Design)
- **İkonlar:** Lucide React & Optimize Edilmiş SVG
- **Render Stratejisi:** Statik Sayfa Üretimi (SSG - 39 rota statik derlenmiştir)
- **Veri Modeli:** Tip güvenli, genişletilebilir ve CMS / Supabase / Headless geçişine hazır modüler TypeScript katmanı (`src/data/`)

---

## 📁 Proje Dizin Yapısı

```
ankurt-website/
├── src/
│   ├── app/                                 # Next.js App Router sayfaları
│   │   ├── layout.tsx                       # Kök layout, SEO meta verileri, Header, Footer & Sticky Bar
│   │   ├── page.tsx                         # Ana Sayfa (Hero, Ürün Grupları, ANKURT Ürünleri, Değerler, vb.)
│   │   ├── urunler/
│   │   │   ├── page.tsx                     # Ürün Listeleme & Filtreleme (Kategori, Marka, Arama)
│   │   │   └── [slug]/
│   │   │       └── page.tsx                 # Dinamik Ürün Detay Sayfaları (20 benzersiz ürün)
│   │   ├── hakkimizda/
│   │   │   └── page.tsx                     # Kurumsal / Hakkımızda Sayfası (Doğrulanmış bilgiler)
│   │   ├── iletisim/
│   │   │   └── page.tsx                     # İletişim, Yol Tarifi, WhatsApp & Teklif Formu
│   │   ├── rehber/
│   │   │   ├── page.tsx                     # Bilgi Merkezi / Rehber Listesi
│   │   │   └── [slug]/
│   │   │       └── page.tsx                 # 6 Kapsamlı Eğitici Tarım Makinası Rehber Makalesi
│   │   ├── gizlilik-politikasi/
│   │   │   └── page.tsx                     # Gizlilik Politikası
│   │   ├── kvkk/
│   │   │   └── page.tsx                     # KVKK Aydınlatma Metni
│   │   ├── cerez-politikasi/
│   │   │   └── page.tsx                     # Çerez Politikası
│   │   ├── not-found.tsx                    # Özel 404 Sayfası
│   │   ├── robots.ts                        # Dinamik robots.txt
│   │   └── sitemap.ts                       # Dinamik XML sitemap (Tüm ürün ve rehberleri içerir)
│   ├── components/
│   │   ├── layout/                          # Header, Footer, MobileNav, Breadcrumb, StickyMobileBar
│   │   ├── products/                        # ProductCard, ProductFilter, ProductGallery
│   │   ├── contact/                         # ContactInfo, InquiryForm
│   │   ├── ui/                              # Button, Badge, EmptyState
│   │   └── seo/                             # JsonLd bileşeni ve schema üreticileri
│   ├── data/
│   │   ├── company.ts                       # Tek doğru kaynak: Firma kimliği, telefonlar, adres, sosyal linkler
│   │   ├── categories.ts                    # Ürün kategori taksonomisi (Römorklar, Toprak İşleme, vb.)
│   │   ├── products.ts                      # 20 Ürünlük tam veritabanı ve yardımcı sorgu fonksiyonları
│   │   ├── guides.ts                        # 6 Rehber makalesi ve ilişkili ürün bağları
│   │   └── navigation.ts                    # Menü ve alt menü yapısı
│   ├── lib/
│   │   ├── utils.ts                         # Yardımcı fonksiyonlar (cn, slugify, telefon formatlayıcı)
│   │   └── analytics.ts                     # GA4, Google Ads, Meta Pixel dönüşüm takip tetikleyicileri
│   └── styles/
│       └── globals.css                      # Tailwind v4 stilleri & özel endüstriyel dokular
├── public/                                  # Statik görseller ve favicon
├── package.json
└── tsconfig.json
```

---

## 🚜 Ürün Kataloğu ve Marka Ayrımı

Araştırma verilerindeki çift kayıtlar tekilleştirilmiş ve toplam **20 ürün** oluşturulmuştur.

### 1. ANKURT Kendi Üretimi / Markalı Ekipmanlar (10 Ürün)
- ANKURT Bahçe Tipi Römork (2,5–3 Ton)
- ANKURT 7'li Bahçe-Sera Tipi Çizel (Patlatma)
- ANKURT Sap Çıkarma / Pasaf Toplama Makinası
- ANKURT Özel Sera Tipi 220 cm Sürgü
- ANKURT Devirmeli Traktör Sepeti
- ANKURT Sırt Yapma Makinesi
- ANKURT TİR Makinası
- ANKURT Kazayağı
- ANKURT Çapa Makinesi
- ANKURT Malç Makinesi

### 2. Satışı Yapılan Diğer Markalar (10 Ürün)
- Volkan Römork
- Öz-Akın 3 Yana Devirmeli 3,5 Tonluk Römork
- Sevsan Asılır/Çekilir Ofset Diskaro (28-32-36'lı)
- Sevsan Sabit Ofset Diskaro (16-18-20'li)
- Sevsan Hidrolik Kaydırmalı Tandem Diskaro (20'li X Tipi)
- Torunoğlu Özel Tasarım Rotovatör (1850-2100 mm)
- Ata Makina Sap Parçalama
- Ata Rotovatör
- 3 Ton Su Tankeri
- Lazer Tesviye & Düzleme

---

## ⚙️ Yönetim ve Güncelleme Kılavuzu

### 1. Firma Bilgilerini ve İletişim Numaralarını Güncelleme
Tüm iletişim ve adres bilgileri `src/data/company.ts` dosyasından yönetilir:
- **Sabit Telefon:** `company.contact.phone`
- **Mobil / WhatsApp:** `company.contact.mobile` ve `company.contact.whatsappUrl`
- **Adres:** `company.location`
- **Sosyal Medya Linkleri:** `company.social`

### 2. Yeni Ürün Ekleme / Düzenleme
`src/data/products.ts` dosyasına yeni bir nesne eklemeniz yeterlidir:
```typescript
{
  id: 'yeni-urun-id',
  slug: 'yeni-urun-slug',
  title: 'ANKURT Yeni Model Römork',
  brand: 'ANKURT',
  brandType: 'ankurt', // 'ankurt' veya 'other'
  categoryId: 'romorklar', // 'romorklar' | 'toprak-isleme' | 'sera-ekipmanlari' | 'tasima'
  shortDescription: 'Kısa özet açıklama',
  description: 'Detaylı ürün açıklaması...',
  features: ['Özellik 1', 'Özellik 2'],
  usageAreas: ['Kullanım alanı 1'],
  images: ['/images/products/yeni-urun.jpg'], // Boş bırakılırsa zarif fallback görseli gösterilir
  status: 'active',
  relatedSlugs: ['bahce-tipi-romork'],
  order: 21,
}
```

### 3. SEO ve Analitik Kodlarını Bağlama
- Alan adı ve varsayılan meta etiketler `src/data/company.ts` içindeki `company.seo` objesindedir.
- GA4 Ölçüm Kimliği (`gaId`), Google Ads Dönüşüm Kimliği (`gadsId`, `gadsPhoneConversion`) ve Meta Pixel (`metaPixelId`) `company.analytics` içine girildiğinde `src/lib/analytics.ts` üzerinden otomatik çalışır.

---

## 🚀 Çalıştırma ve Derleme

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Üretim derlemesi oluştur
npm run build

# Üretim sunucusunu çalıştır
npm start
```
