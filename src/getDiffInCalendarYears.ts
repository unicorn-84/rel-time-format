import type { TGetDiff } from './types.js';

/**
 * Get the number of calendar years between the given dates.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of calendar years.
 * @example
 * getDiffInCalendarYears(new Date('2024-01-01T23:59:59'), new Date('2023-01-01T23:59:59'))
 * //=> 1
 */

const getDiffInCalendarYears: TGetDiff = (
  targetDate,
  baseDate,
  abs = false
) => {
  const years = targetDate.getFullYear() - baseDate.getFullYear();

  return abs ? Math.abs(years) : years;
};

export default getDiffInCalendarYears;
