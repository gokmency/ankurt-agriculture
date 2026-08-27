import * as React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'chartreuse' | 'sage' | 'forest' | 'outline' | 'default';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  pill?: boolean;
}

const badgeStyles: Record<BadgeVariant, string> = {
  // Chartreuse Lime (#e7b23f) with Ink Black text
  chartreuse: 'bg-[#e7b23f] text-[#121713]',
  
  // Pale Sage (#f2f0e9) with Deep Forest text
  sage: 'bg-[#f2f0e9] text-[#0f5d35]',
  
  // Deep Forest (#0f5d35) with Paper White text
  forest: 'bg-[#0f5d35] text-[#fbfaf6]',
  
  // Outline with hairline Ink Black border
  outline: 'bg-transparent border border-[#121713]/20 text-[#0f5d35]',
  
  default: 'bg-[#e7b23f] text-[#121713]',
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
