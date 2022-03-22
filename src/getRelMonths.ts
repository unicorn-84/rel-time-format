import getDiffInCalendarMonths from './getDiffInCalendarMonths.js';
import type { TGetRel } from './types.js';

/**
 * Formats the target date according to [the locales and the formatting options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#parameters) and the 'months' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the given base date.
 *
 * @param {Date} targetDate The date to format.
 * @param {Date} baseDate The date to compare with.
 * @param {Object} [options] An object with the locales and the formatting options.
 * @returns {string} Internationalized relative time message as string.
 * @example
 * getRelMonths(new Date(), new Date(), { locales: 'en', numeric: 'auto' }); //=> this month
 */

const getRelMonths: TGetRel = (targetDate, baseDate, options) => {
  const { locales, ...relativeTimeFormatOptions } = options || {};

  const formatter = new Intl.RelativeTimeFormat(
    locales,
    relativeTimeFormatOptions
  );

  const months = getDiffInCalendarMonths(targetDate, baseDate);

  return formatter.format(months, 'months');
};

export default getRelMonths;
