/**
 * Get the number of calendar seconds between the given dates. This means that milliseconds are removed from the dates.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of calendar seconds.
 * @example
 * getDiffInCalendarSeconds(new Date('2021-01-01T23:59:59.100'), new Date('2021-01-02T00:00:59.100')) //=> -60
 */

const getDiffInCalendarSeconds = (
  targetDate: Date,
  baseDate: Date,
  abs = false
) => {
  const diff =
    new Date(targetDate).setMilliseconds(0) -
    new Date(baseDate).setMilliseconds(0);

  const seconds = Math.trunc(diff / 1000);

  return abs ? Math.abs(seconds) : seconds;
};

export default getDiffInCalendarSeconds;
