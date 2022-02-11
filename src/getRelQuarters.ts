/**
 * Formats the date according to the locales, formatting options and the 'quarters' unit in human-friendly words relative to the current date.
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
 * getRelQuarters(new Date(), 'en', { numeric: 'auto' })
 * //=> this quarter
 */

const getRelQuarters = (
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

  const years = date.getFullYear() - new Date().getFullYear();

  const diff =
    Math.floor((date.getMonth() + 3) / 3) -
    Math.floor((new Date().getMonth() + 3) / 3) +
    years * 4;

  return formatter.format(diff, 'quarters');
};

export default getRelQuarters;
