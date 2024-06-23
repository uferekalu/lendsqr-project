import React, { useEffect, useState } from 'react';
import classes from './UsersSection.module.scss';
import MotionDiv from '../MotionDiv';
import { User } from '../../types/User';
import { callAPI } from '../../utils/api';
import MotionSpan from '../MotionSpan';
import MotionImage from '../MotionImg';
import totalUsersIcon from '../../images/totalUsersIcon.svg';
import totalActiveUsers from '../../images/activeUsersIcon.svg';
import totalUsersWithLoan from '../../images/usersWithLoanIcon.svg';
import totalUsersWithSavings from '../../images/usersWithSavingsIcon.svg';
import UserTable from './UserTable';

const UsersSection: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [activeUsers, setActiveUsers] = useState<number>();
  const [usersWithLoan, setUsersWithLoan] = useState<number>();
  const [usersWithSavings, setUsersWithSavings] = useState<number>();
  console.log('users with savinggs', usersWithSavings);

  useEffect(() => {
    async function fetchData() {
      const route = 'd25a51e0-37de-4f95-900c-80bce7b52efc';
      try {
        const usersData = await callAPI(route);
        if (usersData) {
          localStorage.setItem('usersDetails', JSON.stringify(usersData));
          setUsers(usersData);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    const storedUsers = localStorage.getItem('usersDetails');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      fetchData();
    }

    if (storedUsers) {
      const allUsers = JSON.parse(storedUsers);
      const activeUsers = allUsers.filter(
        (user: User) => user.status === 'active',
      );
      const usersWithLoan = allUsers.filter(
        (user: User) => Number(user.loanRepayment) > Number(user.monthlyIncome),
      );
      const usersWithSavings = allUsers.filter(
        (user: User) => Number(user.monthlyIncome) > Number(user.loanRepayment),
      );
      setActiveUsers(activeUsers.length);
      setUsersWithLoan(usersWithLoan.length);
      setUsersWithSavings(usersWithSavings.length);
    }
  }, []);
  return (
    <MotionDiv className={classes.usersection}>
      {users.length > 0 ? (
        <MotionDiv className={classes.usersection__content}>
          <MotionSpan className={classes.usersection__content__heading}>
            Users
          </MotionSpan>
          <MotionDiv className={classes.usersection__content__analytics}>
            <MotionDiv
              className={classes.usersection__content__analytics__allUsers}
            >
              <MotionImage
                src={totalUsersIcon}
                alt="users"
                className={
                  classes.usersection__content__analytics__allUsers__img
                }
              />
              <MotionSpan
                className={
                  classes.usersection__content__analytics__allUsers__text
                }
              >
                USERS
              </MotionSpan>
              <MotionSpan
                className={
                  classes.usersection__content__analytics__allUsers__count
                }
              >
                {users.length}
              </MotionSpan>
            </MotionDiv>
            <MotionDiv
              className={classes.usersection__content__analytics__activeUsers}
            >
              <MotionImage
                src={totalActiveUsers}
                alt="active users"
                className={
                  classes.usersection__content__analytics__activeUsers__img
                }
              />
              <MotionSpan
                className={
                  classes.usersection__content__analytics__activeUsers__text
                }
              >
                ACTIVE USERS
              </MotionSpan>
              <MotionSpan
                className={
                  classes.usersection__content__analytics__activeUsers__count
                }
              >
                {activeUsers}
              </MotionSpan>
            </MotionDiv>
            <MotionDiv
              className={classes.usersection__content__analytics__usersWithLoan}
            >
              <MotionImage
                src={totalUsersWithLoan}
                alt="users with loan"
                className={
                  classes.usersection__content__analytics__usersWithLoan__img
                }
              />
              <MotionSpan
                className={
                  classes.usersection__content__analytics__usersWithLoan__text
                }
              >
                USERS WITH LOAN
              </MotionSpan>
              <MotionSpan
                className={
                  classes.usersection__content__analytics__usersWithLoan__count
                }
              >
                {usersWithLoan}
              </MotionSpan>
            </MotionDiv>
            <MotionDiv
              className={
                classes.usersection__content__analytics__usersWithSavings
              }
            >
              <MotionImage
                src={totalUsersWithSavings}
                alt="users with savings"
                className={
                  classes.usersection__content__analytics__usersWithSavings__img
                }
              />
              <MotionSpan
                className={
                  classes.usersection__content__analytics__usersWithSavings__text
                }
              >
                USERS WITH SAVINGS
              </MotionSpan>
              <MotionSpan
                className={
                  classes.usersection__content__analytics__usersWithSavings__count
                }
              >
                {usersWithSavings}
              </MotionSpan>
            </MotionDiv>
          </MotionDiv>
          <UserTable users={users} />
        </MotionDiv>
      ) : (
        <MotionDiv className={classes.usersection__loadingholder}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            className={classes.usersection__loadingholder__icon}
          >
            <g
              fill="none"
              stroke="rgba(33, 63, 125, 1)"
              strokeLinecap="round"
              strokeWidth={2}
            >
              <path
                strokeDasharray={60}
                strokeDashoffset={60}
                strokeOpacity={0.3}
                d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="1.3s"
                  values="60;0"
                ></animate>
              </path>
              <path
                strokeDasharray={15}
                strokeDashoffset={15}
                d="M12 3C16.9706 3 21 7.02944 21 12"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="15;0"
                ></animate>
                <animateTransform
                  attributeName="transform"
                  dur="1.5s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                ></animateTransform>
              </path>
            </g>
          </svg>
        </MotionDiv>
      )}
    </MotionDiv>
  );
};

export default UsersSection;
