/**
 * Get the number of calendar years between the given dates.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number.
 *
 * @returns The number of calendar years.
 */

export const getDiffInCalendarYears = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  const years = targetDate.getFullYear() - baseDate.getFullYear();

  return abs ? Math.abs(years) : years;
};

/**
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number.
 *
 * @returns The number of calendar quarters.
 */

export const getDiffInCalendarQuarters = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  const years = getDiffInCalendarYears(targetDate, baseDate, false);

  const quarters =
    Math.floor((targetDate.getMonth() + 3) / 3) -
    Math.floor((baseDate.getMonth() + 3) / 3) +
    years * 4;

  return abs ? Math.abs(quarters) : quarters;
};

/**
 * Get the number of calendar months between the given dates.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number.
 *
 * @returns The number of calendar months.
 */

export const getDiffInCalendarMonths = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  const years = getDiffInCalendarYears(targetDate, baseDate, false);

  const months = targetDate.getMonth() - baseDate.getMonth() + years * 12;

  return abs ? Math.abs(months) : months;
};

/**
 * Get the number of calendar weeks between the given dates.
 * The week starts on Monday.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number.
 *
 * @returns The number of calendar weeks.
 *
 * @example
 *
 * getDiffInCalendarWeeks(new Date('2020-03-01T00:00:00'), new Date('2020-02-01T23:59:59'))
 * //=> 4
 */

export const getDiffInCalendarWeeks = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  // The number of days in the last week of the target date.
  const daysInLastWeekOfTargetDate =
    targetDate.getDay() === 0 ? 7 : targetDate.getDay();

  // The number of days in the last week of the base date.
  const daysInLastWeekOfBaseDate =
    baseDate.getDay() === 0 ? 7 : baseDate.getDay();

  // The number of days of the target date.
  const daysOfTargetDate = Math.floor(
    targetDate.getTime() / 1000 / 60 / 60 / 24
  );

  // The number of days of the base date.
  const daysOfBaseDate = Math.floor(baseDate.getTime() / 1000 / 60 / 60 / 24);

  // The number of weeks of the target date.
  const weeksOfTargetDate =
    Math.ceil((daysOfTargetDate - daysInLastWeekOfTargetDate) / 7) + 1;

  // The number of weeks of the base date.
  const weeksOfBaseDate =
    Math.ceil((daysOfBaseDate - daysInLastWeekOfBaseDate) / 7) + 1;

  const weeks = weeksOfTargetDate - weeksOfBaseDate;

  return abs ? Math.abs(weeks) : weeks;
};

/**
 * Get the number of calendar days between the given dates.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number.
 *
 * @returns The number of calendar days.
 *
 * @example
 *
 * getDiffInCalendarDays(new Date('2022-01-01T00:00:00'), new Date('2021-12-31T23:59:59'))
 * //=> 1
 */

export const getDiffInCalendarDays = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  const diff =
    new Date(targetDate.toDateString()).getTime() -
    new Date(baseDate.toDateString()).getTime();

  const days = Math.trunc(diff / 1000 / 60 / 60 / 24);

  return abs ? Math.abs(days) : days;
};
