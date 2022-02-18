import getDiffInMilliseconds from './getDiffInMilliseconds.js';

/**
 * Get the number of full weeks between two dates. The `Math.trunc()` is a rounding method.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of full weeks.
 * @example
 * getDiffInWeeks(new Date('2022-01-31T23:59:59'), new Date('2022-03-01T00:00:00')) //=> -4
 * getDiffInWeeks(new Date('2022-03-01T00:00:00'), new Date('2022-03-21T23:59:59'), true) //=> 2
 */

const getDiffInWeeks = (targetDate: Date, baseDate: Date, abs = false) => {
  const days = Math.trunc(
    getDiffInMilliseconds(targetDate, baseDate) / 1000 / 60 / 60 / 24 / 7
  );

  return abs ? Math.abs(days) : days;
};

export default getDiffInWeeks;
