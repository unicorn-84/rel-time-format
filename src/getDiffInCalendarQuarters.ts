import getDiffInCalendarYears from './getDiffInCalendarYears.js';
import type { TGetDiff } from './types.js';

/**
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of calendar quarters.
 * @example
 * getDiffInCalendarQuarters(new Date('2021-01-01T23:59:59'), new Date('2022-01-01T23:59:59')) //=> -4
 */

const getDiffInCalendarQuarters: TGetDiff = (
  targetDate,
  baseDate,
  abs = false
) => {
  const years = getDiffInCalendarYears(targetDate, baseDate, false);

  const quarters =
    Math.floor((targetDate.getMonth() + 3) / 3) -
    Math.floor((baseDate.getMonth() + 3) / 3) +
    years * 4;

  return abs ? Math.abs(quarters) : quarters;
};

export default getDiffInCalendarQuarters;
