import React, { useRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import classes from './Date.module.scss'; 

export interface IMotionInput extends MotionProps {
  placeholder: string;
  className?: string;
  value: Date | null;
  name: string
  onChange: (date: Date | null) => void;
}

const MotionDateInput: React.FC<IMotionInput> = ({
  placeholder,
  className = '',
  value,
  name,
  onChange,
  ...props
}) => {
  const datePickerRef = useRef<DatePicker>(null);

  const handleIconClick = () => {
    if (datePickerRef.current) {
      (datePickerRef.current.input as HTMLInputElement).focus();
    }
  };

  return (
    <div className={`${className} ${classes.dateInput}`}>
      <DatePicker
        ref={datePickerRef}
        selected={value}
        onChange={onChange}
        placeholderText={placeholder}
        name={name}
        customInput={
          <motion.input
            {...props}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className={classes.inputStyle}
          />
        }
      />
      <button
        type="button"
        className={classes.clickableIcon}
        onClick={handleIconClick}
      >
        📅
      </button>
    </div>
  );
};

export default MotionDateInput;
