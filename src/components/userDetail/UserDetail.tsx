import React from 'react';
import classes from './UserDetail.module.scss';
import MotionDiv from '../MotionDiv';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import UserDetailSection from './UserDetailSection';

const UserDetailScreen: React.FC = () => {
  return (
    <MotionDiv className={classes.userDetails}>
      <Header />
      <MotionDiv className={classes.userDetails__main}>
        <Sidebar />
        <UserDetailSection />
      </MotionDiv>
    </MotionDiv>
  );
};

export default UserDetailScreen;
