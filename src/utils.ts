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
