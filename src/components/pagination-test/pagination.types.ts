export type RangeHandler = (min: number, max: number) => number[];

export type PagerRangeHandler = (
  totalCount: number,
  limit: number,
  currentPage: number
) => (number | string)[];
