import React, { useState } from 'react';
import classes from './UserDetail.module.scss';
import MotionDiv from '../MotionDiv';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import UserDetailSection from './UserDetailSection';
import { User } from '../../types/User';

const UserDetailScreen: React.FC = () => {
  const [searchedUsers, setSearchedUsers] = useState<User[]>([]);
  return (
    <MotionDiv className={classes.userDetails}>
      <Header searchedUsers={searchedUsers} setSearchedUsers={setSearchedUsers} />
      <MotionDiv className={classes.userDetails__main}>
        <Sidebar />
        <UserDetailSection />
      </MotionDiv>
    </MotionDiv>
  );
};

export default UserDetailScreen;
