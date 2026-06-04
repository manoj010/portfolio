import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

type MotionDivProps = Omit<React.ComponentProps<typeof motion.div>, 'ref'>;

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hoverEffect = true, ...props }, ref) => {
    const filteredProps = {
      ...props,
    } as React.HTMLAttributes<HTMLDivElement> & {
      onMeasureDragRect?: unknown;
    };

    delete filteredProps.onAnimationStart;
    delete filteredProps.onDragStart;
    delete filteredProps.onDragEnd;
    delete filteredProps.onDrag;
    delete filteredProps.onMeasureDragRect;

    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -8, boxShadow: '0 40px 60px rgba(43, 52, 55, 0.08)' } : {}}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        className={cn(
          'bg-surface-container-lowest rounded-[2rem] p-8 border border-white/50 shadow-[0_20px_40px_rgba(43,52,55,0.04)]',
          className
        )}
        {...(filteredProps as unknown as MotionDivProps)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
