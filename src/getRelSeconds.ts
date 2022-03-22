import getDiffInCalendarSeconds from './getDiffInCalendarSeconds.js';
import type { TGetRel } from './types.js';

/**
 * Formats the date according to [the locales and the formatting options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#parameters) and the 'seconds' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the current date.
 *
 * @param {Date} date The date to format.
 * @param {Object} [options] An object with the locales and the formatting options.
 * @returns {string} Internationalized relative time message as string.
 * @example
 * getRelSeconds(new Date(), { locales: 'en', numeric: 'auto' }); //=> now
 */

const getRelSeconds: TGetRel = (date, options) => {
  const { locales, ...relativeTimeFormatOptions } = options || {};

  const formatter = new Intl.RelativeTimeFormat(
    locales,
    relativeTimeFormatOptions
  );

  const seconds = getDiffInCalendarSeconds(date, new Date());

  return formatter.format(seconds, 'seconds');
};

export default getRelSeconds;
