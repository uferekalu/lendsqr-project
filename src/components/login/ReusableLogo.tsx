import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Login.module.scss';
import MotionDiv from '../MotionDiv';
import MotionImage from '../MotionImg';
import MotionSpan from '../MotionSpan';
import logo from '../../images/logo.svg';

const ReusableLogo: React.FC = () => {
  const location = useLocation();
  const isDashboard = location.pathname.includes('/dashboard');
  return (
    <MotionDiv className={classes.loginHome__landing__caption}>
      <MotionImage
        src={logo}
        alt="logo"
        className={classes.loginHome__landing__caption__img}
      />
      <MotionSpan
        className={`${classes.loginHome__landing__caption__text} ${
          isDashboard ? classes.loginHome__landing__caption__hideText : ''
        }`}
      >
        lendsqr
      </MotionSpan>
    </MotionDiv>
  );
};

export default ReusableLogo;
