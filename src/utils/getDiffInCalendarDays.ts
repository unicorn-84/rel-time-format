/**
 * Get the number of calendar days between the given dates. This means that the times are removed from the dates.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number. Default: `true`.
 *
 * @returns The number of calendar days.
 *
 * @example
 *
 * getDiffInCalendarDays(new Date('2022-01-01T00:00:00'), new Date('2021-12-31T23:59:59'))
 * //=> 1
 */

const getDiffInCalendarDays = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  const diff = targetDate.setHours(0, 0, 0, 0) - baseDate.setHours(0, 0, 0, 0);

  const days = Math.trunc(diff / 1000 / 60 / 60 / 24);

  return abs ? Math.abs(days) : days;
};

export default getDiffInCalendarDays;
