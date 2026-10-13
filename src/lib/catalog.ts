export interface CatalogFilters { category: string; brand: string; query: string }
export function readFilters(search: string): CatalogFilters {
  const params = new URLSearchParams(search);
  return { category: params.get('kategori') || params.get('category') || 'all',
    brand: params.get('marka') || params.get('brand') || 'all',
    query: params.get('q') || params.get('ara') || '' };
}
export function writeFilters(search: string, updates: Partial<CatalogFilters>): string {
  const current = { ...readFilters(search), ...updates };
  const params = new URLSearchParams(search);
  ['kategori', 'category', 'marka', 'brand', 'q', 'ara'].forEach(key => params.delete(key));
  if (current.category !== 'all') params.set('kategori', current.category);
  if (current.brand !== 'all') params.set('marka', current.brand);
  if (current.query.trim()) params.set('q', current.query);
  return params.toString();
}
