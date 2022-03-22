import type { TGetDiff } from './types.js';

/**
 * Get the number of calendar minutes between the given dates. This means that seconds and milliseconds are removed from the dates.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of calendar minutes.
 * @example
 * getDiffInCalendarMinutes(new Date('2021-01-01T23:59:59'), new Date('2021-01-02T00:00:59')) //=> -1
 */

const getDiffInCalendarMinutes: TGetDiff = (
  targetDate,
  baseDate,
  abs = false
) => {
  const diff =
    new Date(targetDate).setSeconds(0, 0) - new Date(baseDate).setSeconds(0, 0);

  const minutes = Math.trunc(diff / 1000 / 60);

  return abs ? Math.abs(minutes) : minutes;
};

export default getDiffInCalendarMinutes;
