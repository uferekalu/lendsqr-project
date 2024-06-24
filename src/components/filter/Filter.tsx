import React, { useEffect, useRef } from 'react';
import classes from './Filter.module.scss';
import MotionDiv from '../MotionDiv';
import MotionSpan from '../MotionSpan';
import MotionInput from '../MotionInput';
import { Option } from '../../utils/utility';
import MotionDateInput from '../MotionDate';
import MotionButton from '../MotionBtn';

interface FilterProps {
  options: Option[];
  statusOptions: string[];
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOrganization: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDateChange: (date: Date | null) => void;
  setFilterVisible: React.Dispatch<React.SetStateAction<boolean>>;
  filterInformation: {
    organization: string;
    username: string;
    email: string;
    date: Date | null;
    phone: string;
    status: string;
  };
  handleResetFilter: () => void;
  handleFilterSubmit: () => void;
  filterError: string;
}

const Filter: React.FC<FilterProps> = ({
  options,
  statusOptions,
  handleNameChange,
  handleEmailChange,
  handleDateChange,
  handlePhoneChange,
  handleOrganization,
  handleStatus,
  setFilterVisible,
  filterInformation,
  handleResetFilter,
  handleFilterSubmit,
  filterError,
}) => {
  const filterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setFilterVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setFilterVisible]);

  return (
    <MotionDiv className={classes.filtercomp} ref={filterRef}>
      <MotionDiv className={classes.filterContainer}>
        {filterError && (
          <MotionSpan className={classes.filterContainer__error}>
            {filterError}
          </MotionSpan>
        )}
        <MotionSpan className={classes.filterContainer__orgText}>
          Organization
        </MotionSpan>
        <select
          name="organization"
          className={classes.filterContainer__orgSelect}
          onChange={handleOrganization}
        >
          <option value="">Select</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <MotionSpan className={classes.filterContainer__usernameText}>
          Username
        </MotionSpan>
        <MotionInput
          placeholder="User"
          name="username"
          type="text"
          value={filterInformation.username}
          onChange={handleNameChange}
          className={classes.filterContainer__usernameInput}
        />
        <MotionSpan className={classes.filterContainer__emailText}>
          Email
        </MotionSpan>
        <MotionInput
          placeholder="Email"
          type="email"
          name="email"
          value={filterInformation.email}
          onChange={handleEmailChange}
          className={classes.filterContainer__emailInput}
        />
        <MotionSpan className={classes.filterContainer__dateText}>
          Date
        </MotionSpan>
        <MotionDateInput
          placeholder="Date"
          value={filterInformation.date}
          name="date"
          onChange={handleDateChange}
          className={classes.filterContainer__dateInput}
        />
        <MotionSpan className={classes.filterContainer__phoneText}>
          Phone Number
        </MotionSpan>
        <MotionInput
          placeholder="Phone Number"
          type="text"
          value={filterInformation.phone}
          name="phone"
          onChange={handlePhoneChange}
          className={classes.filterContainer__phoneInput}
        />
        <select
          name="status"
          className={classes.filterContainer__statusSelect}
          onChange={handleStatus}
        >
          <option value="">Select</option>
          {statusOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <MotionDiv className={classes.filterContainer__actionHolder}>
          <MotionButton
            type="button"
            text="Reset"
            onClick={handleResetFilter}
            className={classes.filterContainer__actionHolder__reset}
          />
          <MotionButton
            type="button"
            text="Filter"
            onClick={handleFilterSubmit}
            className={classes.filterContainer__actionHolder__filter}
          />
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Filter;
