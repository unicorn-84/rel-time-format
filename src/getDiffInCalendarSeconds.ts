/**
 * Get the number of calendar seconds between the given dates. This means that milliseconds are removed from the dates.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number. Default: `true`.
 *
 * @returns The number of calendar seconds.
 *
 * @example
 *
 * getDiffInCalendarSeconds(new Date('2022-01-01T00:00:59.100'), new Date('2021-12-31T23:59:59.200'))
 * //=> 60
 */

const getDiffInCalendarSeconds = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  const diff = targetDate.setMilliseconds(0) - baseDate.setMilliseconds(0);

  const seconds = Math.trunc(diff / 1000);

  return abs ? Math.abs(seconds) : seconds;
};

export default getDiffInCalendarSeconds;
