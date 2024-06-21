import React from 'react';
import { motion, MotionProps } from 'framer-motion';

export interface IMotionSpan extends MotionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MotionSpan: React.FC<IMotionSpan> = ({ children, className = '', onClick, ...props }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.span>
  );
}

export default MotionSpan;
