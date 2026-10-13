// ANKURT TARIM MAKİNALARI — Complete Product Database
// Catalog records; model-specific dimensions and compatibility require confirmation.

import { matchesSearch } from '../lib/search';
export type ProductBrandType = 'ankurt' | 'other' | 'unconfirmed';
export type ProductStatus = 'active' | 'inactive';

export interface Product {
  id: string;
  slug: string;
  title: string;
  brand: string;
  brandType: ProductBrandType;
  categoryId: string;
  shortDescription: string;
  description: string;
  features: string[];
  usageAreas: string[];
  images: string[];
  imageKind?: 'reference' | 'product';
  status: ProductStatus;
  sahibindenUrl?: string;
  relatedSlugs: string[];
  order: number;
}

const catalogProducts: Product[] = [
  // ═══════════════════════════════════════════
  // ANKURT BRANDED PRODUCTS
  // ═══════════════════════════════════════════

  {
    id: 'ankurt-bahce-romork',
    slug: 'bahce-tipi-romork',
    title: 'ANKURT Bahçe Tipi Römork',
    brand: 'ANKURT',
    brandType: 'ankurt',
    categoryId: 'romorklar',
    shortDescription:
      'Dar bahçe yolları ve sera girişlerinde rahat manevra yapan 2,5–3 tonluk sağlam bahçe römorku.',
    description:
      'Dar bahçe araları ve sera girişlerinde traktörü yormadan çalışan, 2,5–3 ton kapasiteli sağlam bahçe römorkumuz. Meyve-sebze hasadı, gübre ve tarla malzemesi taşımada pratik devirmeli kasası ve sağlam dingil yapısıyla günlük taşıma işlerinde kullanılır. İsteğe ve traktör modeline göre ölçü uyarlaması yapılabilmektedir.',
    features: [
      'Dar bahçe araları ve seraya uygun kompakt ölçüler',
      '2,5–3 ton taşıma kapasitesi',
      'Traktöre hızlı ve emniyetli bağlantı',
      'Güçlendirilmiş çelik şasi ve sağlam sac kasa',
    ],
    usageAreas: [
      'Narenciye ve meyve bahçesi hasadı',
      'Sera içi ve sera çevresi malzeme nakliyesi',
      'Gübre, toprak ve kasa taşıma',
      'Dar alanlarda günlük çiftlik işleri',
    ],
    images: ['/images/products/ankurt_bahce_romork.webp'],
    status: 'active',
    sahibindenUrl:
      'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-tasima-ankurt-bahce-tipi-romork-2%2C5-3-ton-1226517063/detay',
    relatedSlugs: ['volkan-romork', 'oz-akin-devirmeli-romork', 'devirmeli-traktor-sepeti'],
    order: 1,
  },
  {
    id: 'ankurt-cizel-patlatma',
    slug: '7li-bahce-sera-cizel-patlatma',
    title: 'ANKURT 7\'li Bahçe-Sera Tipi Çizel (Patlatma)',
    brand: 'ANKURT',
    brandType: 'ankurt',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Sera ve bahçede taban taşını yırtan, kök bölgesini havalandıran 7 ayaklı sağlam patlatma.',
    description:
      'Sera ve bahçe toprağının zamanla sertleşip su geçirmeyen alt tabakasını (taban taşı) yırtarak havalandıran 7 ayaklı patlatma ekipmanımız. Toprağın üst verimli katmanını devirmeden derinlemesine işler; köklerin rahat yayılmasını ve sulama suyunun toprağa eşit işlemesini sağlar. Ağır hizmet profili ve sağlam ayak yapısıyla için geliştirilmiştir.',
    features: [
      '7 adet ısıl işlemli dayanıklı ayak',
      'Sera ve bahçeye uygun çalışma genişliği',
      'Taban taşını ve sert tabakayı kolay yırtma',
      'Toprağı devirmeden derin işleme kabiliyeti',
    ],
    usageAreas: [
      'Sera dikim öncesi taban hazırlığı',
      'Meyve bahçelerinde toprak gevşetme',
      'Taban suyu birikmesini önleme',
      'Kök bölgesini havalandırma',
    ],
    images: [
      '/images/products/ankurt_cizel_patlatma_1246074839.webp',
      '/images/gallery/cizel_urun_detay_kadraj.webp',
    ],
    status: 'active',
    sahibindenUrl:
      'https://www.sahibinden.com/ilan/1332316128/detay',
    relatedSlugs: ['kazayagi', 'sera-tipi-surgu', 'capa-makinesi'],
    order: 2,
  },
  {
    id: 'ankurt-sap-cikarma',
    slug: 'sap-cikarma-pasaf-toplama',
    title: 'ANKURT Sap Çıkarma / Pasaf Toplama Makinası',
    brand: 'ANKURT',
    brandType: 'ankurt',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Hasat sonrası tarlada kalan bitki saplarını ve pasafları hızla temizleyen toplama makinası.',
    description:
      'Hasat sonrasında tarlada kalan bitki sapları ile pasafları toplayarak bir sonraki ekime zemin hazırlayan makinemiz. Kuyruk milinden güç alan sağlam toplama mekanizması sayesinde tarlayı kısa sürede anız ve artık malzemeden arındırır, toprağı yeni ekime hazır hale getirir.',
    features: [
      'Yüksek verimli sap ve pasaf toplama mekanizması',
      'Traktör kuyruk milinden doğrudan tahrik',
      'Tarlayı ekime temiz ve pürüzsüz hazırlama',
      'Ağır şartlara uygun sağlam gövde yapısı',
    ],
    usageAreas: [
      'Hasat sonrası tarla temizliği',
      'Bitki sapı ve pasaf toplama',
      'Ekim öncesi anız hazırlığı',
      'Tarımsal atık yönetimi',
    ],
    images: ['/images/products/ankurt_sap_cikarma.webp'],
    status: 'active',
    sahibindenUrl:
      'https://www.sahibinden.com/ilan/1332147824/detay',
    relatedSlugs: ['ata-sap-parcalama', 'malc-makinesi', 'kazayagi'],
    order: 3,
  },
  {
    id: 'ankurt-sera-surgu',
    slug: 'sera-tipi-surgu',
    title: 'ANKURT Özel Sera Tipi 220 cm Sürgü',
    brand: 'ANKURT',
    brandType: 'ankurt',
    categoryId: 'sera-ekipmanlari',
    shortDescription:
      'Sera direk aralıklarına özel 220 cm ölçüde, yüzey tesviyesi ve düzleme sağlayan sürgü.',
    description:
      'Antalya ve Serik seralarının direk aralıkları göz önüne alınarak tam 220 cm genişlikte imal ettiğimiz sera sürgüsü. Ekim öncesi toprak yüzeyini düzler, kesekleri kırar ve taban tesviyesini hazır hale getirir. Alçak sera tünellerinde ve dar alanlarda traktör manevrasını engellemez.',
    features: [
      '220 cm tam sera uyumlu genişlik',
      'Kesek kırıcı ve tesviye edici sağlam profil',
      'Kompakt ve hafif manevra kabiliyeti',
      'Üç nokta askı sistemine kolay montaj',
    ],
    usageAreas: [
      'Sera içi taban tesviyesi ve düzleme',
      'Fide dikim öncesi toprak hazırlığı',
      'Damla sulama boruları serilmeden önce yüzey düzeltme',
    ],
    images: ['/images/products/ankurt_sera_surgu.webp'],
    status: 'active',
    sahibindenUrl:
      'https://www.sahibinden.com/ilan/1334220274/detay',
    relatedSlugs: ['7li-bahce-sera-cizel-patlatma', 'kazayagi', 'capa-makinesi'],
    order: 4,
  },
  {
    id: 'ankurt-traktor-sepeti',
    slug: 'devirmeli-traktor-sepeti',
    title: 'ANKURT Devirmeli Traktör Sepeti',
    brand: 'ANKURT',
    brandType: 'ankurt',
    categoryId: 'tasima',
    shortDescription:
      'Traktör arkasına takılan, pratik mandallı ve devirmeli yük taşıma sepeti.',
    description:
      'Traktörün arka üç nokta askısına kolayca takılan devirmeli taşıma sepetimiz. Kasa, gübre çuvalı, fidan, alet veya hasat taşırken römork takmaya gerek kalmadan pratik taşıma sağlar. Boşaltma mandalı sayesinde yük tek hareketle zahmetsizce devrilir.',
    features: [
      'Pratik mandallı devirme mekanizması',
      'Traktör arka hidrolik kollarına kolay takılıp sökülme',
      'Ağır yüke dayanıklı çelik sac kasa',
      'Kompakt boyutlar ile dar bahçelerde rahat dönüş',
    ],
    usageAreas: [
      'Hasat kasası ve çuval taşıma',
      'Gübre, fidan ve tarla aletleri nakliyesi',
      'Bahçe içi hızlı ve pratik yük boşaltma',
    ],
    images: [
      '/images/products/ankurt_traktor_sepeti_1246027871.webp',
      '/images/gallery/traktor_sepeti_urun_detay_kadraj.webp',
    ],
    status: 'active',
    sahibindenUrl:
      'https://www.sahibinden.com/ilan/1332145270/detay',
    relatedSlugs: ['bahce-tipi-romork', '3-ton-su-tankeri'],
    order: 5,
  },
  {
    id: 'ankurt-sirt-yapma',
    slug: 'sirt-yapma-makinesi',
    title: 'ANKURT Sırt Yapma Makinesi',
    brand: 'ANKURT',
    brandType: 'ankurt',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Tarla ve bahçede sırt oluşturma işlemi için kullanılan toprak işleme ekipmanı.',
    description:
      'ANKURT Sırt Yapma Makinesi, ekim öncesi veya bitki gelişim döneminde tarla ve bahçelerde toprak sırtları oluşturmak için kullanılır. Özellikle çilek, patates ve sebze yetiştiriciliğinde, bitkilerin kök bölgesini yükseltmek ve su yönetimini kolaylaştırmak amacıyla tercih edilir.',
    features: [
      'Ayarlanabilir sırt yapma mekanizması',
      'Farklı ürün gruplarına uygun kullanım',
      'Traktör kuyruk mili ile çalışma',
    ],
    usageAreas: [
      'Çilek tarlası hazırlığı',
      'Patates ekimi sırt oluşturma',
      'Sebze bahçesi düzenleme',
      'Su drenajı iyileştirme',
    ],
    images: [],
    status: 'active',
    sahibindenUrl:
      'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-toprak-isleme-ankurt-sirt-yapma-makinesi-1310484546/detay',
    relatedSlugs: ['kazayagi', 'capa-makinesi', '7li-bahce-sera-cizel-patlatma'],
    order: 6,
  },
  {
    id: 'ankurt-tir-makinasi',
    slug: 'tir-makinasi',
    title: 'ANKURT TİR Makinası',
    brand: 'ANKURT',
    brandType: 'ankurt',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Toprak işleme ve tarla hazırlığı amaçlı TİR makinası.',
    description:
      'ANKURT TİR Makinası, tarla ve bahçelerde toprak işleme amacıyla kullanılan bir ekipmandır. Detaylı teknik bilgi ve ürün özellikleri için doğrudan iletişime geçmenizi öneriyoruz.',
    features: [
      'Toprak işleme ekipmanı',
      'Traktöre bağlantılı çalışma',
    ],
    usageAreas: [
      'Tarla toprak işleme',
      'Toprak hazırlığı',
    ],
    images: [],
    status: 'active',
    sahibindenUrl:
      'https://www.sahibinden.com/ilan/1294290775/detay',
    relatedSlugs: ['kazayagi', 'sirt-yapma-makinesi'],
    order: 7,
  },
  {
    id: 'ankurt-kazayagi',
    slug: 'kazayagi',
    title: 'ANKURT Kazayağı',
    brand: 'ANKURT',
    brandType: 'ankurt',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Toprak yüzeyini işleme ve yabancı ot kontrolü için kazayağı ekipmanı.',
    description:
      'ANKURT Kazayağı, toprağın yüzey tabakasını işleyerek yabancı otları kesmek ve toprağı havalandırmak için kullanılan bir tarım ekipmanıdır. Üçüncü taraf bayiler tarafından da bilinen bir ANKURT ürün grubudur. Özellikle ekim öncesi yüzey hazırlığı ve yabancı ot mücadelesinde etkilidir.',
    features: [
      'Yüzey toprak işleme',
      'Yabancı ot kesme',
      'Toprak havalandırma',
      'Ekim öncesi hazırlık',
    ],
    usageAreas: [
      'Yabancı ot kontrolü',
      'Ekim öncesi yüzey hazırlığı',
      'Toprak havalandırma',
      'Bahçe ve tarla bakımı',
    ],
    images: ['/images/products/ankurt_kazayagi.webp'],
    status: 'active',
    relatedSlugs: ['capa-makinesi', '7li-bahce-sera-cizel-patlatma', 'sirt-yapma-makinesi'],
    order: 8,
  },
  {
    id: 'ankurt-capa',
    slug: 'capa-makinesi',
    title: 'ANKURT Çapa Makinesi',
    brand: 'ANKURT',
    brandType: 'ankurt',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Bahçe ve tarla bakımı için çapa makinesi.',
    description:
      'ANKURT Çapa Makinesi, tarla ve bahçelerde bitki aralarını çapalamak, yabancı otları temizlemek ve toprağı havalandırmak için kullanılır. Üçüncü taraf bayiler tarafından da bilinen bir ANKURT ürün grubudur. Sera, bahçe ve açık tarla koşullarında kullanıma uygundur.',
    features: [
      'Bitki arası çapalama',
      'Yabancı ot temizleme',
      'Toprak havalandırma',
      'Çeşitli sıra arası ayarları',
    ],
    usageAreas: [
      'Sebze bahçesi bakımı',
      'Sera içi çapalama',
      'Tarla bakımı',
      'Bitki arası ot temizliği',
    ],
    images: ['/images/products/ankurt_capa.webp'],
    status: 'active',
    relatedSlugs: ['kazayagi', '7li-bahce-sera-cizel-patlatma', 'sera-tipi-surgu'],
    order: 9,
  },
  {
    id: 'ankurt-malc',
    slug: 'malc-makinesi',
    title: 'Malç Makinesi',
    brand: '',
    brandType: 'unconfirmed',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Bitki artıkları ve sapları öğüterek toprağa karıştıran malç makinesi.',
    description:
      'Malç Makinesi, hasat sonrası kalan bitki artıklarını, sapları ve atıkları öğüterek toprağa karıştırır. Marka ve model seçenekleri için atölyemizle görüşebilirsiniz. Toprağın organik madde içeriğini artırmaya ve bir sonraki ekime hazırlığa katkı sağlar.',
    features: [
      'Bitki artığı öğütme',
      'Toprağa karıştırma',
      'Traktör kuyruk mili ile çalışma',
      'Geniş çalışma alanı',
    ],
    usageAreas: [
      'Hasat sonrası tarla temizliği',
      'Malç oluşturma',
      'Organik madde geri dönüşümü',
      'Ekim öncesi tarla hazırlığı',
    ],
    images: [],
    status: 'active',
    sahibindenUrl:
      'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-toprak-isleme-malcmakinesi-1235929319/detay',
    relatedSlugs: ['sap-cikarma-pasaf-toplama', 'ata-sap-parcalama'],
    order: 10,
  },

  // ═══════════════════════════════════════════
  // OTHER BRAND PRODUCTS (sold by ANKURT)
  // ═══════════════════════════════════════════

  {
    id: 'volkan-romork',
    slug: 'volkan-romork',
    title: 'Volkan Römork',
    brand: 'Volkan',
    brandType: 'other',
    categoryId: 'romorklar',
    shortDescription:
      'Ağır hizmet tipi çelik şasili, tek veya çift dingil seçenekli 4-5 ton kapasiteli tarla ve bahçe nakliye römorku.',
    description:
      'Volkan Tarım Römorku, tarla hasadı, narenciye ve meyve nakliyesi ile gübre taşımacılığında yüksek tonajlı yükler için geliştirilmiş dayanıklı bir taşıma ekipmanıdır. Güçlendirilmiş alt travers şasisi, kaliteli kapak ilaveleri ve sağlam dingil porya grubu sayesinde engebeli tarla yollarında sarsıntısız çekiş sağlar. Traktör hidrolik damper sistemiyle hızlı ve zahmetsiz boşaltma imkanı sunar. ANKURT Tarım Makinaları güvencesiyle Serik mağazamızda incelenebilir ve doğrudan teslim alınabilir.',
    features: [
      '4-5 ton yüksek yük taşıma kapasitesi',
      'Güçlendirilmiş U profilli çelik şasi ve sağlam taban sacı',
      'Traktör hidrolik çıkışına uyumlu tek kademeli damper pistonu',
      'Meyve kasası ve dökme hububat taşımaya uygun açılır kapaklar ve ilave babalar',
      'Geniş tabanlı tarla lastikleri ile çamurda batmayı önleyen tekerlek geometrisi',
    ],
    usageAreas: [
      'Narenciye, zeytin ve sebze hasadı nakliyesi',
      'Hububat, mısır ve pamuk dökme ürün taşımacılığı',
      'Çiftlik içi gübre, kum, çakıl ve yem sevkiyatı',
      'Açık tarla ve bahçe arazilerinde genel lojistik',
    ],
    images: ['/images/products/volkan_romork.webp'],
    status: 'active',
    relatedSlugs: ['bahce-tipi-romork', 'oz-akin-devirmeli-romork', 'devirmeli-traktor-sepeti'],
    order: 11,
  },
  {
    id: 'oz-akin-romork',
    slug: 'oz-akin-devirmeli-romork',
    title: 'Öz-Akın 3 Yana Devirmeli Römork',
    brand: 'Öz-Akın',
    brandType: 'other',
    categoryId: 'romorklar',
    shortDescription:
      '3 yana (sağa, sola, arkaya) hidrolik devirmeli damper sistemiyle dar alanda üstün boşaltma kolaylığı sağlayan 3,5 tonluk tarım römorku.',
    description:
      'Öz-Akın 3 Yana Devirmeli Römork, dar bahçe yollarında veya yanaşmanın güç olduğu sera ve depo girişlerinde manevra yapmaya gerek kalmadan sağa, sola ve geriye döküm yapabilen özel damper geometrisine sahiptir. Çift mafsallı emniyet kilitleri ve güçlü teleskopik hidrolik pistonu yükün kontrollü tahliyeye yardımcı olur. Yüksek kapak dayanımı ve sızdırmaz kasa yapısıyla hem dökme yükte hem de kasalı hasat taşımacılığında uzun ömürlü kullanım sunar.',
    features: [
      '3 yöne (sağ, sol ve arka) hidrolik damperli devirme mekanizması',
      '3,5 - 4 ton nominal taşıma kapasitesi',
      'Emniyet pimli, aşırı yük ve devrilme önleyici kasa kilitleri',
      'Korozyona dayanıklı endüstriyel fırın boya kaplama',
      '50-85 HP arası traktörlerle tam denge ve hidrolik uyum',
    ],
    usageAreas: [
      'Sera çevrelerinde dar boşaltma alanlarında çalışma',
      'Meyve bahçelerinde ağaç aralarında sağa/sola kontrollü ürün dökme',
      'Silaj, toprak, gübre ve hasat ürünlerinin depolara tahliyesi',
      'Dar köy ve çiftlik yollarında günlük nakliye işleri',
    ],
    images: ['/images/products/oz_akin_romork.webp'],
    status: 'active',
    relatedSlugs: ['bahce-tipi-romork', 'volkan-romork', 'devirmeli-traktor-sepeti'],
    order: 12,
  },
  {
    id: 'sevsan-ofset-diskaro',
    slug: 'sevsan-ofset-diskaro',
    title: 'Sevsan Asılır/Çekilir Ofset Diskaro',
    brand: 'Sevsan',
    brandType: 'other',
    categoryId: 'toprak-isleme',
    shortDescription:
      '28, 32 ve 36 çentikli bor çeliği disk seçenekleriyle hem asılır hem çekilir kullanılabilen ağır hizmet ofset diskaro.',
    description:
      'Sevsan Asılır/Çekilir Ofset Diskaro, hasat sonrasında tarlada kalan sert bitki köklerini, anız tabakasını kesip parçalayarak toprağa homojen şekilde karıştıran güçlü bir birincil ve ikincil toprak işleme makinesidir. Özel bor alaşımlı ısıl işlem görmüş çentikli diskleri, aşınmaya karşı maksimum direnç gösterir. Traktörün hidrolik kollarından asılır ya da çeki oku üzerinden çekilir olarak çalıştırılabilen modüler bağlantısı sayesinde tarla büyüklüğüne göre en yüksek iş verimi elde edilir.',
    features: [
      '28, 32 ve 36 diskli model ve iş genişliği varyasyonları',
      'Asılır (3 nokta askı) ve çekilir tip hibrit kullanım imkanı',
      'Yüksek kaliteli bor çeliği, ısıl işlemli çentikli ve düz disk kombinasyonu',
      'Toz ve çamur sızdırmaz çift rulmanlı ağır yataklama grubu',
      '75 HP ile 120 HP arası tarla traktörleriyle çekiş gereksinimi (model bazında teyit edilmelidir)',
    ],
    usageAreas: [
      'Hububat, mısır ve ayçiçeği anızını kırma ve toprağa gömme',
      'Pulluk sürümü sonrası oluşan büyük kesekleri ufalarak tohum yatağı hazırlama',
      'Yabancı ot kontrolü ve toprak havalandırma',
      'Geniş tarla arazilerinde hızlı toprak işleme',
    ],
    images: [],
    status: 'active',
    relatedSlugs: ['sevsan-sabit-diskaro', 'sevsan-tandem-diskaro', 'torunoglu-rotovator'],
    order: 13,
  },
  {
    id: 'sevsan-sabit-diskaro',
    slug: 'sevsan-sabit-diskaro',
    title: 'Sevsan Sabit Ofset Diskaro',
    brand: 'Sevsan',
    brandType: 'other',
    categoryId: 'toprak-isleme',
    shortDescription:
      '16, 18 ve 20 disk seçenekleriyle bahçe ve küçük tarla alanlarında kompakt ve çevik toprak işleme sağlayan sabit diskaro.',
    description:
      'Sevsan Sabit Ofset Diskaro, narenciye bahçeleri, zeytinlikler ve orta büyüklükteki tarlalarda traktörü yormadan kesek kırma ve ot temizliği yapan kompakt yapılı bir ekipmandır. Sabit şasi yapısı sayesinde ayar bozulması yaşamaz; dar dönüş yarıçapı ile ağaç diplerine ve tarla sınırlarına rahatça yaklaşır. Düşük beygir gücüne sahip bahçe traktörlerinde dahi yüksek verimlilik sağlayarak yakıt tasarrufuna katkıda bulunur.',
    features: [
      '16, 18 ve 20 diskli kompakt şasi alternatifleri',
      'Ağaç gövdelerine takılmayan pürüzsüz dış hatlar ve sabit açı ayarı',
      'Yağ banyolu, keçeli sağlam porya ve disk rulman yapısı',
      '45-70 HP bahçe ve tarla traktörleri ile uyum değerlendirmesi (model bazında teyit edilmelidir)',
      'Minimum traktör çeki kuvvetiyle maksimum kesme derinliği',
    ],
    usageAreas: [
      'Zeytinlik ve narenciye bahçelerinde sıra aralarının işlenmesi',
      'Tohum ekimi öncesinde üst toprak tabakasının gevşetilmesi',
      'İlkbahar ve sonbahar yabancı ot mücadelesi',
      'Hafif ve orta bünyeli topraklarda yüzlek sürüm',
    ],
    images: [],
    status: 'active',
    sahibindenUrl:
      'https://www.sahibinden.com/ilan/1334259008/detay',
    relatedSlugs: ['sevsan-ofset-diskaro', 'sevsan-tandem-diskaro'],
    order: 14,
  },
  {
    id: 'sevsan-tandem-diskaro',
    slug: 'sevsan-tandem-diskaro',
    title: 'Sevsan Hidrolik Kaydırmalı Tandem Diskaro',
    brand: 'Sevsan',
    brandType: 'other',
    categoryId: 'toprak-isleme',
    shortDescription:
      '20 diskli X tipi tandem düzenine sahip, traktör kabininden hidrolik kontrollü kaydırma sistemiyle ağaç altlarını işleyen özel diskaro.',
    description:
      'Sevsan Hidrolik Kaydırmalı 20\'li Tandem Diskaro, X şeklindeki simetrik disk dizilimi sayesinde tarlayı sağa ya da sola çekmeden, arkasında tümsek veya hendek bırakmadan tamamen düz bir yüzey bırakır. Hidrolik kaydırma mekanizması, traktör sıra arasından ilerlerken ekipmanın ağaç gövdelerine doğru hidrolik olarak kaydırılmasına olanak tanır. Böylece traktör dallara değmeden ağaç altındaki toprak kabartılır ve otlar yok edilir.',
    features: [
      '20 diskli dengeli X tipi (tandem) disk yerleşimi',
      'Kabin içi hidrolik kumandalı hassas sağa-sola kaydırma pistonu',
      'Simetrik toprak akışı sayesinde düzgün ve tesviyeli arazi yüzeyi',
      'Darbe emici ağır hizmet profil şasi ve uzun ömürlü disk yatakları',
      '55-80 HP bahçe traktörleri için optimize edilmiş ağırlık dağılımı',
    ],
    usageAreas: [
      'Alçak taçlı meyve bahçelerinde ağaç altı toprak işleme',
      'Sera yan duvar kenarlarının traktör yanaşmadan işlenmesi',
      'Hassas tohum yatağı hazırlığı ve ot temizliği',
      'Düzgün yüzey gerektiren damlama sulamalı sıra altları',
    ],
    images: [],
    status: 'active',
    relatedSlugs: ['sevsan-ofset-diskaro', 'sevsan-sabit-diskaro', 'torunoglu-rotovator'],
    order: 15,
  },
  {
    id: 'torunoglu-rotovator',
    slug: 'torunoglu-rotovator',
    title: 'Torunoğlu Rotovatör',
    brand: 'Torunoğlu',
    brandType: 'other',
    categoryId: 'toprak-isleme',
    shortDescription:
      '1850–2100 mm iş genişliği, ağır hizmet döküm şanzımanı ve helisel bıçak grubuyla tek geçişte tohum yatağı hazırlayan toprak frezesi.',
    description:
      'Torunoğlu Rotovatör, traktörün kuyruk milinden (PTO) aldığı güçle dönen yüksek dayanımlı C tipi helisel bıçaklarıyla toprağı en ince parçalarına kadar ufalayan profesyonel bir toprak işleme ekipmanıdır. Toprağı devirmeden parçaladığı için alt tabakadaki faydalı mikroorganizmaları korur; organik gübre ve bitki artıklarını ekim derinliğinde homojen bir şekilde harmanlar. Ayarlanabilir arka tesviye kapağı, tohum ekimi veya fide dikimi için düz ve basılmaya hazır zemin oluşturur.',
    features: [
      '1850 mm ve 2100 mm geniş model seçenekleri',
      'Ağır hizmet tipi döküm şanzıman ve güçlü dişli aktarma organları',
      'Aşınmaya dayanıklı alaşımlı ısıl işlem görmüş çelik bıçaklar',
      'Yükseklik ve baskı ayarlı arka tesviye ve bastırma sacı',
      '60-95 HP arası traktörlerle uyum değerlendirmesi (PTO devri ayrıca teyit edilmelidir)',
    ],
    usageAreas: [
      'Fide dikimi ve hassas tohum ekimi öncesi tohum yatağı hazırlığı',
      'Sera içi toprağının gübre ile karıştırılması ve inceltilmesi',
      'Mısır ve pamuk hasadı sonrası köklerin ufalanması',
      'Çeltik, sebze ve bostan arazilerinde tek geçişte zemin hazırlığı',
    ],
    images: [],
    status: 'active',
    relatedSlugs: ['ata-rotovator', 'sevsan-ofset-diskaro'],
    order: 16,
  },
  {
    id: 'ata-sap-parcalama',
    slug: 'ata-sap-parcalama',
    title: 'Ata Makina Sap Parçalama',
    brand: 'Ata Makina',
    brandType: 'other',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Hasat sonrası pamuk, mısır, ayçiçeği ve sera bitki artıklarını parçalayarak toprağa organik humus kazandıran ağır hizmet sap parçalama.',
    description:
      'Ata Makina Sap Parçalama makinesi, hasat sonrasında tarlada kalan kalın mısır sapları, ayçiçeği gövdeleri, budama artıkları ve sera bitki atıklarını güçlü rotor bıçaklarıyla parçalayan çevre dostu bir tarım aletidir. Parçalanan organik artıklar toprağın üst yüzeyine yayılarak hem nem kaybını önler hem de kısa sürede doğal gübreye dönüşür. Anız yakma ihtiyacını tamamen ortadan kaldırarak arazinin verimliliğini ve su tutma kapasitesini artırır.',
    features: [
      'Dinamik balansı alınmış yüksek devirli ağır rotor mili',
      'Sert ve kalın sapları tek geçişte kıran dövme çelik çekiç bıçaklar',
      'Arka koruma kalkanı ve fırlama önleyici zincir perdesi',
      'Yüksekliği ayarlanabilir yan kızaklar ve arka tesviye merdanesi',
      '65-100 HP traktörlerle uyumlu ağır şanzıman yapısı',
    ],
    usageAreas: [
      'Mısır, buğday, ayçiçeği ve pamuk anızını parçalama',
      'Sera sökümü sonrası domates, biber, patlıcan artıklarını öğütme',
      'Meyve bahçelerinde budama dallarının talaş haline getirilmesi',
      'Toprağın organik madde oranını artırma ve anız yangınlarını engelleme',
    ],
    images: ['/images/products/ata_sap_parcalama.webp'],
    status: 'active',
    relatedSlugs: ['sap-cikarma-pasaf-toplama', 'malc-makinesi', 'ata-rotovator'],
    order: 17,
  },
  {
    id: 'ata-rotovator',
    slug: 'ata-rotovator',
    title: 'Ata Rotovatör',
    brand: 'Ata Makina',
    brandType: 'other',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Kuyruk mili tahrikli, sağlam şanzımanlı, bahçe ve tarla alanlarında toprağı kabartan ve kesekleri incelten dayanıklı rotovatör.',
    description:
      'Ata Rotovatör, tarla ve açık bahçe zeminlerinin havalandırılması, taban taşının kırılması sonrası tohum yatağının en ideal granül yapısına getirilmesi için üretilmiş sağlam bir freze makinesidir. Bıçakların dönüş hareketi toprağı geriye doğru fırlatarak arka kapağa çarptırır; böylece iri kesekler parçalanır ve yüzey pürüzsüz hale gelir. ANKURT güvencesiyle çiftçilerimize sunulan bu makine, düzenli bakım ve uygun kullanım gerektirir.',
    features: [
      'Güçlendirilmiş dişli yan aktarma sistemi',
      'Aşınmaya dayanıklı kavisli C tipi dövme çelik bıçak grubu',
      'Tozlu ve çamurlu ortamlarda sızdırmaz özel keçe yataklama',
      'Yaylı baskı sacı ile pürüzsüz zemin tesviyesi',
      '50-80 HP arası bahçe ve tarla traktörlerine mekanik uyum değerlendirmesi (model bazında teyit edilmelidir)',
    ],
    usageAreas: [
      'Sera ve açık tarla fide yatağı hazırlığı',
      'Ahır gübresinin ve kompostun toprağa eşit karıştırılması',
      'Yabancı otların kökleriyle birlikte toprağa kıyılarak gömülmesi',
      'Bahçe sıraları arasında toprak kabartma ve havalandırma',
    ],
    images: ['/images/products/ata_rotovator.webp'],
    status: 'active',
    relatedSlugs: ['torunoglu-rotovator', 'ata-sap-parcalama', 'sevsan-ofset-diskaro'],
    order: 18,
  },
  {
    id: 'su-tankeri',
    slug: '3-ton-su-tankeri',
    title: '3 Ton Su Tankeri',
    brand: 'ANKURT Partner',
    brandType: 'other',
    categoryId: 'tasima',
    shortDescription:
      '3.000 litre su kapasiteli, dalgakıranlı sağlam sac gövdeli, tarla sulama ve ilaçlama destek ikmal tankeri.',
    description:
      '3 Ton Tarımsal Su Tankeri; bahçe sulama, sera ilaçlama makinelerine su ikmali yapma, inşaat ve çiftlik içi temizlik ihtiyaçlarında güvenle kullanılan ağır hizmet tipi bir nakil ekipmanıdır. Tank içi dalgakıran bölmeleri, taşınma sırasında suyun çalkalanarak traktör dengesini bozmasını engeller. Geniş doldurma kapağı ve alt tahliye vanası sayesinde dolum ve boşaltım işlemleri dakikalar içinde tamamlanır. Korozyon önleyici iç ve dış astar korumasıyla uzun ömürlü kullanım sunar.',
    features: [
      '3.000 Litre (3 Ton) net sıvı taşıma hacmi',
      'Çalkantı önleyici iç dalgakıran çelik perdeler',
      'Geniş temizleme ve üst dolum kapağı ile pirinç tahliye vanası',
      'Traktör çeki okuna entegre emniyetli döner başlı kanca',
      'Ağır yüke dayanıklı dingil ve geniş taban tarla lastikleri',
    ],
    usageAreas: [
      'Uzak tarlalara ve bahçelere sulama suyu nakliyesi (içme suyu uygunluğu teyit edilmemiştir)',
      'Sera pülverizatör ve ilaçlama makinelerine su ikmali',
      'Çiftlik, ağıl ve kümes alanlarının tazyikli yıkanması',
      'Yaz aylarında yangın ve kuraklık önleyici acil su rezervi',
    ],
    images: ['/images/products/su_tankeri.webp'],
    status: 'active',
    sahibindenUrl:
      'https://www.sahibinden.com/ilan/1332978075/detay',
    relatedSlugs: ['bahce-tipi-romork', 'devirmeli-traktor-sepeti'],
    order: 19,
  },
  {
    id: 'lazer-tesviye',
    slug: 'lazer-tesviye-duzleme',
    title: 'Lazer Tesviye / Düzleme',
    brand: 'ANKURT Partner',
    brandType: 'other',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Hassas lazer vericili ve hidrolik kontrollü tesviye bıçağıyla su tasarrufu sağlayan profesyonel arazi düzleme ekipmanı.',
    description:
      'Lazer Kontrollü Arazi Tesviye Makinesi, tarla yüzeyindeki kot farklarını milimetrik hassasiyetle düzelterek sulama suyunun tüm parsele eşit dağılmasını sağlayan yüksek teknolojili bir tarım makinesidir. Traktör üzerine monte edilen alıcı ünite, tarlanın merkezine kurulan lazer vericisinden gelen sinyallerle hidrolik bıçak yüksekliğini anlık olarak ayarlar. Su birikintilerini ve kurak kalan tepecikleri ortadan kaldırarak tohum çimlenme oranını artırır, sulama yönetimine yardımcı olur; sonuçlar arazi koşullarına bağlıdır.',
    features: [
      'Milimetrik kot hassasiyeti sunan çift eğimli lazer kontrol sistemi',
      'Ağır hizmet tipi geniş kazıyıcı ve taşıyıcı çelik tesviye bıçağı',
      'Hızlı tepki veren oransal hidrolik kontrol valfleri',
      'Toprakta dalgalanmayı önleyen çok tekerlekli yürüyen aksam geometrisi',
      '80 HP ve üzeri tarla traktörleri ile yüksek debili hidrolik uyum',
    ],
    usageAreas: [
      'Çeltik, pamuk, yonca ve hububat arazilerinde hassas kot düzleme',
      'Salma ve yağmurlama sulamada su göllenmelerini engelleme',
      'Sera kurulumu öncesi zemin tesviyesi ve drenaj eğimi verme',
      'Geniş tarla arazilerinin verim kayıplarını önleyici zemin ıslahı',
    ],
    images: ['/images/products/lazer_tesviye.webp'],
    status: 'active',
    relatedSlugs: ['kazayagi', 'sirt-yapma-makinesi'],
    order: 20,
  },
];

export const products: Product[] = catalogProducts.map(product => ({
  ...product,
  imageKind: ['ankurt-cizel-patlatma', 'ankurt-traktor-sepeti'].includes(product.id) ? 'product' : 'reference',
}));

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.status === 'active');
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(
    (p) => p.categoryId === categoryId && p.status === 'active'
  );
}

export function getProductsByBrandType(brandType: ProductBrandType): Product[] {
  return products.filter(
    (p) => p.brandType === brandType && p.status === 'active'
  );
}

export function getAnkurtProducts(): Product[] {
  return getProductsByBrandType('ankurt');
}

export function getOtherBrandProducts(): Product[] {
  return getProductsByBrandType('other');
}

export function getActiveProducts(): Product[] {
  return products.filter((p) => p.status === 'active');
}

export function getRelatedProducts(slug: string): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return product.relatedSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => p !== undefined);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return getActiveProducts();
  return getActiveProducts().filter(
    (p) =>
      matchesSearch([p.title, p.brand, p.shortDescription, p.description, p.categoryId].join(' '), q)
  );
}

export function getAllBrands(): string[] {
  const brands = new Set<string>();
  getActiveProducts().forEach((p) => {
    if (p.brand) brands.add(p.brand);
  });
  return Array.from(brands).sort();
}
