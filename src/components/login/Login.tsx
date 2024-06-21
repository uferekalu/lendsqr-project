import React, { useState } from 'react';
import MotionDiv from '../MotionDiv';
import classes from './Login.module.scss';
import MotionImage from '../MotionImg';
import landing from '../../images/landing.svg';
import MotionSpan from '../MotionSpan';
import MotionInput from '../MotionInput';
import MotionButton from '../MotionBtn';
import { validateEmail, validatePassword } from '../../utils/utility';
import ReusableLogo from './ReusableLogo';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError('Email is required');
    } else if (!validateEmail(e.target.value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError('Password is required');
    } else if (!validatePassword(e.target.value)) {
      setPasswordError(
        'Password must contain a capital letter, a small letter, a number, and a symbol',
      );
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailError('Email is required');
    }
    if (!password) {
      setPasswordError('Password is required');
      return
    }
    if (!emailError && !passwordError) {
      // Handle login logic here
      alert('Form submitted successfully');
    }
  };

  return (
    <MotionDiv className={classes.loginHome}>
      <MotionDiv className={classes.loginHome__landing}>
        <ReusableLogo />
        <MotionImage
          src={landing}
          alt="landinf"
          className={classes.loginHome__landing__bgImg}
        />
      </MotionDiv>
      <MotionDiv className={classes.loginHome__login}>
        <MotionSpan className={classes.loginHome__login__greeting}>
          Welcome!
        </MotionSpan>
        <MotionSpan className={classes.loginHome__login__instruction}>
          Enter details to login.
        </MotionSpan>
        <MotionInput
          type="email"
          placeholder="Email"
          className={`${classes.loginHome__login__email} ${
            emailError ? classes.loginHome__login__errorBorder : ''
          }`}
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && (
          <MotionSpan className={classes.loginHome__login__errorMessage}>
            {emailError}
          </MotionSpan>
        )}
        <MotionInput
          type="password"
          placeholder="Password"
          className={`${classes.loginHome__login__password} ${
            passwordError ? classes.loginHome__login__errorBorder : ''
          }`}
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && (
          <MotionSpan className={classes.loginHome__login__errorMessage}>
            {passwordError}
          </MotionSpan>
        )}
        <MotionSpan
          className={`${classes.loginHome__login__passwordshow} ${
            emailError ? classes.loginHome__login__passwordshowExtra : ''
          }`}
        >
          SHOW
        </MotionSpan>
        <MotionSpan className={classes.loginHome__login__forgotpw}>
          FORGOT PASSWORD?
        </MotionSpan>
        <MotionButton
          text="LOG IN"
          onClick={handleSubmit}
          className={classes.loginHome__login__loginBtn}
        />
      </MotionDiv>
    </MotionDiv>
  );
};

export default Login;
