import React from 'react';
import { motion } from 'framer-motion';

export interface IButton {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const MotionButton: React.FC<IButton> = ({
  text,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
      style={{
        ...(disabled ? { backgroundColor: '#ccc', cursor: 'not-allowed' } : {}),
      }}
    >
      {text}
    </motion.button>
  );
};

export default MotionButton;
