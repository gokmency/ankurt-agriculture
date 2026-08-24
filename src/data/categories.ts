// ANKURT TARIM MAKİNALARI — Product Categories
// Data-driven category system. Update here to add/remove/reorder categories.

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string; // emoji placeholder — replace with SVG/icon component later
  order: number;
}

export const categories: Category[] = [
  {
    id: 'romorklar',
    name: 'Römorklar',
    slug: 'romorklar',
    description:
      'Bahçe, sera ve tarla kullanımına uygun tarım römorkları. Devirmeli ve sabit modeller.',
    icon: '🚜',
    order: 1,
  },
  {
    id: 'toprak-isleme',
    name: 'Toprak İşleme',
    slug: 'toprak-isleme',
    description:
      'Çizel, kazayağı, diskaro, rotovatör, sap parçalama ve daha fazlası. Tarla ve sera toprak hazırlığı için ekipmanlar.',
    icon: '⚙️',
    order: 2,
  },
  {
    id: 'sera-ekipmanlari',
    name: 'Sera Ekipmanları',
    slug: 'sera-ekipmanlari',
    description:
      'Sera içi kullanıma özel tasarlanmış tarım ekipmanları. Sürgü, çizel ve özel ölçü modeller.',
    icon: '🌿',
    order: 3,
  },
  {
    id: 'tasima',
    name: 'Taşıma',
    slug: 'tasima',
    description:
      'Traktör sepetleri, su tankerleri ve taşıma ekipmanları.',
    icon: '📦',
    order: 4,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
