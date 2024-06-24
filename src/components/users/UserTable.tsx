import React, { useEffect, useRef, useState } from 'react';
import { User } from '../../types/User';
import classes from './UsersSection.module.scss';
import MotionDiv from '../MotionDiv';
import MotionSpan from '../MotionSpan';
import MotionImage from '../MotionImg';
import filterIcon from '../../images/filterIcon.svg';
import {
  dateConversion,
  formatDate,
  organizations,
  statuses,
} from './../../utils/utility';
import viewDetailIcon from '../../images/viewDetailIcon.svg';
import blacklistUserIcon from '../../images/blacklistUserIcon.svg';
import activateUserIcon from '../../images/activateUserIcon.svg';
import Filter from '../filter/Filter';

interface UserTableProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  updateAnalytics: (users: User[]) => void;
  pageRange: number | undefined;
  currentPage: number;
  itemsPerPage: number;
}

type FilterInfo = {
  organization: string;
  username: string;
  email: string;
  date: Date | null;
  phone: string;
  status: string;
};

type FilterCriteria = {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  phone?: string;
  status?: string;
};

const UserTable: React.FC<UserTableProps> = ({
  users,
  setUsers,
  updateAnalytics,
  pageRange,
  currentPage,
  itemsPerPage,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [activeUserId, setActiveUserId] = useState<number | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [filterInformation, setFilterInformation] = useState<FilterInfo>({
    organization: '',
    username: '',
    email: '',
    date: null,
    phone: '',
    status: '',
  });
  const [filterError, setFilterError] = useState<string>('');
  const [updatedUsers, setUpdatedUsers] = useState<User[]>([]);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const modalRef = useRef<HTMLDivElement>(null);
  const userTableRef = useRef<HTMLDivElement>(null);

  const handleDateChange = (date: Date | null) => {
    setFilterInformation({
      ...filterInformation,
      date: date,
    });
    setFilterError('');
  };

  const handleFilterVisibility = () => {
    setFilterVisible(true);
  };

  const handleOrganization = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterInformation({
      ...filterInformation,
      organization: e.target.value,
    });
    setFilterError('');
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInformation({
      ...filterInformation,
      username: e.target.value,
    });
    setFilterError('');
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInformation({
      ...filterInformation,
      email: e.target.value,
    });
    setFilterError('');
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInformation({
      ...filterInformation,
      phone: e.target.value,
    });
    setFilterError('');
  };

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterInformation({
      ...filterInformation,
      status: e.target.value,
    });
    setFilterError('');
  };

  const handleFilterSubmit = () => {
    const { organization, username, email, date, status, phone } =
      filterInformation;

    if (!organization && !username && !email && !date && !status && !phone) {
      setFilterError(
        'Please you must provide at least one field to filter with',
      );
      return;
    }

    const filterCriteria: FilterCriteria = {
      organization: '',
      username: '',
      email: '',
      date: '',
      phone: '',
      status: '',
    };

    if (organization) filterCriteria.organization = organization;
    if (username) filterCriteria.username = username;
    if (email) filterCriteria.email = email;
    if (date) filterCriteria.date = formatDate(date);
    if (status) filterCriteria.status = status;
    if (phone) filterCriteria.phone = phone;

    const filteredUsers = applyFilters(users, filterCriteria);

    setFilteredUsers(filteredUsers);
    setFilterVisible(false);
    setFilterInformation({
      organization: '',
      username: '',
      email: '',
      date: null,
      phone: '',
      status: '',
    });
  };

  const applyFilters = (users: User[], criteria: FilterCriteria) => {
    return users.filter((user) => {
      for (const key in criteria) {
        if (
          criteria[key as keyof FilterCriteria] &&
          user[key as keyof User] !== criteria[key as keyof FilterCriteria]
        ) {
          return false;
        }
      }
      return true;
    });
  };

  const handleResetFilter = () => {
    setFilterInformation({
      organization: '',
      username: '',
      email: '',
      date: null,
      phone: '',
      status: '',
    });
  };

  const handleAction = (
    event: React.MouseEvent<SVGSVGElement>,
    userId: number,
  ) => {
    const tableRect = userTableRef.current?.getBoundingClientRect();
    const ellipsesRect = event.currentTarget.getBoundingClientRect();

    if (tableRect) {
      const top =
        ellipsesRect.top - tableRect.top + userTableRef.current!.scrollTop;
      let left =
        ellipsesRect.left -
        tableRect.left +
        userTableRef.current!.scrollLeft +
        ellipsesRect.width;

      const modalWidth = 170;
      if (left + modalWidth > tableRect.width) {
        left = tableRect.width - modalWidth;
      }

      setModalPosition({ top: top + ellipsesRect.height / 2, left: left });
      setModalVisible(true);
      setActiveUserId(userId);
    }
  };

  const reapplyFilters = () => {
    if (filteredUsers.length > 0) {
      const { organization, username, email, date, status, phone } =
        filterInformation;

      const filterCriteria: FilterCriteria = {};

      if (organization) filterCriteria.organization = organization;
      if (username) filterCriteria.username = username;
      if (email) filterCriteria.email = email;
      if (date) filterCriteria.date = formatDate(date);
      if (status) filterCriteria.status = status;
      if (phone) filterCriteria.phone = phone;

      const newFilteredUsers = applyFilters(users, filterCriteria);
      setFilteredUsers(newFilteredUsers);
    }
  };

  const handleActivateUser = (id: number) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, status: 'active' } : user,
    );
    setUsers(updatedUsers);
    localStorage.setItem('usersDetails', JSON.stringify(updatedUsers));

    updateAnalytics(updatedUsers);

    reapplyFilters();

    setModalVisible(false);
    setActiveUserId(null);
  };

  const handleBlacklistUser = (id: number) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, status: 'blacklisted' } : user,
    );
    setUsers(updatedUsers);
    localStorage.setItem('usersDetails', JSON.stringify(updatedUsers));

    updateAnalytics(updatedUsers);
    reapplyFilters();

    setModalVisible(false);
    setActiveUserId(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalVisible(false);
        setActiveUserId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleDisplayUsers = () => {
      const displayedUsers =
        pageRange !== undefined
          ? users.slice(0, pageRange)
          : filteredUsers.length > 0
          ? filteredUsers.slice(startIndex, endIndex)
          : users.slice(startIndex, endIndex);
      setUpdatedUsers(displayedUsers);
    };
    handleDisplayUsers();
  }, [endIndex, startIndex, filteredUsers, pageRange, users]);

  return (
    <MotionDiv className={classes.userTable} ref={userTableRef}>
      {filterVisible && (
        <Filter
          options={organizations}
          statusOptions={statuses}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneChange={handlePhoneChange}
          handleOrganization={handleOrganization}
          handleDateChange={handleDateChange}
          setFilterVisible={setFilterVisible}
          filterInformation={filterInformation}
          handleStatus={handleStatus}
          handleResetFilter={handleResetFilter}
          handleFilterSubmit={handleFilterSubmit}
          filterError={filterError}
        />
      )}
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
            onClick={handleFilterVisibility}
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
            onClick={handleFilterVisibility}
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
            onClick={handleFilterVisibility}
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
            onClick={handleFilterVisibility}
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
            onClick={handleFilterVisibility}
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
            onClick={handleFilterVisibility}
          />
        </MotionDiv>
      </MotionDiv>
      {updatedUsers.map((user, index) => {
        const isLastItem =
          index ===
          Math.min(
            (filteredUsers.length > 0 ? filteredUsers : users).length,
            11,
          ) -
            1;
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
              onClick={(e) => handleAction(e, user.id)}
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
            {modalVisible && activeUserId === user.id && (
              <MotionDiv
                ref={modalRef}
                className={classes.actionModal}
                style={{ top: modalPosition.top, left: modalPosition.left }}
              >
                <MotionDiv className={classes.actionModal__viewDetail}>
                  <MotionImage
                    src={viewDetailIcon}
                    alt="view detail"
                    className={classes.actionModal__viewDetail__img}
                  />
                  <MotionSpan className={classes.actionModal__viewDetail__text}>
                    View Details
                  </MotionSpan>
                </MotionDiv>
                <MotionDiv
                  className={classes.actionModal__blacklistUser}
                  onClick={() => handleBlacklistUser(user.id)}
                >
                  <MotionImage
                    src={blacklistUserIcon}
                    alt="blacklist user"
                    className={classes.actionModal__blacklistUser__img}
                  />
                  <MotionSpan
                    className={classes.actionModal__blacklistUser__text}
                  >
                    Blacklist User
                  </MotionSpan>
                </MotionDiv>
                <MotionDiv
                  className={classes.actionModal__activateUser}
                  onClick={() => handleActivateUser(user.id)}
                >
                  <MotionImage
                    src={activateUserIcon}
                    alt="activate user"
                    className={classes.actionModal__activateUser__img}
                  />
                  <MotionSpan
                    className={classes.actionModal__activateUser__text}
                  >
                    Activate User
                  </MotionSpan>
                </MotionDiv>
              </MotionDiv>
            )}
          </MotionDiv>
        );
      })}
    </MotionDiv>
  );
};

export default UserTable;
