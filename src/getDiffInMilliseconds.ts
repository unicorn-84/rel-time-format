/**
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number. Default: `true`.
 *
 * @returns The number of milliseconds.
 *
 * @example
 *
 * getDiffInMilliseconds(new Date('2022-01-01T00:00:00.100'), new Date('2021-12-31T23:59:59.200'))
 * //=> 900
 */

const getDiffInMilliseconds = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  const milliseconds = targetDate.getTime() - baseDate.getTime();

  return abs ? Math.abs(milliseconds) : milliseconds;
};

export default getDiffInMilliseconds;
