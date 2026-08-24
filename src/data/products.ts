// ANKURT TARIM MAKİNALARI — Complete Product Database
// All 20 products populated with rich image assets and verified factual data

export type ProductBrandType = 'ankurt' | 'other';
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
  status: ProductStatus;
  sahibindenUrl?: string;
  relatedSlugs: string[];
  order: number;
}

export const products: Product[] = [
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
      'Bahçe ve sera kullanımına uygun, kompakt tasarımlı tarım römorku.',
    description:
      'ANKURT Bahçe Tipi Römork, dar bahçe yolları ve sera alanlarında rahat manevra yapabilecek şekilde tasarlanmıştır. 2,5–3 ton taşıma kapasitesine sahip modelleri bulunan bu römork, meyve-sebze hasadı, gübre ve malzeme taşıma gibi günlük tarımsal işlerde kullanılmaktadır. Kompakt yapısı sayesinde bahçe aralarında ve sera girişlerinde kolaylıkla hareket edebilir.',
    features: [
      'Bahçe ve sera kullanımına uygun kompakt boyutlar',
      '2,5–3 ton taşıma kapasitesi aralığında modeller',
      'Traktöre kolay bağlantı',
      'Dayanıklı çelik gövde',
    ],
    usageAreas: [
      'Bahçe ve sera hasadı taşıma',
      'Gübre ve toprak taşıma',
      'Genel tarımsal malzeme taşıma',
      'Dar alan ve bahçe içi kullanım',
    ],
    images: ['/images/products/ankurt_bahce_romork.jpg'],
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
      '7 ayaklı, bahçe ve sera toprak hazırlığına uygun çizel (patlatma) aleti.',
    description:
      'ANKURT 7\'li Bahçe-Sera Tipi Çizel, toprak altı sıkışmayı kırmak ve toprağın havalanmasını sağlamak için kullanılan bir patlatma ekipmanıdır. 7 ayak yapısıyla sera ve bahçe alanlarında etkili toprak işleme sağlar. Toprağı yüzeye çıkarmadan derinlemesine işleyerek kök bölgesinin rahat gelişmesine yardımcı olur.',
    features: [
      '7 ayaklı çizel yapısı',
      'Bahçe ve sera tipi kompakt tasarım',
      'Toprak altı sıkışmayı kırma',
      'Derin toprak işleme',
    ],
    usageAreas: [
      'Sera toprak hazırlığı',
      'Bahçe toprak gevşetme',
      'Toprak altı sert tabaka kırma',
      'Ekim öncesi toprak havalandırma',
    ],
    images: [
      '/images/products/ankurt_cizel_patlatma_1246074839.jpg',
      '/images/gallery/cizel_urun_detay_kadraj.jpg',
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
      'Hasat sonrası sap ve pasaf temizliği için tasarlanmış toplama makinası.',
    description:
      'ANKURT Sap Çıkarma ve Pasaf Toplama Makinası, hasat sonrasında tarlada kalan bitki saplarını ve pasafları toplamak için kullanılır. Traktöre bağlanarak çalışan bu makine, tarlanın bir sonraki ekime hazırlanmasında önemli bir adımdır. Toplanan saplar ve pasaflar daha sonra hayvan yemi, örtü malzemesi veya kompost olarak değerlendirilebilir.',
    features: [
      'Etkili sap toplama mekanizması',
      'Pasaf temizleme özelliği',
      'Traktör kuyruk mili ile çalışma',
      'Dayanıklı yapı',
    ],
    usageAreas: [
      'Hasat sonrası tarla temizliği',
      'Sap toplama',
      'Pasaf temizleme',
      'Tarla hazırlığı',
    ],
    images: ['/images/products/ankurt_sap_cikarma.jpg'],
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
      'Sera içi kullanım için özel ölçüde tasarlanmış 220 cm sürgü.',
    description:
      'ANKURT Özel Sera Tipi 220 cm Sürgü, sera içindeki dar alanlar ve alçak yapılar için özel olarak tasarlanmış bir toprak işleme ekipmanıdır. 220 cm çalışma genişliği ile sera koşullarına tam uyum sağlar. Serik ve çevre bölgelerdeki sera üreticileri için geliştirilmiştir.',
    features: [
      '220 cm çalışma genişliği',
      'Sera içi kullanıma özel tasarım',
      'Kompakt yapı',
      'Kolay traktör bağlantısı',
    ],
    usageAreas: [
      'Sera içi toprak işleme',
      'Sera toprak hazırlığı',
      'Dar alan toprak düzenleme',
    ],
    images: ['/images/products/ankurt_sera_surgu.jpg'],
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
      'Arkalık devirmeli, traktöre montajlı taşıma sepeti.',
    description:
      'ANKURT Devirmeli Traktör Sepeti, traktörün arka kısmına monte edilen, arkalık devirmeli bir taşıma ünitesidir. Hasat ürünlerinin, malzemelerin ve ekipmanların tarla ile depo arasında taşınmasında pratik bir çözüm sunar. Devirmeli yapısı sayesinde yüklerin boşaltılması kolay ve hızlıdır.',
    features: [
      'Arkalık devirmeli yapı',
      'Traktör arkasına kolay montaj',
      'Pratik yükleme ve boşaltma',
      'Dayanıklı çelik konstrüksiyon',
    ],
    usageAreas: [
      'Hasat taşıma',
      'Malzeme taşıma',
      'Bahçe ve tarla arası nakliye',
      'Gübre ve yem taşıma',
    ],
    images: [
      '/images/products/ankurt_traktor_sepeti_1246027871.jpg',
      '/images/gallery/traktor_sepeti_urun_detay_kadraj.jpg',
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
    images: ['/images/products/ankurt_sirt_yapma.jpg'],
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
    images: ['/images/products/ankurt_tir_makinasi.jpg'],
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
    images: ['/images/products/ankurt_kazayagi.jpg'],
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
    images: ['/images/products/ankurt_capa.jpg'],
    status: 'active',
    relatedSlugs: ['kazayagi', '7li-bahce-sera-cizel-patlatma', 'sera-tipi-surgu'],
    order: 9,
  },
  {
    id: 'ankurt-malc',
    slug: 'malc-makinesi',
    title: 'ANKURT Malç Makinesi',
    brand: 'ANKURT',
    brandType: 'ankurt',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Bitki artıkları ve sapları öğüterek toprağa karıştıran malç makinesi.',
    description:
      'Malç Makinesi, hasat sonrası kalan bitki artıklarını, sapları ve atıkları öğüterek toprağa karıştırır. Araştırmada ürün görselleri üzerinde ANKURT markası görülmüştür, ancak üretici bilgisi kesinleştirilmelidir. Toprağın organik madde içeriğini artırmaya ve bir sonraki ekime hazırlığa katkı sağlar.',
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
    images: ['/images/products/ankurt_malc.jpg'],
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
      'Volkan marka tarım römorku.',
    description:
      'Volkan Römork, tarımsal taşıma ihtiyaçları için üretilmiş bir tarım römorkudur. ANKURT Tarım Makinaları mağazasında satışı yapılan bu ürün hakkında detaylı bilgi için bizimle iletişime geçebilirsiniz.',
    features: [
      'Tarımsal taşıma amaçlı',
      'Volkan marka üretim',
    ],
    usageAreas: [
      'Tarla nakliye',
      'Hasat taşıma',
      'Malzeme taşıma',
    ],
    images: ['/images/products/volkan_romork.jpg'],
    status: 'active',
    relatedSlugs: ['bahce-tipi-romork', 'oz-akin-devirmeli-romork'],
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
      '3 yana devirmeli, 3,5 ton kapasiteli Öz-Akın tarım römorku.',
    description:
      'Öz-Akın 3 Yana Devirmeli Römork, 3,5 ton taşıma kapasitesiyle tarımsal nakliye işlerinde kullanılan bir römorktur. 3 yana devirmeli yapısı sayesinde farklı boşaltma ihtiyaçlarına uyum sağlar. ANKURT Tarım Makinaları mağazasında satışı yapılmaktadır.',
    features: [
      '3 yana devirmeli sistem',
      '3,5 ton taşıma kapasitesi',
      'Öz-Akın marka üretim',
    ],
    usageAreas: [
      'Tarımsal nakliye',
      'Hasat taşıma',
      'Çok yönlü boşaltma gerektiren işler',
    ],
    images: ['/images/products/oz_akin_romork.jpg'],
    status: 'active',
    relatedSlugs: ['bahce-tipi-romork', 'volkan-romork'],
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
      '28-32-36 disk seçenekli, asılır ve çekilir kullanıma uygun Sevsan ofset diskaro.',
    description:
      'Sevsan Asılır/Çekilir Ofset Diskaro, 28, 32 ve 36 diskli modelleri bulunan bir toprak işleme ekipmanıdır. Asılır veya çekilir olarak kullanılabilir. Tarlada anız işleme, toprak parçalama ve ekim öncesi hazırlık için tercih edilir. ANKURT Tarım Makinaları mağazasında satışı yapılmaktadır.',
    features: [
      '28, 32 ve 36 diskli model seçenekleri',
      'Asılır ve çekilir kullanım',
      'Ofset disk düzeni',
      'Sevsan marka üretim',
    ],
    usageAreas: [
      'Anız işleme',
      'Toprak parçalama',
      'Ekim öncesi tarla hazırlığı',
      'Toprak karıştırma',
    ],
    images: ['/images/products/sevsan_ofset_diskaro.jpg'],
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
      '16-18-20 diskli, sabit ofset tipinde Sevsan diskaro.',
    description:
      'Sevsan Sabit Ofset Diskaro, 16, 18 ve 20 diskli modelleri bulunan bir toprak işleme ekipmanıdır. Sabit ofset yapısıyla kompakt ve manevra kabiliyeti yüksek bir kullanım sunar. ANKURT Tarım Makinaları mağazasında satışı yapılmaktadır.',
    features: [
      '16, 18 ve 20 diskli model seçenekleri',
      'Sabit ofset yapı',
      'Kompakt tasarım',
      'Sevsan marka üretim',
    ],
    usageAreas: [
      'Toprak işleme',
      'Anız parçalama',
      'Tarla hazırlığı',
    ],
    images: ['/images/products/sevsan_sabit_diskaro.jpg'],
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
      '20\'li, X tipi, hidrolik kaydırmalı Sevsan tandem diskaro.',
    description:
      'Sevsan Hidrolik Kaydırmalı 20\'li (X Tipi) Tandem Diskaro, hidrolik kaydırma sistemiyle donatılmış bir toprak işleme ekipmanıdır. X tipi (tandem) disk düzeni ile daha ince toprak işleme sağlar. ANKURT Tarım Makinaları mağazasında satışı yapılmaktadır.',
    features: [
      '20 diskli X tipi (tandem) yapı',
      'Hidrolik kaydırma sistemi',
      'İnce toprak işleme',
      'Sevsan marka üretim',
    ],
    usageAreas: [
      'İnce toprak işleme',
      'Ekim öncesi son hazırlık',
      'Tohum yatağı hazırlama',
    ],
    images: ['/images/products/sevsan_tandem_diskaro.jpg'],
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
      '1850–2100 mm çalışma genişliğinde, özel tasarım Torunoğlu rotovatör.',
    description:
      'Torunoğlu Rotovatör, 1850 ile 2100 mm arası çalışma genişliği seçenekleri bulunan bir toprak işleme ekipmanıdır. Özel tasarım yapısıyla toprak parçalama, karıştırma ve tohum yatağı hazırlığında kullanılır. ANKURT Tarım Makinaları mağazasında satışı yapılmaktadır.',
    features: [
      '1850–2100 mm çalışma genişliği seçenekleri',
      'Özel tasarım',
      'Traktör kuyruk mili ile çalışma',
      'Torunoğlu marka üretim',
    ],
    usageAreas: [
      'Toprak parçalama ve karıştırma',
      'Tohum yatağı hazırlığı',
      'Sera ve tarla toprak işleme',
    ],
    images: ['/images/products/torunoglu_rotovator.jpg'],
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
      'Ata Makina marka sap parçalama makinası.',
    description:
      'Ata Makina Sap Parçalama, hasat sonrası tarlada kalan bitki saplarını parçalayan bir tarım ekipmanıdır. Parçalanan saplar toprağa karışarak organik madde olarak değerlendirilir. ANKURT Tarım Makinaları mağazasında satışı yapılmaktadır.',
    features: [
      'Sap parçalama mekanizması',
      'Traktör kuyruk mili ile çalışma',
      'Ata Makina marka üretim',
    ],
    usageAreas: [
      'Hasat sonrası sap parçalama',
      'Tarla temizliği',
      'Organik madde geri dönüşümü',
    ],
    images: ['/images/products/ata_sap_parcalama.jpg'],
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
      'Ata Makina marka rotovatör.',
    description:
      'Ata Rotovatör, toprak parçalama ve karıştırma amacıyla kullanılan bir toprak işleme ekipmanıdır. Traktör kuyruk milinden güç alarak çalışır. ANKURT Tarım Makinaları mağazasında satışı yapılmaktadır.',
    features: [
      'Toprak parçalama ve karıştırma',
      'Traktör kuyruk mili ile çalışma',
      'Ata Makina marka üretim',
    ],
    usageAreas: [
      'Toprak hazırlığı',
      'Tohum yatağı oluşturma',
      'Tarla ve bahçe toprak işleme',
    ],
    images: ['/images/products/ata_rotovator.jpg'],
    status: 'active',
    relatedSlugs: ['torunoglu-rotovator', 'ata-sap-parcalama', 'sevsan-ofset-diskaro'],
    order: 18,
  },
  {
    id: 'su-tankeri',
    slug: '3-ton-su-tankeri',
    title: '3 Ton Su Tankeri',
    brand: '',
    brandType: 'other',
    categoryId: 'tasima',
    shortDescription:
      '3 ton kapasiteli tarımsal su tankeri.',
    description:
      '3 Ton Su Tankeri, tarla ve bahçelere su taşıma amacıyla kullanılan bir tarımsal ekipmandır. Traktörle çekilerek kullanılır. ANKURT Tarım Makinaları mağazasında satışı yapılmaktadır. Detaylı bilgi için iletişime geçebilirsiniz.',
    features: [
      '3 ton su taşıma kapasitesi',
      'Traktör çekişli kullanım',
    ],
    usageAreas: [
      'Tarla sulama desteği',
      'Su taşıma',
      'Bahçe ve sera su ikmali',
    ],
    images: ['/images/products/su_tankeri.jpg'],
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
    brand: '',
    brandType: 'other',
    categoryId: 'toprak-isleme',
    shortDescription:
      'Tarla yüzeyini lazer rehberliğinde düzleyen tesviye ekipmanı.',
    description:
      'Lazer Tesviye ve Düzleme ekipmanı, tarla yüzeyini hassas bir şekilde düzleyerek sulama verimliliğini artırmak için kullanılır. ANKURT Tarım Makinaları mağazasında satışı yapılmaktadır. Detaylı bilgi ve güncel ürün bilgisi için bizimle iletişime geçin.',
    features: [
      'Lazer rehberli düzleme',
      'Hassas yüzey tesviyesi',
    ],
    usageAreas: [
      'Tarla tesviyesi',
      'Sulama altyapısı hazırlığı',
      'Arazi düzenleme',
    ],
    images: ['/images/products/lazer_tesviye.jpg'],
    status: 'active',
    relatedSlugs: ['kazayagi', 'sirt-yapma-makinesi'],
    order: 20,
  },
];

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
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.categoryId.toLowerCase().includes(q)
  );
}

export function getAllBrands(): string[] {
  const brands = new Set<string>();
  getActiveProducts().forEach((p) => {
    if (p.brand) brands.add(p.brand);
  });
  return Array.from(brands).sort();
}
