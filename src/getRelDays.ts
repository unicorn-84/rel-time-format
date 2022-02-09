/**
 * Formats the date according to the locales, formatting options and the 'days' unit in human-friendly words relative to the current date.
 *
 *
 * @param {Date} date The date to format.
 *
 * @param {(string|string[])} [locales] A string with a [BCP 47 language tag](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4), or an array of such strings.
 *
 * @param {Object} [options] An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters) with some or all of options of `Intl.RelativeTimeFormatOptions`.
 *
 * @throws `TypeError` if `date` was given something other than the Date object.
 *
 * @returns {string} Internationalized relative time message as string.
 *
 * @example
 *
 * getRelDays(new Date(), 'en', { numeric: 'auto' })
 * //=> this day
 */

const getRelDays = (
  date: Date,
  locales?:
    | Intl.UnicodeBCP47LocaleIdentifier
    | Intl.UnicodeBCP47LocaleIdentifier[],
  options?: Intl.RelativeTimeFormatOptions
): string => {
  if (!(date instanceof Date)) {
    throw new TypeError(`[rel-time-format]: '${date}' is not the Date object`);
  }

  const formatter = new Intl.RelativeTimeFormat(locales, options);

  const diff = date.getTime() - new Date().getTime();

  const days = Math.trunc(diff / 1000 / 60 / 60 / 24);

  return formatter.format(days, 'days');
};

export default getRelDays;
