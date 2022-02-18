/**
 * Get the number of calendar months between the given dates.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number. Default: `true`.
 *
 * @returns The number of calendar months.
 *
 * @example
 *
 * getDiffInCalendarMonths(new Date('2022-01-01'), new Date('2021-01-01'))
 * //=> 12
 */

import { getDiffInCalendarYears } from './index.js';

const getDiffInCalendarMonths = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  const years = getDiffInCalendarYears(targetDate, baseDate, false);

  const months = targetDate.getMonth() - baseDate.getMonth() + years * 12;

  return abs ? Math.abs(months) : months;
};

export default getDiffInCalendarMonths;
