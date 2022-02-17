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
 *
 * @example
 *
 * getDiffInCalendarYears(new Date('2024-01-01T23:59:59'), new Date('2023-01-01T23:59:59'))
 * //=> 1
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
 *
 * @example
 *
 * getDiffInCalendarQuarters(new Date('2022-01-01T23:59:59'), new Date('2021-01-01T23:59:59'))
 * //=> 4
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
 *
 * @example
 *
 * getDiffInCalendarMonths(new Date('2022-01-01'), new Date('2021-01-01'))
 * //=> 12
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

/**
 * Get the number of calendar days between the given dates. This means that the times are removed from the dates.
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
  const diff = targetDate.setHours(0, 0, 0, 0) - baseDate.setHours(0, 0, 0, 0);

  const days = Math.trunc(diff / 1000 / 60 / 60 / 24);

  return abs ? Math.abs(days) : days;
};

/**
 * Get the number of calendar hours between the given dates. This means that minutes, seconds and milliseconds are removed from the dates.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number.
 *
 * @returns The number of calendar hours.
 *
 * @example
 *
 * getDiffInCalendarHours(new Date('2022-01-01T23:59:59'), new Date('2021-12-31T00:59:59'))
 * //=> 47
 */

export const getDiffInCalendarHours = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  const diff = targetDate.setMinutes(0, 0, 0) - baseDate.setMinutes(0, 0, 0);

  const hours = Math.trunc(diff / 1000 / 60 / 60);

  return abs ? Math.abs(hours) : hours;
};

/**
 * Get the number of calendar minutes between the given dates. This means that seconds and milliseconds are removed from the dates.
 *
 * @param {Date} targetDate The target date.
 *
 * @param {Date} baseDate The base date.
 *
 * @param {boolean} [abs=true] If `true` function returns the absolute value of a number.
 *
 * @returns The number of calendar minutes.
 *
 * @example
 *
 * getDiffInCalendarMinutes(new Date('2022-01-01T00:59:59'), new Date('2021-12-31T23:59:59'))
 * //=> 60
 */

export const getDiffInCalendarMinutes = (
  targetDate: Date,
  baseDate: Date,
  abs = true
) => {
  const diff = targetDate.setSeconds(0, 0) - baseDate.setSeconds(0, 0);

  const minutes = Math.trunc(diff / 1000 / 60);

  return abs ? Math.abs(minutes) : minutes;
};
