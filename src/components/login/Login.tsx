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
import { callAPI } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../notification/NotificationContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { addNotification } = useNotification();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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

  const handleSubmit = async () => {
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!isValid) return;

    setLoading(true);
    
    try {
      const usersData = await callAPI();
      if (usersData) {
        const authenticatedUser = usersData.find(
          (user) => user.email === email && user.password === password,
        );

        if (authenticatedUser) {
          localStorage.setItem(
            'authenticatedUser',
            JSON.stringify(authenticatedUser),
          );
          addNotification(
            'Login successful!!',
            3000,
            'rgba(57, 205, 204, 1)',
            'white',
          );
          navigate('/dashboard');
        } else {
          addNotification('Invalid Email or Password', 3000, 'brown', 'white');
        }
      } else {
        addNotification('No user data returned', 3000, 'brown', 'white');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      addNotification(
        'An error occurred while logging in',
        3000,
        'brown',
        'white',
      );
    } finally {
      setLoading(false);
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
          type={showPassword ? 'text' : 'password'}
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
          onClick={handleShowPassword}
          className={`${classes.loginHome__login__passwordshow} ${
            emailError ? classes.loginHome__login__passwordshowExtra : ''
          }`}
        >
          {showPassword ? 'HIDE' : 'SHOW'}
        </MotionSpan>
        <MotionSpan className={classes.loginHome__login__forgotpw}>
          FORGOT PASSWORD?
        </MotionSpan>
        <MotionButton
          disabled={loading}
          text={`${loading ? 'loading...' : 'LOG IN'}`}
          onClick={handleSubmit}
          className={`${classes.loginHome__login__loginBtn} ${
            loading ? classes.loginLoading : ''
          }`}
        />
      </MotionDiv>
    </MotionDiv>
  );
};

export default Login;
