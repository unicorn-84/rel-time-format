import getDiffInCalendarYears from './getDiffInCalendarYears.js';
import type { TGetDiff } from './types.js';

/**
 * Get the number of calendar months between the given dates.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of calendar months.
 * @example
 * getDiffInCalendarMonths(new Date('2021-01-01T23:59:59'), new Date('2022-01-01T23:59:59')) //=> -12
 */

const getDiffInCalendarMonths: TGetDiff = (
  targetDate,
  baseDate,
  abs = false
) => {
  const years = getDiffInCalendarYears(targetDate, baseDate, false);

  const months = targetDate.getMonth() - baseDate.getMonth() + years * 12;

  return abs ? Math.abs(months) : months;
};

export default getDiffInCalendarMonths;
