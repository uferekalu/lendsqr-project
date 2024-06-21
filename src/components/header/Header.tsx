import React from 'react';
import classes from './Header.module.scss';
import MotionDiv from '../MotionDiv';
import ReusableLogo from '../login/ReusableLogo';
import Search from '../search/Search';
import MotionSpan from '../MotionSpan';

const Header: React.FC = () => {
  return (
    <MotionDiv className={classes.header}>
      <ReusableLogo />
      <Search />
      <MotionDiv className={classes.header__userProfile}>
        <MotionSpan className={classes.header__userProfile__doc}>
          Docs
        </MotionSpan>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 16 16"
          className={classes.header__userProfile__notification}
        >
          <path
            fill="rgba(33, 63, 125, 1)"
            d="m13.58 11.6l-1.33-2.18V6.33A4.36 4.36 0 0 0 10 2.26a2.45 2.45 0 0 0 0-.38A1.94 1.94 0 0 0 8 0a1.94 1.94 0 0 0-2 1.88a1.64 1.64 0 0 0 0 .38a4.36 4.36 0 0 0-2.25 4.07v3.09L2.42 11.6a1.25 1.25 0 0 0 1.06 1.9h1.77A2.68 2.68 0 0 0 8 16a2.68 2.68 0 0 0 2.75-2.5h1.77a1.25 1.25 0 0 0 1.06-1.9M7.25 1.88A.7.7 0 0 1 8 1.25a.7.7 0 0 1 .75.63a6 6 0 0 0-.75 0a5.9 5.9 0 0 0-.75 0M8 14.75a1.44 1.44 0 0 1-1.5-1.25h3A1.44 1.44 0 0 1 8 14.75m-4.52-2.5l1.34-2.17l.18-.31V6.33a4 4 0 0 1 .6-2.12A2.68 2.68 0 0 1 8 3.12a2.68 2.68 0 0 1 2.4 1.09a4 4 0 0 1 .6 2.12v3.44l.18.31l1.34 2.17z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 24 24"
          className={classes.header__userProfile__user}
        >
          <g fill="none" fillRule="evenodd">
            <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
            <path
              fill="rgba(33, 63, 125, 1)"
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"
            />
          </g>
        </svg>
        <MotionSpan className={classes.header__userProfile__name}>
          Goodnews
        </MotionSpan>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Header;
