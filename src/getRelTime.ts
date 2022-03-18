import getDiffInCalendarYears from './getDiffInCalendarYears.js';
import {
  getDiffInCalendarSeconds,
  getDiffInCalendarMinutes,
  getDiffInCalendarHours,
  getDiffInCalendarDays,
  getDiffInCalendarWeeks,
  getDiffInCalendarMonths,
} from './index.js';

/**
 * Formats the date according to the [locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) and formatting [options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#parameters) in human-friendly words relative to the current date.
 *
 * @param {Date} date The date to format.
 * @param {(string|string[])} [locales] A string with a [BCP 47 language tag](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4), or an array of such strings.
 * @param {Object} [options] An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters) with some or all of options of `Intl.RelativeTimeFormatOptions`.
 * @returns {string} Internationalized relative time message as string.
 * @example
 *
 */

const getRelTime = (
  date: Date,
  locales?:
    | Intl.UnicodeBCP47LocaleIdentifier
    | Intl.UnicodeBCP47LocaleIdentifier[],
  options?: Intl.RelativeTimeFormatOptions
): string => {
  const formatter = new Intl.RelativeTimeFormat(locales, options);

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
