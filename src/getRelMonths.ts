/**
 * Formats the date according to the [locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation), formatting [options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#parameters) and the 'months' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the current date.
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
 * getRelMonths(new Date(), 'en', { numeric: 'auto' })
 * //=> this month
 */

const getRelMonths = (
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

  const diff = date.getMonth() - new Date().getMonth() + years * 12;

  return formatter.format(diff, 'months');
};

export default getRelMonths;
