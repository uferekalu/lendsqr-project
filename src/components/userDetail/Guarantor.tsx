import React from 'react';
import classes from './UserDetail.module.scss';
import { User } from '../../types/User';
import MotionSpan from '../MotionSpan';
import MotionDiv from '../MotionDiv';

interface GuarantorProps {
  user: User | undefined;
}

const Guarantor: React.FC<GuarantorProps> = ({ user }) => {
  return (
    <>
      <MotionSpan
        className={
          classes.userDetailSection__personalInformation__guarantorCaption
        }
      >
        Guarantor
      </MotionSpan>
      <MotionDiv
        className={classes.userDetailSection__personalInformation__guarantor}
      >
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__guarantor__fullName
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__guarantor__fullName__caption
            }
          >
            FULL NAME
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__guarantor__fullName__text
            }
          >
            {`${user?.guarantor.fullName}`}
          </MotionSpan>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__guarantor__phone
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__guarantor__phone__caption
            }
          >
            PHONE NUMBER
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__guarantor__phone__text
            }
          >
            {`${user?.guarantor.phone}`}
          </MotionSpan>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__guarantor__guarantorEmail
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__guarantor__guarantorEmail__caption
            }
          >
            EMAIL ADDRESS
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__guarantor__guarantorEmail__text
            }
          >
            {`${user?.guarantor.email}`}
          </MotionSpan>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__guarantor__relationship
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__guarantor__relationship__caption
            }
          >
            RELATIONSHIP
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__guarantor__relationship__text
            }
          >
            {`${user?.guarantor.relationship}`}
          </MotionSpan>
        </MotionDiv>
        <div></div>
        <div></div>
      </MotionDiv>
    </>
  );
};

export default Guarantor;
