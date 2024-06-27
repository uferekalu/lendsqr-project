import React, { useState } from 'react';
import classes from './Dashboard.module.scss';
import MotionDiv from '../MotionDiv';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import UsersSection from '../users/UsersSection';
import { User } from '../../types/User';

const Dashboard: React.FC = () => {
  const [searchedUsers, setSearchedUsers] = useState<User[]>([]);
  return (
    <MotionDiv className={classes.dashboard} data-testid="dashboard-component">
      <Header searchedUsers={searchedUsers} setSearchedUsers={setSearchedUsers} />
      <MotionDiv className={classes.dashboard__main}>
        <Sidebar />
        <UsersSection searchedUsers={searchedUsers} />
      </MotionDiv>
    </MotionDiv>
  );
};

export default Dashboard;
