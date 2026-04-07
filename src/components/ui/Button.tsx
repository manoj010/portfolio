import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-on-primary hover:bg-primary-dim shadow-lg shadow-primary/10',
      secondary: 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest',
      outline: 'bg-transparent border border-outline-variant/30 text-on-surface hover:bg-surface-container-low',
      ghost: 'bg-transparent text-on-surface hover:bg-surface-container-low',
    };

    const sizes = {
      sm: 'px-4 py-1.5 text-xs',
      md: 'px-6 py-2.5 text-sm',
      lg: 'px-8 py-3.5 text-base',
    };

    const {
      onAnimationStart,
      onDragStart,
      onDragEnd,
      onDrag,
      onMeasureDragRect,
      ...filteredProps
    } = props as any;

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-headline font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...filteredProps}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
