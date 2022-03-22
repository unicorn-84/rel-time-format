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
 * Formats the date according to [the locales and the formatting options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#parameters) in human-friendly words relative to the current date.
 *
 * @param {Date} date The date to format.
 * @param {Object} [options] An object with the locales and the formatting options.
 * @returns {string} Internationalized relative time message as string.
 * @example
 * getRelTime(new Date(), { locales: 'en', numeric: 'auto' }); //=> now
 */

const getRelTime: TGetRel = (date, options) => {
  const { locales, ...relativeTimeFormatOptions } = options || {};

  const formatter = new Intl.RelativeTimeFormat(
    locales,
    relativeTimeFormatOptions
  );

  if (getDiffInCalendarSeconds(date, new Date(), true) < 60) {
    return formatter.format(
      getDiffInCalendarSeconds(date, new Date()),
      'seconds'
    );
  }

  if (getDiffInCalendarMinutes(date, new Date(), true) < 60) {
    return formatter.format(
      getDiffInCalendarMinutes(date, new Date()),
      'minutes'
    );
  }

  if (getDiffInCalendarHours(date, new Date(), true) < 24) {
    return formatter.format(getDiffInCalendarHours(date, new Date()), 'hours');
  }

  if (getDiffInCalendarDays(date, new Date(), true) < 7) {
    return formatter.format(getDiffInCalendarDays(date, new Date()), 'days');
  }

  if (getDiffInCalendarDays(date, new Date(), true) < 31) {
    return formatter.format(getDiffInCalendarWeeks(date, new Date()), 'weeks');
  }

  if (getDiffInCalendarMonths(date, new Date(), true) < 12) {
    return formatter.format(
      getDiffInCalendarMonths(date, new Date()),
      'months'
    );
  }

  return formatter.format(getDiffInCalendarYears(date, new Date()), 'years');
};

export default getRelTime;
