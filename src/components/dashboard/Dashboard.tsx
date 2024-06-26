import React from 'react';
import classes from './Dashboard.module.scss';
import MotionDiv from '../MotionDiv';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import UsersSection from '../users/UsersSection';

const Dashboard: React.FC = () => {
  return (
    <MotionDiv className={classes.dashboard} data-testid="dashboard-component">
      <Header />
      <MotionDiv className={classes.dashboard__main}>
        <Sidebar />
        <UsersSection />
      </MotionDiv>
    </MotionDiv>
  );
};

export default Dashboard;
