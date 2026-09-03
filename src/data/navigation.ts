// ANKURT TARIM MAKİNALARI — Navigation Structure

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: 'Ana Sayfa', href: '/' },
  {
    label: 'Ürünler',
    href: '/urunler/',
    children: [
      { label: 'Tüm Ürünler', href: '/urunler/' },
      { label: 'ANKURT Ürünleri', href: '/urunler/?marka=ankurt' },
      { label: 'Diğer Markalar', href: '/urunler/?marka=diger' },
    ],
  },
  { label: 'Hakkımızda', href: '/hakkimizda/' },
  { label: 'Rehber', href: '/rehber/' },
  { label: 'İletişim', href: '/iletisim/' },
];

export const footerNavigation = {
  products: [
    { label: 'Tüm Ürünler', href: '/urunler/' },
    { label: 'ANKURT Ürünleri', href: '/urunler/?marka=ankurt' },
    { label: 'Römorklar', href: '/urunler/?kategori=romorklar' },
    { label: 'Toprak İşleme', href: '/urunler/?kategori=toprak-isleme' },
    { label: 'Sera Ekipmanları', href: '/urunler/?kategori=sera-ekipmanlari' },
    { label: 'Taşıma', href: '/urunler/?kategori=tasima' },
  ],
  company: [
    { label: 'Hakkımızda', href: '/hakkimizda/' },
    { label: 'Ekipman Rehberi', href: '/rehber/' },
    { label: 'İletişim', href: '/iletisim/' },
  ],
  legal: [
    { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi/' },
    { label: 'KVKK Aydınlatma Metni', href: '/kvkk/' },
    { label: 'Çerez Politikası', href: '/cerez-politikasi/' },
  ],
};
