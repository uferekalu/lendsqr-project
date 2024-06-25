import React from 'react';
import classes from './UserDetail.module.scss';
import { User } from '../../types/User';
import MotionSpan from '../MotionSpan';
import MotionDiv from '../MotionDiv';

interface SocialProps {
  user: User | undefined;
}

const Socials: React.FC<SocialProps> = ({ user }) => {
  return (
    <>
      <MotionSpan
        className={
          classes.userDetailSection__personalInformation__socialsCaption
        }
      >
        Socials
      </MotionSpan>
      <MotionDiv
        className={classes.userDetailSection__personalInformation__socials}
      >
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__socials__twitter
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__socials__twitter__caption
            }
          >
            TWITTER
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__socials__twitter__text
            }
          >
            {`@${user?.socials.twitter}`}
          </MotionSpan>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__socials__facebook
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__socials__facebook__caption
            }
          >
            FACEBOOK
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__socials__facebook__text
            }
          >
            {`${user?.socials.facebook}`}
          </MotionSpan>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__socials__instagram
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__socials__instagram__caption
            }
          >
            INSTAGRAM
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__socials__instagram__text
            }
          >
            {`@${user?.socials.instagram}`}
          </MotionSpan>
        </MotionDiv>
        <div></div>
        <div></div>
        <div></div>
      </MotionDiv>
    </>
  );
};

export default Socials;
