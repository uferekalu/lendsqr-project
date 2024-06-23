import React from 'react';
import { motion } from 'framer-motion';
import { User } from '../../types/User';
import classes from './UsersSection.module.scss';
import MotionDiv from '../MotionDiv';
import MotionSpan from '../MotionSpan';
import MotionImage from '../MotionImg';
import filterIcon from '../../images/filterIcon.svg';
import { dateConversion } from './../../utils/utility';

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <MotionDiv className={classes.userTable}>
      <MotionDiv className={classes.userTable__headerHolder}>
        <MotionDiv
          className={classes.userTable__headerHolder__organizationHolder}
        >
          <MotionSpan
            className={
              classes.userTable__headerHolder__organizationHolder__text
            }
          >
            Organization
          </MotionSpan>
          <MotionImage
            src={filterIcon}
            alt="filter"
            className={classes.userTable__headerHolder__organizationHolder__img}
          />
        </MotionDiv>
        <MotionDiv className={classes.userTable__headerHolder__usernameHolder}>
          <MotionSpan
            className={classes.userTable__headerHolder__usernameHolder__text}
          >
            username
          </MotionSpan>
          <MotionImage
            src={filterIcon}
            alt="filter"
            className={classes.userTable__headerHolder__usernameHolder__img}
          />
        </MotionDiv>
        <MotionDiv className={classes.userTable__headerHolder__emailHolder}>
          <MotionSpan
            className={classes.userTable__headerHolder__emailHolder__text}
          >
            email
          </MotionSpan>
          <MotionImage
            src={filterIcon}
            alt="filter"
            className={classes.userTable__headerHolder__emailHolder__img}
          />
        </MotionDiv>
        <MotionDiv className={classes.userTable__headerHolder__phoneHolder}>
          <MotionSpan
            className={classes.userTable__headerHolder__phoneHolder__text}
          >
            Phone number
          </MotionSpan>
          <MotionImage
            src={filterIcon}
            alt="filter"
            className={classes.userTable__headerHolder__phoneHolder__img}
          />
        </MotionDiv>
        <MotionDiv className={classes.userTable__headerHolder__dateHolder}>
          <MotionSpan
            className={classes.userTable__headerHolder__dateHolder__text}
          >
            date joined
          </MotionSpan>
          <MotionImage
            src={filterIcon}
            alt="filter"
            className={classes.userTable__headerHolder__dateHolder__img}
          />
        </MotionDiv>
        <MotionDiv className={classes.userTable__headerHolder__statusHolder}>
          <MotionSpan
            className={classes.userTable__headerHolder__statusHolder__text}
          >
            status
          </MotionSpan>
          <MotionImage
            src={filterIcon}
            alt="filter"
            className={classes.userTable__headerHolder__statusHolder__img}
          />
        </MotionDiv>
      </MotionDiv>
      {users.slice(0, 11).map((user, index) => {
        const isLastItem = index === users.slice(0, 11).length - 1;
        const isActive = user.status === 'active';
        const isInactive = user.status === 'inactive';
        const isPending = user.status === 'pending';
        const isBlacklisted = user.status === 'blacklisted';
        return (
          <MotionDiv
            key={index}
            className={`${classes.userTable__detail} ${
              isLastItem ? classes.userTable__detail__noBorderBottom : ''
            }`}
          >
            <MotionSpan className={classes.userTable__detail__organization}>
              {user.organization.length > 15
                ? `${user.organization.slice(0, 15)}...`
                : user.organization}
            </MotionSpan>
            <MotionSpan className={classes.userTable__detail__username}>
              {user.username.length > 15
                ? `${user.username.slice(0, 15)}...`
                : user.username}
            </MotionSpan>
            <MotionSpan className={classes.userTable__detail__email}>
              {user.email.length > 15
                ? `${user.email.slice(0, 15)}...`
                : user.email}
            </MotionSpan>
            <MotionSpan className={classes.userTable__detail__phone}>
              {user.phone.length > 15
                ? `${user.phone.slice(0, 15)}...`
                : user.phone}
            </MotionSpan>
            <MotionSpan className={classes.userTable__detail__datejoined}>
              {dateConversion(user.dateJoined)}
            </MotionSpan>
            <MotionSpan
              className={`${classes.userTable__detail__status} ${
                isActive
                  ? classes.userTable__detail__activeStatus
                  : isInactive
                  ? classes.userTable__detail__inactiveStatus
                  : isPending
                  ? classes.userTable__detail__pendingStatus
                  : isBlacklisted
                  ? classes.userTable__detail__blacklistedStatus
                  : ''
              }`}
            >
              {user.status}
            </MotionSpan>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 24 24"
              className={classes.userTable__detail__action}
            >
              <path
                fill="none"
                stroke="rgba(84, 95, 125, 1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
              ></path>
            </svg>
          </MotionDiv>
        );
      })}
    </MotionDiv>
  );
};

export default UserTable;
