import React from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionText?: string;
  actionHref?: string;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  actionText,
  actionHref,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'bg-[#fcfcfc] rounded-[16px] border border-[#000000]/10 p-8 sm:p-12 text-center flex flex-col items-center justify-center max-w-md mx-auto my-8',
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 rounded-[4px] bg-[#eef2e3] text-[#043f2e] flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="font-editorial text-2xl text-[#043f2e] mb-2">{title}</h3>
      <p className="text-sm text-[#242423] leading-relaxed mb-6 max-w-xs">{description}</p>
      {actionText && actionHref && (
        <Button asChild variant="primary" size="sm">
          <Link href={actionHref}>{actionText}</Link>
        </Button>
      )}
    </div>
  );
}
