import React from 'react';
import classes from './UserDetail.module.scss';
import { User } from '../../types/User';
import MotionSpan from '../MotionSpan';
import MotionDiv from '../MotionDiv';
import { formatNumberWithCommas } from '../../utils/utility';

interface EducationEmploymentProps {
  user: User | undefined;
}

const EducationAndEmployment: React.FC<EducationEmploymentProps> = ({
  user,
}) => {
  return (
    <>
      <MotionSpan
        className={
          classes.userDetailSection__personalInformation__educationEmploymentCaption
        }
      >
        Education and Employment
      </MotionSpan>
      <MotionDiv
        className={
          classes.userDetailSection__personalInformation__educationEmploymentDetails
        }
      >
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__educationEmploymentDetails
          }
        >
          <MotionDiv
            className={
              classes.userDetailSection__personalInformation__educationEmploymentDetails__levelEmail
            }
          >
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__levelEmail__levelCaption
              }
            >
              LEVEL OF EDUCATION
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__levelEmail__levelText
              }
            >
              {user?.levelOfEducation}
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__levelEmail__emailCaption
              }
            >
              OFFICE EMAIL
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__levelEmail__emailText
              }
            >
              {user?.email}
            </MotionSpan>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__educationEmploymentDetails
          }
        >
          <MotionDiv
            className={
              classes.userDetailSection__personalInformation__educationEmploymentDetails__employmentStatusIncome
            }
          >
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__employmentStatusIncome__employmentCaption
              }
            >
              EMPLOYMENT STATUS
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__employmentStatusIncome__employmentText
              }
            >
              {user?.employmentStatus}
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__employmentStatusIncome__income
              }
            >
              MONTHLY INCOME
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__employmentStatusIncome__incomeText
              }
            >
              {`₦${formatNumberWithCommas(
                Number(user?.monthlyIncome),
              )}.00 - ₦${formatNumberWithCommas(
                Number(user?.monthlyIncome) + 2000,
              )}.00`}
            </MotionSpan>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__educationEmploymentDetails
          }
        >
          <MotionDiv
            className={
              classes.userDetailSection__personalInformation__educationEmploymentDetails__sectorLoan
            }
          >
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__sectorLoan__sectorCaption
              }
            >
              SECTOR OF EMPLOYMENT
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__sectorLoan__sectorText
              }
            >
              {user?.sectorOfEmployment}
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__sectorLoan__loanCaption
              }
            >
              LOAN REPAYMENT
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__sectorLoan__loanText
              }
            >
              {`₦${formatNumberWithCommas(Number(user?.loanRepayment))}.00`}
            </MotionSpan>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          className={
            classes.userDetailSection__personalInformation__educationEmploymentDetails
          }
        >
          <MotionDiv
            className={
              classes.userDetailSection__personalInformation__educationEmploymentDetails__duration
            }
          >
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__duration__caption
              }
            >
              DURATION OF EMPLOYMENT
            </MotionSpan>
            <MotionSpan
              className={
                classes.userDetailSection__personalInformation__educationEmploymentDetails__duration__text
              }
            >
              {user?.durationOfEmployment}
            </MotionSpan>
          </MotionDiv>
        </MotionDiv>
      </MotionDiv>
    </>
  );
};
export default EducationAndEmployment;
