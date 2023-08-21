import React, {FC} from "react";
import {getPagerRange} from "./pagination.helpers";
import {DOTS} from "./pagination.constants";
import "./style.sass";

interface PaginationProps {
  onChange: (arg: number) => void;
  currentPage: number;
  limit: number;
  totalCount: number;
}

export const Pagination: FC<PaginationProps> = ({
  onChange,
  currentPage,
  limit,
  totalCount,
}) => {
  const pagerRange = getPagerRange(totalCount, limit, currentPage);

  const lastPage = pagerRange[pagerRange.length - 1] as number;

  const isPreviousDisabled = currentPage === 1;
  const isNextEnabled = currentPage + 1 <= lastPage;

  const handleNextClick = () => {
    isNextEnabled && onChange(currentPage + 1);
  };

  const handlePreviousClick = () => {
    !isPreviousDisabled && onChange(currentPage - 1);
  };

  if (currentPage <= 0 || pagerRange.length < 2) {
    return null;
  }

  return (
    <div className="wrapperPagination">
      <ul className="paginationUL">
        {pagerRange.map((pageNumber, index) =>
          pageNumber === DOTS ? (
            <li className="dots" key={index}>
              {DOTS}
            </li>
          ) : (
            <li
              className={
                pageNumber === currentPage
                  ? "pageNumber activePage"
                  : "pageNumber"
              }
              onClick={() => onChange(Number(pageNumber))}
              key={index}
            >
              {pageNumber}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
