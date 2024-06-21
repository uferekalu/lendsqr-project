import React, { useEffect, useState } from 'react';
import classes from './Sidebar.module.scss';
import MotionDiv from '../MotionDiv';
import MotionImage from '../MotionImg';
import switchOrganization from '../../images/organization.svg';
import downarrow from '../../images/downarrow.svg';
import dashboardIcon from '../../images/dashboardIcon.svg';
import guarantorIcon from '../../images/guarantor.svg';
import loanIcon from '../../images/loanIcon.svg';
import userIcon from '../../images/user.svg';
import decisionModalIcon from '../../images/decisionModalIcon.svg';
import savingsIcon from '../../images/savingsIcon.svg';
import whitelistIcon from '../../images/whitelistIcon.svg';
import karmaIcon from '../../images/karmaIcon.svg';
import loanRequestIcon from '../../images/loanRequestIcon.svg';
import savingProductIcon from '../../images/savingProductIcon.svg';
import feesIcon from '../../images/feesIcon.svg';
import transactionIcon from '../../images/transactionIcon.svg';
import servicesIcon from '../../images/servicesIcon.svg';
import serviceAccountIcon from '../../images/serviceAccountIcon.svg';
import settlementIcon from '../../images/settlementIcon.svg';
import reportIcon from '../../images/reportIcon.svg';
import preferenceIcon from '../../images/preferenceIcon.svg';
import feespricingIcon from '../../images/feespricingIcon.svg';
import auditlogsIcon from '../../images/auditlogsIcon.svg';
import systemMsgIcon from '../../images/systemMsgIcon.svg';
import signoutIcon from '../../images/signoutIcon.svg';
import MotionSpan from '../MotionSpan';

const Sidebar: React.FC = () => {
  const [isUserActive, setIsUserActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 580);
  const [showFullMobileSidebar, setShowFullMobileSidebar] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 580);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsUserActive(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <MotionDiv
      className={`${classes.sidebar} ${
        isSmallScreen && showFullMobileSidebar ? classes.sidebar__mobile : ''
      }`}
      onMouseEnter={() => setShowFullMobileSidebar(true)}
      onMouseLeave={() => setShowFullMobileSidebar(false)}
    >
      <MotionDiv className={classes.sidebar__organization}>
        <MotionImage
          src={switchOrganization}
          alt="organization"
          className={classes.sidebar__organization__img}
        />
        <MotionSpan
          className={`${classes.sidebar__organization__text} ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__orgText
              : ''
          }`}
        >
          Switch Organization
        </MotionSpan>

        <MotionImage
          src={downarrow}
          alt="organization"
          className={`${classes.sidebar__organization__downarrow} ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__downarrow
              : ''
          }`}
        />
      </MotionDiv>
      <MotionDiv className={classes.sidebar__dashboard}>
        <MotionImage
          src={dashboardIcon}
          alt="dashboard"
          className={classes.sidebar__dashboard__img}
        />
        <MotionSpan
          className={`${classes.sidebar__dashboard__text} ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__dashboard
              : ''
          }`}
        >
          Dashboard
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__customer}>
        <MotionSpan
          className={`${classes.sidebar__customer__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__customer
              : ''
          }`}
        >
          CUSTOMERS
        </MotionSpan>
      </MotionDiv>
      <MotionDiv
        className={classes.sidebar__user}
        style={
          isUserActive
            ? {
                borderLeft: '5px solid rgba(57, 205, 204, 1)',
                backgroundColor: 'rgb(210, 234, 234)',
              }
            : {
                borderLeft: 'none',
              }
        }
      >
        <MotionImage
          src={userIcon}
          alt="user"
          className={classes.sidebar__user__img}
        />
        <MotionSpan
          className={`${classes.sidebar__user__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__user
              : ''
          }`}
        >
          Users
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__guarantor}>
        <MotionImage
          src={guarantorIcon}
          alt="guarantor"
          className={classes.sidebar__guarantor__img}
        />
        <MotionSpan
          className={`${classes.sidebar__guarantor__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__guarantor
              : ''
          }`}
        >
          Guarantors
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__loan}>
        <MotionImage
          src={loanIcon}
          alt="loan"
          className={classes.sidebar__loan__img}
        />
        <MotionSpan
          className={`${classes.sidebar__loan__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__loans
              : ''
          }`}
        >
          Loans
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__decision}>
        <MotionImage
          src={decisionModalIcon}
          alt="decision"
          className={classes.sidebar__decision__img}
        />
        <MotionSpan
          className={`${classes.sidebar__decision__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__decision
              : ''
          }`}
        >
          Decision Models
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__savings}>
        <MotionImage
          src={savingsIcon}
          alt="savings"
          className={classes.sidebar__savings__img}
        />
        <MotionSpan
          className={`${classes.sidebar__savings__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__savings
              : ''
          }`}
        >
          Savings
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__loanrequest}>
        <MotionImage
          src={loanRequestIcon}
          alt="loan request"
          className={classes.sidebar__loanrequest__img}
        />
        <MotionSpan
          className={`${classes.sidebar__loanrequest__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__loanrequests
              : ''
          }`}
        >
          Loan Requests
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__whitelist}>
        <MotionImage
          src={whitelistIcon}
          alt="whitelist"
          className={classes.sidebar__whitelist__img}
        />
        <MotionSpan
          className={`${classes.sidebar__whitelist__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__whitelist
              : ''
          }`}
        >
          Whitelist
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__karma}>
        <MotionImage
          src={karmaIcon}
          alt="karma"
          className={classes.sidebar__karma__img}
        />
        <MotionSpan
          className={`${classes.sidebar__karma__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__karma
              : ''
          }`}
        >
          Karma
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__businesses}>
        <MotionSpan
          className={`${classes.sidebar__businesses__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__businesses
              : ''
          }`}
        >
          BUSINESSES
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__businessorg}>
        <MotionImage
          src={switchOrganization}
          alt="org"
          className={classes.sidebar__businessorg__img}
        />
        <MotionSpan
          className={`${classes.sidebar__businessorg__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__businessorg
              : ''
          }`}
        >
          Organization
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__loanproduct}>
        <MotionImage
          src={loanRequestIcon}
          alt="loan product"
          className={classes.sidebar__loanproduct__img}
        />
        <MotionSpan
          className={`${classes.sidebar__loanproduct__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__loanproduct
              : ''
          }`}
        >
          Loan Products
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__savingsproduct}>
        <MotionImage
          src={savingProductIcon}
          alt="saving product"
          className={classes.sidebar__savingsproduct__img}
        />
        <MotionSpan
          className={`${classes.sidebar__savingsproduct__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__savingsproduct
              : ''
          }`}
        >
          Savings Products
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__feesandcharges}>
        <MotionImage
          src={feesIcon}
          alt="fees"
          className={classes.sidebar__feesandcharges__img}
        />
        <MotionSpan
          className={`${classes.sidebar__feesandcharges__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__feesandcharges
              : ''
          }`}
        >
          Fees and Charges
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__transaction}>
        <MotionImage
          src={transactionIcon}
          alt="transaction"
          className={classes.sidebar__transaction__img}
        />
        <MotionSpan
          className={`${classes.sidebar__transaction__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__transaction
              : ''
          }`}
        >
          Transactions
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__services}>
        <MotionImage
          src={servicesIcon}
          alt="services"
          className={classes.sidebar__services__img}
        />
        <MotionSpan
          className={`${classes.sidebar__services__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__services
              : ''
          }`}
        >
          Services
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__servicesaccount}>
        <MotionImage
          src={serviceAccountIcon}
          alt="service account"
          className={classes.sidebar__servicesaccount__img}
        />
        <MotionSpan
          className={`${classes.sidebar__servicesaccount__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__servicesaccount
              : ''
          }`}
        >
          Service Account
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__settlement}>
        <MotionImage
          src={settlementIcon}
          alt="settlement"
          className={classes.sidebar__settlement__img}
        />
        <MotionSpan
          className={`${classes.sidebar__settlement__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__settlement
              : ''
          }`}
        >
          Settlements
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__reports}>
        <MotionImage
          src={reportIcon}
          alt="report"
          className={classes.sidebar__reports__img}
        />
        <MotionSpan
          className={`${classes.sidebar__reports__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__reports
              : ''
          }`}
        >
          Reports
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__settings}>
        <MotionSpan
          className={`${classes.sidebar__settings__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__settings
              : ''
          }`}
        >
          SETTINGS
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__preference}>
        <MotionImage
          src={preferenceIcon}
          alt="preference"
          className={classes.sidebar__preference__img}
        />
        <MotionSpan
          className={`${classes.sidebar__preference__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__preference
              : ''
          }`}
        >
          Preferences
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__feespricing}>
        <MotionImage
          src={feespricingIcon}
          alt="fees and pricing"
          className={classes.sidebar__feespricing__img}
        />
        <MotionSpan
          className={`${classes.sidebar__feespricing__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__feespricing
              : ''
          }`}
        >
          Fees and Pricing
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__auditlogs}>
        <MotionImage
          src={auditlogsIcon}
          alt="audit logs"
          className={classes.sidebar__auditlogs__img}
        />
        <MotionSpan className={`${classes.sidebar__auditlogs__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__auditlogs
              : ''
          }`}>
          Audit Logs
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__systemmsg}>
        <MotionImage
          src={systemMsgIcon}
          alt="system messages"
          className={classes.sidebar__systemmsg__img}
        />
        <MotionSpan className={`${classes.sidebar__systemmsg__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__systemmsg
              : ''
          }`}>
          Systems Messages
        </MotionSpan>
      </MotionDiv>
      <MotionDiv className={classes.sidebar__signout}>
        <MotionImage
          src={signoutIcon}
          alt="signout"
          className={classes.sidebar__signout__img}
        />
        <MotionSpan className={`${classes.sidebar__signout__text}  ${
            isSmallScreen && showFullMobileSidebar
              ? classes.sidebar__mobile__signout
              : ''
          }`}>
          Logout
        </MotionSpan>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Sidebar;
