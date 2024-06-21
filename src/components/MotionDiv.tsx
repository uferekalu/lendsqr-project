import React from 'react';
import { motion, MotionProps } from 'framer-motion';

export interface IMotionDiv extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

const MotionDiv: React.FC<IMotionDiv> = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
