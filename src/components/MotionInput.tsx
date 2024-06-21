import React from 'react';
import { motion, MotionProps } from 'framer-motion';

export interface IMotionInput extends MotionProps {
  type: string;
  placeholder: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MotionInput: React.FC<IMotionInput> = ({
  type,
  placeholder,
  className = '',
  value,
  onChange,
  ...props
}) => {
  return (
    <motion.input
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      {...props}
    />
  );
};

export default MotionInput;
