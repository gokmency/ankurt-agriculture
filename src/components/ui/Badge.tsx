import * as React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'chartreuse' | 'sage' | 'forest' | 'outline' | 'default';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  pill?: boolean;
}

const badgeStyles: Record<BadgeVariant, string> = {
  // Chartreuse Lime (#c8f169) with Ink Black text
  chartreuse: 'bg-[#c8f169] text-[#000000]',
  
  // Pale Sage (#eef2e3) with Deep Forest text
  sage: 'bg-[#eef2e3] text-[#043f2e]',
  
  // Deep Forest (#043f2e) with Paper White text
  forest: 'bg-[#043f2e] text-[#fcfcfc]',
  
  // Outline with hairline Ink Black border
  outline: 'bg-transparent border border-[#000000]/20 text-[#043f2e]',
  
  default: 'bg-[#c8f169] text-[#000000]',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', pill = false, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 text-[12px] font-medium tracking-wide uppercase',
          pill ? 'rounded-full' : 'rounded-[4px]',
          badgeStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';
