import React from 'react';
import classes from './Dashboard.module.scss';
import MotionDiv from '../MotionDiv';
import Header from '../header/Header';

const Dashboard: React.FC = () => {
  return (
    <MotionDiv className={classes.dashboard}>
      <Header />
    </MotionDiv>
  );
};

export default Dashboard;
