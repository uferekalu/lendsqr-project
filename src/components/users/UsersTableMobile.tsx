import React, { useEffect, useRef, useState } from 'react';
import classes from './UsersSection.module.scss';
import MotionDiv from '../MotionDiv';
import MotionSpan from '../MotionSpan';
import { User } from '../../types/User';
import {
  dateConversion,
  formatDate,
  organizations,
  statuses,
} from '../../utils/utility';
import { useNotification } from '../notification/NotificationContext';
import { useNavigate } from 'react-router-dom';
import Filter from '../filter/Filter';
import MotionImage from '../MotionImg';
import filterIcon from '../../images/filterIcon.svg';
import viewDetailIcon from '../../images/viewDetailIcon.svg';
import blacklistUserIcon from '../../images/blacklistUserIcon.svg';
import activateUserIcon from '../../images/activateUserIcon.svg';

interface UserTableProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  updateAnalytics: (users: User[]) => void;
  pageRange: number | undefined;
  currentPage: number;
  itemsPerPage: number;
  filteredUsers: User[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
  searchedUsers: User[];
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

const UsersTableMobile: React.FC<UserTableProps> = ({
  users,
  setUsers,
  updateAnalytics,
  pageRange,
  currentPage,
  itemsPerPage,
  filteredUsers,
  setFilteredUsers,
  searchedUsers,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [activeUserId, setActiveUserId] = useState<number | null>(null);
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
  const { addNotification } = useNotification();

  const modalRef = useRef<HTMLDivElement>(null);
  const userTableRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

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
      let top =
        ellipsesRect.top - tableRect.top + userTableRef.current!.scrollTop;
      let left =
        ellipsesRect.left -
        tableRect.left +
        userTableRef.current!.scrollLeft +
        ellipsesRect.width;

      const modalWidth = 170;
      if (window.innerWidth <= 580) {
        left = (tableRect.width + 50) / 2;
        top = ellipsesRect.bottom - tableRect.top;
      } else {
        if (left + modalWidth > tableRect.width) {
          left = tableRect.width - modalWidth;
        }
      }

      setModalPosition({ top, left });
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
    addNotification(
      'User activated successfully!!',
      3000,
      'rgba(57, 205, 204, 1)',
      'white',
    );

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
    addNotification(
      'User blacklisted successfully!!',
      3000,
      'rgba(57, 205, 204, 1)',
      'white',
    );

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
        filteredUsers.length > 0
          ? filteredUsers.slice(startIndex, endIndex)
          : searchedUsers.length > 0
          ? searchedUsers.slice(startIndex, endIndex)
          : users.slice(startIndex, endIndex);
      setUpdatedUsers(displayedUsers);
    };
    handleDisplayUsers();
  }, [endIndex, startIndex, filteredUsers, pageRange, users, searchedUsers]);

  return (
    <MotionDiv className={classes.userTableMobile} ref={userTableRef}>
      <MotionDiv
        className={classes.userTableMobile__filterIconHolder}
        onClick={handleFilterVisibility}
      >
        <MotionImage
          src={filterIcon}
          alt="filter"
          className={classes.userTableMobile__filterIconHolder__img}
        />
      </MotionDiv>
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
      {updatedUsers.map((user, index) => {
        const isActive = user.status === 'active';
        const isInactive = user.status === 'inactive';
        const isPending = user.status === 'pending';
        const isBlacklisted = user.status === 'blacklisted';
        return (
          <MotionDiv
            className={classes.userTableMobile__userHolder}
            key={index}
          >
            <MotionDiv
              className={
                classes.userTableMobile__userHolder__organizationHolder
              }
            >
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__organizationHolder__caption
                }
              >
                Organization:
              </MotionSpan>
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__organizationHolder__text
                }
              >
                {user.organization.length > 15
                  ? `${user.organization.slice(0, 15)}...`
                  : user.organization}
              </MotionSpan>
            </MotionDiv>
            <MotionDiv
              className={classes.userTableMobile__userHolder__usernameHolder}
            >
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__usernameHolder__caption
                }
              >
                username:
              </MotionSpan>
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__usernameHolder__text
                }
              >
                {user.username.length > 15
                  ? `${user.username.slice(0, 15)}...`
                  : user.username}
              </MotionSpan>
            </MotionDiv>
            <MotionDiv
              className={classes.userTableMobile__userHolder__emailHolder}
            >
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__emailHolder__caption
                }
              >
                email:
              </MotionSpan>
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__emailHolder__text
                }
              >
                {user.email.length > 15
                  ? `${user.email.slice(0, 15)}...`
                  : user.email}
              </MotionSpan>
            </MotionDiv>
            <MotionDiv
              className={classes.userTableMobile__userHolder__phoneHolder}
            >
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__phoneHolder__caption
                }
              >
                phone:
              </MotionSpan>
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__phoneHolder__text
                }
              >
                {user.phone.length > 15
                  ? `${user.phone.slice(0, 15)}...`
                  : user.phone}
              </MotionSpan>
            </MotionDiv>
            <MotionDiv
              className={classes.userTableMobile__userHolder__dateHolder}
            >
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__dateHolder__caption
                }
              >
                date joined:
              </MotionSpan>
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__dateHolder__text
                }
              >
                {dateConversion(user.dateJoined)}
              </MotionSpan>
            </MotionDiv>
            <MotionDiv
              className={classes.userTableMobile__userHolder__statusHolder}
            >
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__statusHolder__caption
                }
              >
                status:
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
            </MotionDiv>
            <MotionDiv
              className={classes.userTableMobile__userHolder__actionHolder}
            >
              <MotionSpan
                className={
                  classes.userTableMobile__userHolder__actionHolder__caption
                }
              >
                action:
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
                  <MotionDiv
                    className={classes.actionModal__viewDetail}
                    onClick={() => navigate(`/dashboard/${user.id}`)}
                  >
                    <MotionImage
                      src={viewDetailIcon}
                      alt="view detail"
                      className={classes.actionModal__viewDetail__img}
                    />
                    <MotionSpan
                      className={classes.actionModal__viewDetail__text}
                    >
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
          </MotionDiv>
        );
      })}
    </MotionDiv>
  );
};
export default UsersTableMobile;
