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
