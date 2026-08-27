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
  primary: 'bg-[#e7b23f] text-[#121713] hover:bg-[#f0c45a] active:bg-[#d69e2f] font-bold border border-[#e7b23f] transition-all',
  secondary: 'bg-[#0f5d35] text-white hover:bg-[#184f31] active:bg-[#103c28] font-bold border border-[#0f5d35] transition-all',
  outline: 'bg-transparent border border-[#1c211d]/35 text-[#1c211d] hover:border-[#0f5d35] hover:text-[#0f5d35] font-bold transition-all',
  ghost: 'bg-transparent text-[#0f5d35] hover:bg-[#0f5d35]/8 font-bold transition-all',
  'ghost-dark': 'bg-transparent border border-white/35 text-white hover:border-[#e7b23f] hover:text-[#e7b23f] font-bold transition-all',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-[12px] h-10 px-4 rounded-[6px]',
  md: 'text-[13px] h-12 px-5 rounded-[6px]',
  lg: 'text-[14px] h-14 px-7 rounded-[6px]',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center font-sans uppercase tracking-[0.06em] select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7b23f] disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
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
