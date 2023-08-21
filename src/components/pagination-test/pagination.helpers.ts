import {PagerRangeHandler, RangeHandler} from "./pagination.types";
import {
  DOTS,
  ADJACENT_COUNT,
  TOTAL_NUMBER_OF_INITIAL_PAGES,
  FIRST_PAGE_INDEX,
  TOTAL_PAGE_COUNT_DISPLAYED,
  SECOND_ITEM_FROM_SIDES,
} from "./pagination.constants";

const range: RangeHandler = (min, max) =>
  Array(max - min + 1)
    .fill(0)
    .map((_, index) => index + min);

export const getPagerRange: PagerRangeHandler = (
  totalCount,
  limit,
  currentPage
) => {
  const totalPageCount = Math.ceil(totalCount / limit);

  if (TOTAL_NUMBER_OF_INITIAL_PAGES >= totalPageCount) {
    return range(FIRST_PAGE_INDEX, totalPageCount);
  }

  const leftAdjacentIndex = Math.max(
    currentPage - ADJACENT_COUNT,
    FIRST_PAGE_INDEX
  );
  const rightAdjacentIndex = Math.min(
    currentPage + ADJACENT_COUNT,
    totalPageCount
  );

  const shouldShowLeftDots = leftAdjacentIndex > ADJACENT_COUNT;
  const shouldShowRightDots =
    rightAdjacentIndex <= totalPageCount - ADJACENT_COUNT;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftRange = range(FIRST_PAGE_INDEX, TOTAL_PAGE_COUNT_DISPLAYED);

    return [...leftRange, DOTS, totalPageCount];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightRange = range(
      totalPageCount - TOTAL_PAGE_COUNT_DISPLAYED + FIRST_PAGE_INDEX,
      totalPageCount
    );

    return [FIRST_PAGE_INDEX, DOTS, ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = range(leftAdjacentIndex, rightAdjacentIndex);

    const middleRangeFirstPage = middleRange[0];
    const middleRangeLastPage = middleRange[middleRange.length - 1];

    if (middleRangeFirstPage - FIRST_PAGE_INDEX === SECOND_ITEM_FROM_SIDES) {
      return [
        FIRST_PAGE_INDEX,
        middleRangeFirstPage - FIRST_PAGE_INDEX,
        ...middleRange,
        DOTS,
        totalPageCount,
      ];
    }

    if (totalPageCount - middleRangeLastPage === SECOND_ITEM_FROM_SIDES) {
      return [
        FIRST_PAGE_INDEX,
        DOTS,
        ...middleRange,
        middleRangeLastPage + FIRST_PAGE_INDEX,
        totalPageCount,
      ];
    }

    return [FIRST_PAGE_INDEX, DOTS, ...middleRange, DOTS, totalPageCount];
  }

  const rightRange = range(
    totalPageCount - TOTAL_PAGE_COUNT_DISPLAYED + FIRST_PAGE_INDEX,
    totalPageCount
  );

  return [FIRST_PAGE_INDEX, DOTS, ...rightRange];
};
