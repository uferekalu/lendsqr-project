import React from 'react';
import classes from './Pagination.module.scss';

interface IPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

const Pagination: React.FC<IPaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPages = [1, 2, 3];
    const endPages = [totalPages - 2, totalPages - 1, totalPages];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage <= 3) {
      startPages.forEach((page) => pageNumbers.push(page));
      pageNumbers.push('...');
      endPages.forEach((page) => pageNumbers.push(page));
    } else if (currentPage >= totalPages - 2) {
      startPages.forEach((page) => pageNumbers.push(page));
      pageNumbers.push('...');
      endPages.forEach((page) => pageNumbers.push(page));
    } else {
      startPages.forEach((page) => pageNumbers.push(page));
      pageNumbers.push('...');
      pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
      pageNumbers.push('...');
      endPages.forEach((page) => pageNumbers.push(page));
    }

    return pageNumbers;
  };

  return (
    <div className={classes.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${classes.pagination__button} ${classes.pagination__previous}`}
      >
        {'<'}
      </button>
      {renderPageNumbers().map((page, index) =>
        page === '...' ? (
          <span key={index} className={classes.pagination__ellipses}>
            {page}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => handlePageChange(Number(page))}
            className={`${classes.pagination__button} ${
              currentPage === page
                ? classes.pagination__active
                : classes.pagination__inactive
            }`}
          >
            {page}
          </button>
        ),
      )}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${classes.pagination__button} ${classes.pagination__next}`}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
