/**
 * Formats the date according to the [locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation), formatting [options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#parameters) and the 'weeks' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the current date.
 * The first day of the week is Monday.
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
 * getRelWeeks(new Date(), 'en', { numeric: 'auto' })
 * //=> this week
 */

const getRelWeeks = (
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

  // The number of days in the last week of the target date.
  const daysInLastWeekOfDate = date.getDay() === 0 ? 7 : date.getDay();

  // The number of days in the last week of the current date.
  const daysInLastWeekOfNow =
    new Date().getDay() === 0 ? 7 : new Date().getDay();

  // The number of days of the target date.
  const daysOfDate = Math.floor(date.getTime() / 1000 / 60 / 60 / 24);

  // The number of days of the current date.
  const daysOfNow = Math.floor(Date.now() / 1000 / 60 / 60 / 24);

  // The number of weeks of the target date.
  const weeksOfDate = Math.ceil((daysOfDate - daysInLastWeekOfDate) / 7) + 1;

  // The number of weeks of the current date.
  const weeksOfNow = Math.ceil((daysOfNow - daysInLastWeekOfNow) / 7) + 1;

  const diff = weeksOfDate - weeksOfNow;

  return formatter.format(diff, 'weeks');
};

export default getRelWeeks;
