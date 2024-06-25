import React from 'react';
import classes from './UserDetail.module.scss';
import MotionSpan from '../MotionSpan';
import MotionDiv from '../MotionDiv';
import { User } from '../../types/User';

interface PersonalInfoProps {
  user: User | undefined;
}

const PersonalInformation: React.FC<PersonalInfoProps> = ({ user }) => {
  return (
    <>
      <MotionSpan
        className={classes.userDetailSection__personalInformation__caption}
      >
        Personal Information
      </MotionSpan>
      <MotionDiv
        className={classes.userDetailSection__personalInformation__details}
      >
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__details__nameMaritalStatus
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__nameMaritalStatus__name
            }
          >
            FULL NAME
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__nameMaritalStatus__text
            }
          >
            {user?.name}
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__nameMaritalStatus__status
            }
          >
            MARITAL STATUS
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__nameMaritalStatus__statusText
            }
          >
            {user?.maritalStatus}
          </MotionSpan>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__details__phonChildren
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__phonChildren__phone
            }
          >
            PHONE NUMBER
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__phonChildren__number
            }
          >
            {user?.phone}
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__phonChildren__children
            }
          >
            CHILDREN
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__phonChildren__childrenNumber
            }
          >
            {user?.children}
          </MotionSpan>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__details__emailResidence
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__emailResidence__email
            }
          >
            EMAIL ADDRESS
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__emailResidence__emailAddress
            }
          >
            {user?.email}
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__emailResidence__residence
            }
          >
            TYPE OF RESIDENCE
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__emailResidence__residenceAddress
            }
          >
            {user?.typeOfResidence}
          </MotionSpan>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__details__BVN
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__BVN__caption
            }
          >
            BVN
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__BVN__number
            }
          >
            {user?.bvn}
          </MotionSpan>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__details__gender
          }
        >
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__gender__caption
            }
          >
            GENDER
          </MotionSpan>
          <MotionSpan
            className={
              classes.userDetailSection__personalInformation__details__gender__name
            }
          >
            {user?.gender}
          </MotionSpan>
        </MotionDiv>
      </MotionDiv>
    </>
  );
};

export default PersonalInformation;
