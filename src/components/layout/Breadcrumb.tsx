import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  path?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('py-2', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#242423]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const href = item.href || item.path;

          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 mx-1 text-[#043f2e]/30 stroke-[1.5]" />
              )}
              {isLast || !href ? (
                <span className="text-[#043f2e] font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-[#242423] hover:text-[#043f2e] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
