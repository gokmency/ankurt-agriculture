/** Turkish search works with either Turkish or ASCII spelling. */
export function normalizeSearch(value: string): string {
  return value.toLocaleLowerCase('tr-TR').replace(/ı/g, 'i').normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '').replace(/rotovator/g, 'rotavator')
    .trim();
}
export function matchesSearch(text: string, query: string): boolean {
  const haystack = normalizeSearch(text);
  return normalizeSearch(query).split(/\s+/).every(token => haystack.includes(token));
}
export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('tr-TR', {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'}).format(new Date(`${date}T12:00:00Z`));
}
