// ANKURT TARIM MAKİNALARI — Guide / Article Data
// Educational content for /rehber section. All written in practical Turkish.

export interface Guide {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  content: string; // Markdown-style content rendered in the page
  relatedProductSlugs: string[];
  publishedDate: string;
  order: number;
}

export const guides: Guide[] = [
  {
    id: 'bahce-tipi-romork-secimi',
    slug: 'bahce-tipi-romork-nasil-secilir',
    title: 'Bahçe Tipi Römork Nasıl Seçilir?',
    shortDescription:
      'Bahçe ve sera işlerinde kullanılacak römork seçerken dikkat edilmesi gereken temel noktalar.',
    content: `Bahçe tipi römork, özellikle dar bahçe yolları, sera girişleri ve küçük-orta ölçekli tarım alanlarında kullanıma uygun olarak tasarlanmış kompakt tarım römorkudur.

## Neden Bahçe Tipi Römork?

Standart tarım römorkları genellikle büyük tarlalar için tasarlanır ve geniş dönüş yarıçapı gerektirir. Bahçe tipi römorklar ise dar alanlar, ağaç araları ve sera yapıları arasında manevra yapabilecek boyutlarda üretilir.

## Seçerken Nelere Dikkat Edilmeli?

**Taşıma kapasitesi:** İhtiyacınıza göre 2 ile 5 ton arası kapasite seçenekleri bulunabilir. Bahçe ve sera işleri için genellikle 2,5–3 ton kapasite yeterli olur.

**Boyutlar:** Sera girişi ve bahçe yollarının genişliğine uygun boyutlar önemlidir. Alım öncesi ölçülerinizi kontrol edin.

**Devirmeli yapı:** Yükün kolay boşaltılması için devirmeli modeller pratik avantaj sağlar.

**Malzeme kalitesi:** Çelik gövde kalınlığı ve kaynak kalitesi, römorkun ömrünü doğrudan etkiler.

**Traktör uyumu:** Römorkun traktörünüze uygun bağlantı tipine sahip olduğundan emin olun.

## Sonuç

Doğru römork seçimi, günlük tarım işlerinizin verimliliğini önemli ölçüde artırır. Bahçe ve sera koşullarınıza uygun model seçimi için uzman görüşü almaktan çekinmeyin.`,
    relatedProductSlugs: ['bahce-tipi-romork', 'volkan-romork', 'oz-akin-devirmeli-romork'],
    publishedDate: '2026-08-21',
    order: 1,
  },
  {
    id: 'sera-cizel-patlatma-secimi',
    slug: 'sera-icin-cizel-patlatma-secimi',
    title: 'Sera İçin Çizel / Patlatma Seçerken Nelere Dikkat Edilir?',
    shortDescription:
      'Sera toprak hazırlığında çizel ve patlatma ekipmanı seçiminin temel kriterleri.',
    content: `Sera tarımında toprak hazırlığı, ürün kalitesini ve verimini doğrudan etkileyen en önemli adımlardan biridir. Çizel (patlatma) ekipmanları, toprak altı sıkışmayı kırarak köklerin rahatça gelişmesini sağlar.

## Çizel (Patlatma) Nedir?

Çizel, toprağı yüzeye çıkarmadan derinlemesine işleyen bir toprak işleme aletidir. "Patlatma" olarak da bilinen bu işlem, sıkışmış toprak tabakalarını kırarak toprak yapısını iyileştirir.

## Sera İçin Neden Önemli?

Sera toprağı, sürekli kullanım ve sulama nedeniyle zamanla sıkışır. Bu sıkışma kök gelişimini engeller, sulama suyunun toprak içinde homojen dağılmasını zorlaştırır ve bitki verimini düşürür.

## Seçim Kriterleri

**Ayak sayısı:** Sera genişliğine uygun ayak sayısı seçilmelidir. 7 ayaklı modeller sera ve bahçe kullanımı için yaygın bir tercihtir.

**Çalışma genişliği:** Sera iç genişliğine uygun olmalıdır. Direklere ve yapıya zarar vermeyecek boyutlar tercih edilmelidir.

**Çalışma derinliği:** Hangi derinlikte toprak sıkışması olduğuna göre ayarlanabilir modeller tercih edilebilir.

**Traktör gücü uyumu:** Çizel, traktörden önemli güç talep eden bir ekipmandır. Traktörünüzün gücüne uygun model seçimi önemlidir.

## Sonuç

Sera toprak hazırlığında doğru çizel seçimi, verimlilik açısından kritik bir yatırımdır. Sera ölçüleriniz ve traktör bilgilerinizle birlikte uzman görüşü almanız en doğru seçimi yapmanıza yardımcı olacaktır.`,
    relatedProductSlugs: ['7li-bahce-sera-cizel-patlatma', 'sera-tipi-surgu', 'kazayagi'],
    publishedDate: '2026-08-21',
    order: 2,
  },
  {
    id: 'diskaro-rotovator-farki',
    slug: 'diskaro-ile-rotovator-arasindaki-fark',
    title: 'Diskaro ile Rotovatör Arasındaki Fark Nedir?',
    shortDescription:
      'İki yaygın toprak işleme ekipmanının kullanım alanları, avantajları ve farkları.',
    content: `Diskaro ve rotovatör, tarımda en yaygın kullanılan toprak işleme ekipmanlarından ikisidir. Her ikisi de toprağı işlemek için kullanılır, ancak çalışma prensipleri ve sonuçları farklıdır.

## Diskaro Nedir?

Diskaro, çelik diskler aracılığıyla toprağı kesen ve karıştıran bir toprak işleme ekipmanıdır. Anız parçalama, toprak çevirme ve kaba toprak işleme işlemlerinde tercih edilir.

**Diskaro türleri:**
- Sabit ofset diskaro
- Asılır / çekilir ofset diskaro
- Tandem (X tipi) diskaro

## Rotovatör Nedir?

Rotovatör, dönen bıçaklar aracılığıyla toprağı ince parçalara ayıran bir toprak işleme ekipmanıdır. Tohum yatağı hazırlığı ve ince toprak işleme için kullanılır.

## Temel Farklar

**İşleme tipi:** Diskaro toprağı keser ve karıştırır; rotovatör toprağı ince parçalar.

**Kullanım zamanı:** Diskaro genellikle ilk toprak işleme adımında kullanılır. Rotovatör, ekime yakın dönemde ince hazırlık için tercih edilir.

**Toprak yapısı:** Ağır ve sert topraklarda diskaro daha etkilidir. Rotovatör, önceden işlenmiş toprakta daha verimli çalışır.

**Anız işleme:** Diskaro anız parçalama için uygundur. Rotovatör, anızlı arazide verimsiz kalabilir.

## Hangisini Seçmeli?

Bu iki ekipman birbirinin rakibi değil, tamamlayıcısıdır. İdeal toprak hazırlığında önce diskaro ile kaba işleme yapılır, ardından rotovatör ile ince tohum yatağı hazırlanır.`,
    relatedProductSlugs: [
      'sevsan-ofset-diskaro',
      'sevsan-sabit-diskaro',
      'sevsan-tandem-diskaro',
      'torunoglu-rotovator',
      'ata-rotovator',
    ],
    publishedDate: '2026-08-21',
    order: 3,
  },
  {
    id: 'sap-cikarma-pasaf-toplama-rehber',
    slug: 'sap-cikarma-pasaf-toplama-ne-ise-yarar',
    title: 'Sap Çıkarma ve Pasaf Toplama Makinası Ne İşe Yarar?',
    shortDescription:
      'Hasat sonrası tarla temizliğinde sap çıkarma ve pasaf toplama makinasının rolü.',
    content: `Hasat sonrası tarlada kalan bitki sapları ve pasaflar, bir sonraki ekim dönemi için tarlanın hazırlanmasını zorlaştırabilir. Sap çıkarma ve pasaf toplama makinaları bu temizlik işlemini mekanize ederek zaman ve işgücü tasarrufu sağlar.

## Sap Çıkarma Nedir?

Hasat edilen bitkinin toprak üstünde kalan sap kısmını toprak yüzeyinden ayırıp toplama işlemidir. Toplanan saplar hayvan yemi, örtü malzemesi veya kompost olarak değerlendirilebilir.

## Pasaf Toplama Nedir?

Pasaf, tarla yüzeyinde kalan kuru bitki artıklarıdır. Pasaf toplama, bu artıkların tarla yüzeyinden temizlenmesi işlemidir.

## Neden Gerekli?

**Ekim hazırlığı:** Temiz bir tarla yüzeyi, ekim makinelerinin düzgün çalışmasını sağlar.

**Hastalık kontrolü:** Tarlada bırakılan bitki artıkları, hastalık ve zararlılar için barınma alanı oluşturabilir.

**Toprak işleme kalitesi:** Temiz tarla yüzeyinde diskaro, rotovatör ve diğer toprak işleme ekipmanları daha verimli çalışır.

**Değerlendirme:** Toplanan saplar ekonomik olarak kullanılabilir.

## Sap Parçalama ile Farkı

Sap çıkarma makinası sapları toplar ve birleştirir. Sap parçalama makinası ise sapları yerinde parçalayarak toprağa karıştırır. İkisi farklı amaçlara hizmet eder ve işletmenin ihtiyacına göre tercih edilir.`,
    relatedProductSlugs: ['sap-cikarma-pasaf-toplama', 'malc-makinesi', 'ata-sap-parcalama'],
    publishedDate: '2026-08-21',
    order: 4,
  },
  {
    id: 'romork-kapasite-secimi',
    slug: 'tarim-romorkunda-kapasite-secimi',
    title: 'Tarım Römorkunda Kapasite ve Devirmeli Sistem Seçimi',
    shortDescription:
      'Tarım römorku alırken kapasite ve devirmeli sistem tercihi hakkında pratik bilgiler.',
    content: `Tarım römorku, çiftlik ve tarla işlerinde en çok kullanılan taşıma ekipmanlarından biridir. Doğru kapasite ve devirmeli sistem seçimi, günlük iş verimliliğinizi doğrudan etkiler.

## Kapasite Nasıl Belirlenir?

**Taşınacak malzeme:** Hasat ürünleri, gübre, toprak ve malzeme gibi farklı yükler farklı ağırlıklara sahiptir.

**Çalışma alanı:** Bahçe ve sera için 2–3 ton yeterli olabilirken, büyük tarlalar için daha yüksek kapasiteler gerekebilir.

**Traktör gücü:** Römork kapasitesi, traktörün çekiş gücüyle orantılı olmalıdır. Aşırı yükleme güvenlik riski oluşturur.

**Yol koşulları:** Eğimli veya bozuk arazi koşullarında daha küçük kapasiteli römorklar tercih edilebilir.

## Devirmeli Sistem Seçenekleri

**Arkaya devirmeli:** En yaygın sistem. Yükü arkadan boşaltır.

**Yana devirmeli:** Yükü sağa veya sola boşaltabilir. Dar alanlarda avantajlıdır.

**3 yana devirmeli:** Arkaya, sağa ve sola boşaltma imkânı sunar. En esnek boşaltma sistemidir.

## Pratik Öneriler

Günlük taşıma ihtiyacınızı belirleyin. İhtiyacınızdan biraz büyük kapasite seçmek, gelecekte esneklik sağlar. Devirmeli sistemin hidrolik bağlantısının traktörünüzle uyumlu olduğunu kontrol edin.`,
    relatedProductSlugs: ['bahce-tipi-romork', 'volkan-romork', 'oz-akin-devirmeli-romork', 'devirmeli-traktor-sepeti'],
    publishedDate: '2026-08-21',
    order: 5,
  },
  {
    id: 'traktor-sepeti-rehber',
    slug: 'traktor-sepeti-ne-ise-yarar',
    title: 'Traktör Sepeti Ne İşe Yarar?',
    shortDescription:
      'Traktör sepetinin kullanım alanları ve römorktan farkı.',
    content: `Traktör sepeti, traktörün arka kısmına doğrudan monte edilen bir taşıma ünitesidir. Römorktan farklı olarak çekilmez, traktörün üzerine bağlanır.

## Traktör Sepeti Nedir?

Traktör sepeti, traktörün üç nokta askı sistemine bağlanan kompakt bir taşıma kasasıdır. Devirmeli modellerde yük, hidrolik veya mekanik sistemle kolayca boşaltılabilir.

## Nerelerde Kullanılır?

**Bahçe hasadı:** Meyve ve sebze toplarken traktörle birlikte hareket eden bir taşıma ünitesi olarak kullanılır.

**Malzeme taşıma:** Gübre, tohum, ilaç ve diğer tarımsal malzemelerin kısa mesafe taşınmasında pratik bir çözüm sunar.

**Alet taşıma:** Tarla kenarına alet ve ekipman taşımak için kullanılabilir.

## Römorktan Farkı

**Boyut:** Traktör sepeti, römorktan çok daha küçük ve kompakttır.

**Bağlantı:** Römork çekilir, traktör sepeti monte edilir.

**Kapasite:** Traktör sepeti daha düşük kapasitelidir, kısa mesafe ve küçük yükler için uygundur.

**Manevra:** Traktör sepeti takılıyken traktör daha kolay manevra yapar.

## Sonuç

Traktör sepeti, günlük tarım işlerinde pratik ve hızlı taşıma ihtiyaçlarını karşılar. Özellikle bahçe ve sera işletmelerinde, traktörle birlikte sürekli hareket eden hafif yükler için idealdir.`,
    relatedProductSlugs: ['devirmeli-traktor-sepeti', 'bahce-tipi-romork'],
    publishedDate: '2026-08-21',
    order: 6,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuides(): Guide[] {
  return [...guides].sort((a, b) => a.order - b.order);
}
