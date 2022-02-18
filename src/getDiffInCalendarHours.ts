/**
 * Get the number of calendar hours between the given dates. This means that minutes, seconds and milliseconds are removed from the dates.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of calendar hours.
 * @example
 * getDiffInCalendarHours(new Date('2021-12-31T00:59:59'), new Date('2022-01-01T23:59:59')) //=> 47
 * getDiffInCalendarHours(new Date('2021-01-01T23:59:59'), new Date('2021-01-02T23:59:59'), true) //=> 24
 */

const getDiffInCalendarHours = (
  targetDate: Date,
  baseDate: Date,
  abs = false
) => {
  const diff = targetDate.setMinutes(0, 0, 0) - baseDate.setMinutes(0, 0, 0);

  const hours = Math.trunc(diff / 1000 / 60 / 60);

  return abs ? Math.abs(hours) : hours;
};

export default getDiffInCalendarHours;
