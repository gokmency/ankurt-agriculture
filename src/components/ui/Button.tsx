import * as React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'ghost-dark';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  // Primary: Filled Chartreuse Lime (#c8f169) with Ink Black (#000000) text (the only filled chromatic button in the system)
  primary: 'bg-[#c8f169] text-[#000000] hover:bg-[#b8e552] active:bg-[#a6d43e] font-medium border-0 transition-colors',
  
  // Secondary / Forest: Deep Forest (#043f2e) background with Paper White (#fcfcfc) text
  secondary: 'bg-[#043f2e] text-[#fcfcfc] hover:bg-[#2a6f2b] active:bg-[#1f5420] font-medium border-0 transition-colors',
  
  // Ghost / Outline on light surfaces: Transparent with 1px Ink Black hairline border
  outline: 'bg-transparent border border-[#000000] text-[#000000] hover:bg-[#000000]/5 active:bg-[#000000]/10 font-medium transition-colors',
  ghost: 'bg-transparent text-[#043f2e] hover:bg-[#043f2e]/8 active:bg-[#043f2e]/12 font-medium transition-colors',
  
  // Ghost on dark forest sections: Transparent with 1px Paper White border
  'ghost-dark': 'bg-transparent border border-[#fcfcfc] text-[#fcfcfc] hover:bg-[#fcfcfc]/10 active:bg-[#fcfcfc]/15 font-medium transition-colors',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-[13px] h-8 px-3.5 rounded-[4px]',
  md: 'text-[15px] h-10 px-5 rounded-[4px]',
  lg: 'text-[16px] h-12 px-6 rounded-[4px]',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center font-sans select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8f169] disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
        ...props,
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
