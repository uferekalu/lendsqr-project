import React, { useEffect, useState } from 'react';
import classes from './Search.module.scss';
import MotionDiv from '../MotionDiv';
import MotionInput from '../MotionInput';
import { User } from '../../types/User';

interface IHeaderProps {
  searchedUsers: User[];
  setSearchedUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const Search: React.FC<IHeaderProps> = ({ setSearchedUsers }) => {
  const [searchItem, setSearchItem] = useState('');
  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    const fetchSearchedUsers = () => {
      const storedUsers = localStorage.getItem('usersDetails');
      if (storedUsers) {
        const usersData = JSON.parse(storedUsers);
        const users = usersData.filter(
          (user: User) =>
            user.organization
              .toLowerCase()
              .includes(searchItem.toLowerCase()) ||
            user.username.toLowerCase().includes(searchItem.toLowerCase()) ||
            user.email.toLowerCase().includes(searchItem.toLowerCase()) ||
            user.phone.includes(searchItem.toLowerCase()) ||
            user.status.includes(searchItem.toLowerCase()),
        );
        setSearchedUsers(users);
      }
    };
    fetchSearchedUsers();
  }, [searchItem, setSearchedUsers]);

  return (
    <MotionDiv className={classes.search}>
      <MotionInput
        type="text"
        placeholder="Search for anything"
        className={classes.search__input}
        value={searchItem}
        onChange={handleSearchTerm}
      />
      <MotionDiv className={classes.search__holder}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.4em"
          height="1.4em"
          viewBox="0 0 24 24"
          className={classes.search__holder__icon}
        >
          <path
            fill="white"
            fillRule="evenodd"
            d="m16.31 15.561l4.114 4.115l-.848.848l-4.123-4.123a7 7 0 1 1 .857-.84M16.8 11a5.8 5.8 0 1 0-11.6 0a5.8 5.8 0 0 0 11.6 0"
          />
        </svg>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Search;
