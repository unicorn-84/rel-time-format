/**
 * Get the number of calendar weeks between the given dates. The week starts on Monday.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of calendar weeks.
 * @example
 * getDiffInCalendarWeeks(new Date('2022-01-31T23:59:59'), new Date('2022-03-01T00:00:00')) //=> -4
 * getDiffInCalendarWeeks(new Date('2022-03-01T00:00:00'), new Date('2022-03-21T23:59:59'), true) //=> 3
 */

const getDiffInCalendarWeeks = (
  targetDate: Date,
  baseDate: Date,
  abs = false
) => {
  // The number of days in the last week of the target date.
  const daysInLastWeekOfTargetDate =
    targetDate.getDay() === 0 ? 7 : targetDate.getDay();

  // The number of days in the last week of the base date.
  const daysInLastWeekOfBaseDate =
    baseDate.getDay() === 0 ? 7 : baseDate.getDay();

  // The number of days of the target date.
  const daysOfTargetDate =
    targetDate.setHours(0, 0, 0, 0) / 1000 / 60 / 60 / 24;

  // The number of days of the base date.
  const daysOfBaseDate = baseDate.setHours(0, 0, 0, 0) / 1000 / 60 / 60 / 24;

  // The number of weeks of the target date.
  const weeksOfTargetDate =
    Math.ceil((daysOfTargetDate - daysInLastWeekOfTargetDate) / 7) + 1;

  // The number of weeks of the base date.
  const weeksOfBaseDate =
    Math.ceil((daysOfBaseDate - daysInLastWeekOfBaseDate) / 7) + 1;

  const weeks = weeksOfTargetDate - weeksOfBaseDate;

  return abs ? Math.abs(weeks) : weeks;
};

export default getDiffInCalendarWeeks;
