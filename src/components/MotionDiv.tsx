import React, { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';

type HTMLDivWithoutMotionProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  keyof MotionProps
>;

export interface IMotionDiv extends MotionProps, HTMLDivWithoutMotionProps {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const MotionDiv = forwardRef<HTMLDivElement, IMotionDiv>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className={className}
        ref={ref}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

export default MotionDiv;
