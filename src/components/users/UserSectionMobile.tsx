import React from 'react';
import classes from './UsersSection.module.scss';
import MotionDiv from '../MotionDiv';
import { User } from '../../types/User';
import MotionSpan from '../MotionSpan';
import MotionImage from '../MotionImg';
import totalUsersIcon from '../../images/totalUsersIcon.svg';
import totalActiveUsers from '../../images/activeUsersIcon.svg';
import totalUsersWithLoan from '../../images/usersWithLoanIcon.svg';
import totalUsersWithSavings from '../../images/usersWithSavingsIcon.svg';
import UsersTableMobile from './UsersTableMobile';
import Pagination from '../pagination/Pagination';
import { numRange } from '../../utils/utility';

interface IUserSectionMobileProps {
  users: User[];
  activeUsers: number | undefined;
  usersWithLoan: number | undefined;
  usersWithSavings: number | undefined;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  updateAnalytics: (users: User[]) => void;
  pageRange: number | undefined;
  currentPage: number;
  itemsPerPage: number;
  handlePageChange: (num: number) => void
  handlePageRange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  filteredUsers: User[]
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>
  searchedUsers: User[]
}

const UserSectionMobile: React.FC<IUserSectionMobileProps> = ({
  users,
  activeUsers,
  usersWithLoan,
  usersWithSavings,
  setUsers,
  updateAnalytics,
  pageRange,
  currentPage,
  itemsPerPage,
  handlePageChange,
  handlePageRange,
  setCurrentPage,
  filteredUsers,
  setFilteredUsers,
  searchedUsers
}) => {
  return (
    <MotionDiv className={classes.usersectionMobile}>
      {users.length > 0 ? (
        <MotionDiv className={classes.usersectionMobile__content}>
          <MotionSpan className={classes.usersectionMobile__content__heading}>
            Users
          </MotionSpan>
          <MotionDiv className={classes.usersectionMobile__content__analytics}>
            <MotionDiv
              className={
                classes.usersectionMobile__content__analytics__usersActiveHolder
              }
            >
              <MotionDiv
                className={
                  classes.usersectionMobile__content__analytics__usersActiveHolder__users
                }
              >
                <MotionImage
                  src={totalUsersIcon}
                  alt="users"
                  className={
                    classes.usersectionMobile__content__analytics__usersActiveHolder__users__img
                  }
                />
                <MotionSpan
                  className={
                    classes.usersectionMobile__content__analytics__usersActiveHolder__users__text
                  }
                >
                  USERS
                </MotionSpan>
                <MotionSpan
                  className={
                    classes.usersectionMobile__content__analytics__usersActiveHolder__users__count
                  }
                >
                  {users.length}
                </MotionSpan>
              </MotionDiv>
              <MotionDiv
                className={
                  classes.usersectionMobile__content__analytics__usersActiveHolder__active
                }
              >
                <MotionImage
                  src={totalActiveUsers}
                  alt="active users"
                  className={
                    classes.usersectionMobile__content__analytics__usersActiveHolder__active__img
                  }
                />
                <MotionSpan
                  className={
                    classes.usersectionMobile__content__analytics__usersActiveHolder__active__text
                  }
                >
                  ACTIVE USERS
                </MotionSpan>
                <MotionSpan
                  className={
                    classes.usersectionMobile__content__analytics__usersActiveHolder__active__count
                  }
                >
                  {activeUsers}
                </MotionSpan>
              </MotionDiv>
            </MotionDiv>
            <MotionDiv
              className={
                classes.usersectionMobile__content__analytics__usersWithLoanSavings
              }
            >
              <MotionDiv
                className={
                  classes.usersectionMobile__content__analytics__usersWithLoanSavings__usersWithLoan
                }
              >
                <MotionImage
                  src={totalUsersWithLoan}
                  alt="users with loan"
                  className={
                    classes.usersectionMobile__content__analytics__usersWithLoanSavings__usersWithLoan__img
                  }
                />
                <MotionSpan
                  className={
                    classes.usersectionMobile__content__analytics__usersWithLoanSavings__usersWithLoan__text
                  }
                >
                  USERS WITH LOAN
                </MotionSpan>
                <MotionSpan
                  className={
                    classes.usersectionMobile__content__analytics__usersWithLoanSavings__usersWithLoan__count
                  }
                >
                  {usersWithLoan}
                </MotionSpan>
              </MotionDiv>
              <MotionDiv
                className={
                  classes.usersectionMobile__content__analytics__usersWithLoanSavings__savings
                }
              >
                <MotionImage
                  src={totalUsersWithSavings}
                  alt="users with savings"
                  className={
                    classes.usersectionMobile__content__analytics__usersWithLoanSavings__savings__img
                  }
                />
                <MotionSpan
                  className={
                    classes.usersectionMobile__content__analytics__usersWithLoanSavings__savings__text
                  }
                >
                  USERS WITH SAVINGS
                </MotionSpan>
                <MotionSpan
                  className={
                    classes.usersectionMobile__content__analytics__usersWithLoanSavings__savings__count
                  }
                >
                  {usersWithSavings}
                </MotionSpan>
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>
          <UsersTableMobile
            users={users}
            setUsers={setUsers}
            updateAnalytics={updateAnalytics}
            pageRange={pageRange}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            filteredUsers={filteredUsers}
            setFilteredUsers={setFilteredUsers}
            searchedUsers={searchedUsers}
          />
          <MotionDiv className={classes.paginationSection}>
              <MotionDiv
                className={classes.paginationSection__rangeHolder}
              >
                <MotionSpan
                  className={
                    classes.paginationSection__rangeHolder__caption
                  }
                >
                  Showing
                </MotionSpan>
                <select
                  name="range"
                  className={
                    classes.paginationSection__rangeHolder__range
                  }
                  onChange={handlePageRange}
                >
                  <option value={""}>Select</option>
                  {numRange.map((num, index) => (
                    <option key={index} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <MotionSpan
                  className={
                    classes.paginationSection__rangeHolder__size
                  }
                >
                  {`Out of ${users.length}`}
                </MotionSpan>
              </MotionDiv>

              <MotionDiv
                className={
                  classes.paginationSection__paginationBtnsHolder
                }
              >
                <Pagination
                  totalItems={
                    filteredUsers.length > 0
                      ? filteredUsers.length
                      : searchedUsers.length > 0
                      ? searchedUsers.length
                      : users.length
                  }
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </MotionDiv>
            </MotionDiv>
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
export default UserSectionMobile;
