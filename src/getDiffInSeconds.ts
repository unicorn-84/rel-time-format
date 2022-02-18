/**
 * Get the number of full seconds between two dates. The `Math.trunc()` is a rounding method.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of full seconds.
 * @example
 * getDiffInSeconds(new Date('2021-01-01T23:59:59.100'), new Date('2021-01-02T00:00:59.100')) //=> -60
 * getDiffInSeconds(new Date('2021-12-31T23:59:59.200'), new Date('2022-01-01T00:00:59.100'), true) //=> 59
 */

const getDiffInSeconds = (targetDate: Date, baseDate: Date, abs = false) => {
  const seconds = Math.trunc(
    (targetDate.getTime() - baseDate.getTime()) / 1000
  );

  return abs ? Math.abs(seconds) : seconds;
};

export default getDiffInSeconds;
