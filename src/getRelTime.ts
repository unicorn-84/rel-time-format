import getDiffInCalendarYears from './getDiffInCalendarYears.js';
import {
  getDiffInCalendarSeconds,
  getDiffInCalendarMinutes,
  getDiffInCalendarHours,
  getDiffInCalendarDays,
  getDiffInCalendarWeeks,
  getDiffInCalendarMonths,
} from './index.js';

import type { TGetRel } from './types.js';

/**
 * Formats the target date according to [the locales and the formatting options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#parameters) in human-friendly words relative to the given base date.
 *
 * @param {Date} targetDate The date to format.
 * @param {Date} baseDate The date to compare with.
 * @param {Object} [options] An object with the locales and the formatting options.
 * @returns {string} Internationalized relative time message as string.
 * @example
 * getRelTime(new Date(), new Date(), { locales: 'en', numeric: 'auto' }); //=> now
 */

const getRelTime: TGetRel = (targetDate, baseDate, options) => {
  const { locales, ...relativeTimeFormatOptions } = options || {};

  const formatter = new Intl.RelativeTimeFormat(
    locales,
    relativeTimeFormatOptions
  );

  if (getDiffInCalendarSeconds(targetDate, baseDate, true) < 60) {
    return formatter.format(
      getDiffInCalendarSeconds(targetDate, baseDate),
      'seconds'
    );
  }

  if (getDiffInCalendarMinutes(targetDate, baseDate, true) < 60) {
    return formatter.format(
      getDiffInCalendarMinutes(targetDate, baseDate),
      'minutes'
    );
  }

  if (getDiffInCalendarHours(targetDate, baseDate, true) < 24) {
    return formatter.format(
      getDiffInCalendarHours(targetDate, baseDate),
      'hours'
    );
  }

  if (getDiffInCalendarDays(targetDate, baseDate, true) < 7) {
    return formatter.format(
      getDiffInCalendarDays(targetDate, baseDate),
      'days'
    );
  }

  if (getDiffInCalendarDays(targetDate, baseDate, true) < 31) {
    return formatter.format(
      getDiffInCalendarWeeks(targetDate, baseDate),
      'weeks'
    );
  }

  if (getDiffInCalendarMonths(targetDate, baseDate, true) < 12) {
    return formatter.format(
      getDiffInCalendarMonths(targetDate, baseDate),
      'months'
    );
  }

  return formatter.format(
    getDiffInCalendarYears(targetDate, baseDate),
    'years'
  );
};

export default getRelTime;
