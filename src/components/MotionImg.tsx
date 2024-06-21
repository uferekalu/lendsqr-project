import React from 'react';
import { motion, MotionProps } from 'framer-motion';

export interface IMotionImage extends MotionProps {
  src: string;
  alt: string;
  className?: string;
}

const MotionImage: React.FC<IMotionImage> = ({
  src,
  alt,
  className = '',
  ...props
}) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      {...props}
    />
  );
};

export default MotionImage;
