'use client';
import { useSyncExternalStore } from 'react';
import { readFilters, writeFilters, type CatalogFilters } from './catalog';
const changeEvent = 'ankurt:catalog';
function subscribe(callback: () => void) {
  window.addEventListener('popstate', callback);
  window.addEventListener(changeEvent, callback);
  return () => { window.removeEventListener('popstate', callback); window.removeEventListener(changeEvent, callback); };
}
const getSnapshot = () => window.location.search;
const getServerSnapshot = () => '';
export function useCatalogFilters() {
  const search = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const filters = readFilters(search);
  const updateFilters = (updates: Partial<CatalogFilters>, replace = false) => {
    const query = writeFilters(window.location.search, updates);
    const url = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`;
    window.history[replace ? 'replaceState' : 'pushState'](null, '', url);
    window.dispatchEvent(new Event(changeEvent));
  };
  return { filters, updateFilters };
}
