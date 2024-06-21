import React from 'react';
import classes from './Dashboard.module.scss';
import MotionDiv from '../MotionDiv';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <MotionDiv className={classes.dashboard}>
      <Header />
      <Sidebar />
    </MotionDiv>
  );
};

export default Dashboard;
