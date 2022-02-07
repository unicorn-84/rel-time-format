export { default as getRelYears } from './getRelYears.js';

/**
 * Formats the date in human-friendly words relative to the current date.
 * @param {Date} targetDate The date to format.
 * @returns {string} The human-friendly string.
 * @example
 *
 * rtf(new Date())
 * //=> in 0 days
 */

const rtf = (targetDate: Date): string => {
  if (!(targetDate instanceof Date)) {
    throw new TypeError(
      '[rel-time-format]: The target date must be the Date object'
    );
  }

  const formatter = new Intl.RelativeTimeFormat();

  const diff = targetDate.getTime() - Date.now();

  const days = Math.trunc(diff / 1000 / 60 / 60 / 24);

  return formatter.format(days, 'days');
};

export default rtf;
