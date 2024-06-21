import React from 'react';
import MotionDiv from '../MotionDiv';
import classes from './Login.module.scss';
import MotionImage from '../MotionImg';
import logo from '../../images/logo.svg';
import landing from '../../images/landing.svg'
import MotionSpan from '../MotionSpan';

const Login: React.FC = () => {
  return (
    <MotionDiv className={classes.loginHome}>
      <MotionDiv className={classes.loginHome__landing}>
        <MotionDiv className={classes.loginHome__landing__caption}>
          <MotionImage
            src={logo}
            alt="logo"
            className={classes.loginHome__landing__caption__img}
          />
          <MotionSpan className={classes.loginHome__landing__caption__text}>
            lendsqr
          </MotionSpan>
        </MotionDiv>
        <MotionImage
          src={landing}
          alt="landinf"
          className={classes.loginHome__landing__bgImg}
        />
      </MotionDiv>
    </MotionDiv>
  );
};

export default Login;
