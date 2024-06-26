import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './UserDetail.module.scss';
import MotionDiv from '../MotionDiv';
import MotionImage from '../MotionImg';
import backIcon from '../../images/backIcon.svg';
import avatar from '../../images/avatar.svg';
import lineIcon from '../../images/line.svg';
import ratedStar from '../../images/ratedStar.svg';
import divider from '../../images/divider.svg';
import star from '../../images/star.svg';
import MotionSpan from '../MotionSpan';
import MotionButton from '../MotionBtn';
import { User } from '../../types/User';
import { formatNumberWithCommas } from './../../utils/utility';
import PersonalInformation from './PersonalInformation';
import EducationAndEmployment from './EducationEmployment';
import Socials from './Socials';
import Guarantor from './Guarantor';

const UserDetailSection: React.FC = () => {
  const [user, setUser] = useState<User>();
  const { userId } = useParams();
  const [general, setGeneral] = useState(false);
  const [document, setDocument] = useState(false);
  const [loans, setLoans] = useState(false);
  const [savings, setSavings] = useState(false);
  const [bankDetails, setBankDetails] = useState(false);
  const [appSystem, setAppSystem] = useState(false);
  const navigate = useNavigate();

  const handleGeneral = () => {
    setGeneral(true);
    setDocument(false);
    setLoans(false);
    setSavings(false);
    setBankDetails(false);
    setAppSystem(false);
  };

  const handleDocument = () => {
    setDocument(true);
    setGeneral(false);
    setLoans(false);
    setSavings(false);
    setBankDetails(false);
    setAppSystem(false);
  };
  const handleLoans = () => {
    setLoans(true);
    setDocument(false);
    setGeneral(false);
    setSavings(false);
    setBankDetails(false);
    setAppSystem(false);
  };
  const handleSavings = () => {
    setSavings(true);
    setGeneral(false);
    setLoans(false);
    setDocument(false);
    setBankDetails(false);
    setAppSystem(false);
  };
  const handleBankDetails = () => {
    setBankDetails(true);
    setGeneral(false);
    setLoans(false);
    setDocument(false);
    setSavings(false);
    setAppSystem(false);
  };
  const handleAppSystem = () => {
    setAppSystem(true);
    setBankDetails(false);
    setGeneral(false);
    setLoans(false);
    setDocument(false);
    setSavings(false);
  };

  useEffect(() => {
    setGeneral(true);
  }, []);

  useEffect(() => {
    const getUser = (id: number) => {
      const storedUsers = localStorage.getItem('usersDetails');
      if (storedUsers) {
        const usersData = JSON.parse(storedUsers);
        const user = usersData.filter((user: User) => user.id === id)[0];
        setUser(user);
      }
    };
    getUser(Number(userId));
  }, [userId]);

  return (
    <MotionDiv className={classes.userDetailSection} data-testid="user-detail-component">
      <MotionDiv
        className={classes.userDetailSection__backHolder}
        onClick={() => navigate(`/dashboard`)}
      >
        <MotionImage
          src={backIcon}
          alt="back"
          className={classes.userDetailSection__backHolder__img}
        />
        <MotionSpan className={classes.userDetailSection__backHolder__text}>
          Back to Users
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.userDetailSection__header}>
        <MotionSpan className={classes.userDetailSection__header__text}>
          User Details
        </MotionSpan>
        <MotionDiv className={classes.userDetailSection__header__actionHolder}>
          <MotionButton
            type="button"
            text="Blacklist User"
            className={
              classes.userDetailSection__header__actionHolder__blacklist
            }
            onClick={() => {}}
          />
          <MotionButton
            type="button"
            text="Activate User"
            className={
              classes.userDetailSection__header__actionHolder__activate
            }
            onClick={() => {}}
          />
        </MotionDiv>
      </MotionDiv>
      <MotionDiv className={classes.userDetailSection__profile}>
        <MotionDiv className={classes.userDetailSection__profile__infoHolder}>
          <MotionImage
            src={avatar}
            alt="avatar"
            className={classes.userDetailSection__profile__infoHolder__img}
          />
          <MotionDiv
            className={classes.userDetailSection__profile__infoHolder__nameBVN}
          >
            <MotionSpan
              className={
                classes.userDetailSection__profile__infoHolder__nameBVN__name
              }
            >
              {user?.name}
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__profile__infoHolder__nameBVN__BVN
              }
            >
              {user?.bvn}
            </MotionSpan>
          </MotionDiv>
          <MotionImage
            src={lineIcon}
            alt="line"
            className={classes.userDetailSection__profile__infoHolder__img}
          />
          <MotionDiv
            className={classes.userDetailSection__profile__infoHolder__usersTer}
          >
            <MotionSpan
              className={
                classes.userDetailSection__profile__infoHolder__usersTer__text
              }
            >
              User's Tier
            </MotionSpan>
            <MotionDiv
              className={
                classes.userDetailSection__profile__infoHolder__usersTer__starHolder
              }
            >
              <MotionImage
                src={ratedStar}
                alt="star"
                className={
                  classes.userDetailSection__profile__infoHolder__usersTer__starHolder__img
                }
              />
              <MotionImage
                src={star}
                alt="star"
                className={
                  classes.userDetailSection__profile__infoHolder__usersTer__starHolder__img
                }
              />
              <MotionImage
                src={star}
                alt="star"
                className={
                  classes.userDetailSection__profile__infoHolder__usersTer__starHolder__img
                }
              />
            </MotionDiv>
          </MotionDiv>
          <MotionImage
            src={lineIcon}
            alt="line"
            className={classes.userDetailSection__profile__infoHolder__img}
          />
          <MotionDiv
            className={
              classes.userDetailSection__profile__infoHolder__accountInfoHolder
            }
          >
            <MotionSpan
              className={
                classes.userDetailSection__profile__infoHolder__accountInfoHolder__balance
              }
            >
              {`₦${formatNumberWithCommas(Number(user?.monthlyIncome))}.00`}
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__profile__infoHolder__accountInfoHolder__bankInfo
              }
            >
              {`${user?.account}/${user?.bank}`}
            </MotionSpan>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv className={classes.userDetailSection__profile__headings}>
          <MotionSpan
            onClick={handleGeneral}
            className={`${
              classes.userDetailSection__profile__headings__general
            } ${
              general
                ? classes.userDetailSection__profile__headings__selectedHeader
                : ''
            }`}
          >
            General Details
          </MotionSpan>
          <MotionSpan
            onClick={handleDocument}
            className={`${
              classes.userDetailSection__profile__headings__document
            } ${
              document
                ? classes.userDetailSection__profile__headings__selectedHeader
                : ''
            }`}
          >
            Documents
          </MotionSpan>
          <MotionSpan
            onClick={handleBankDetails}
            className={`${
              classes.userDetailSection__profile__headings__bankDetails
            } ${
              bankDetails
                ? classes.userDetailSection__profile__headings__selectedHeader
                : ''
            }`}
          >
            Bank Details
          </MotionSpan>
          <MotionSpan
            onClick={handleLoans}
            className={`${
              classes.userDetailSection__profile__headings__loans
            } ${
              loans
                ? classes.userDetailSection__profile__headings__selectedHeader
                : ''
            }`}
          >
            Loans
          </MotionSpan>
          <MotionSpan
            onClick={handleSavings}
            className={`${
              classes.userDetailSection__profile__headings__savings
            } ${
              savings
                ? classes.userDetailSection__profile__headings__selectedHeader
                : ''
            }`}
          >
            Savings
          </MotionSpan>
          <MotionSpan
            onClick={handleAppSystem}
            className={`${
              classes.userDetailSection__profile__headings__appSystem
            } ${
              appSystem
                ? classes.userDetailSection__profile__headings__selectedHeader
                : ''
            }`}
          >
            App and System
          </MotionSpan>
        </MotionDiv>
      </MotionDiv>
      <MotionDiv className={classes.userDetailSection__personalInformation}>
        <PersonalInformation user={user} />
        <MotionImage src={divider} alt="divider" className={classes.divider} />
        <EducationAndEmployment user={user} />
        <MotionImage src={divider} alt="divider" className={classes.divider} />
        <Socials user={user} />
        <MotionImage src={divider} alt="divider" className={classes.divider} />
        <Guarantor user={user} />
      </MotionDiv>
    </MotionDiv>
  );
};

export default UserDetailSection;
