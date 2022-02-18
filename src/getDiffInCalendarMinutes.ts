/**
 * Get the number of calendar minutes between the given dates. This means that seconds and milliseconds are removed from the dates.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number. Default: `true`.
 *
 * @returns The number of calendar minutes.
 *
 * @example
 *
 * getDiffInCalendarMinutes(new Date('2022-01-01T00:59:59'), new Date('2021-12-31T23:59:59'))
 * //=> 60
 */

const getDiffInCalendarMinutes = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  const diff = targetDate.setSeconds(0, 0) - baseDate.setSeconds(0, 0);

  const minutes = Math.trunc(diff / 1000 / 60);

  return abs ? Math.abs(minutes) : minutes;
};

export default getDiffInCalendarMinutes;
