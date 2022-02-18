import getDiffInMilliseconds from './getDiffInMilliseconds.js';

/**
 * Get the number of full minutes between two dates. The `Math.trunc()` is a rounding method.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of full minutes.
 * @example
 * getDiffInMinutes(new Date('2021-01-01T23:59:59'), new Date('2021-01-02T00:00:59')) //=> -1
 * getDiffInMinutes(new Date('2021-12-31T23:59:59'), new Date('2022-01-01T00:59:59'), true) //=> 60
 */

const getDiffInMinutes = (targetDate: Date, baseDate: Date, abs = false) => {
  const minutes = Math.trunc(
    getDiffInMilliseconds(targetDate, baseDate) / 1000 / 60
  );

  return abs ? Math.abs(minutes) : minutes;
};

export default getDiffInMinutes;
