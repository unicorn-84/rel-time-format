/**
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of milliseconds.
 * @example
 * getDiffInMilliseconds(new Date('2021-01-01T23:59:59.100'), new Date('2021-01-02T00:00:00.100')) //=> -1000
 * getDiffInMilliseconds(new Date('2021-12-31T23:59:59.200'), new Date('2022-01-01T00:00:00.100'), true) //=> 900
 */

const getDiffInMilliseconds = (
  targetDate: Date,
  baseDate: Date,
  abs = false
) => {
  const milliseconds = targetDate.getTime() - baseDate.getTime();

  return abs ? Math.abs(milliseconds) : milliseconds;
};

export default getDiffInMilliseconds;
