/**
 * Get the number of full hours between two dates. The `Math.trunc()` is a rounding method.
 *
 * @param {Date} targetDate The target date.
 * @param {Date} baseDate The base date.
 * @param {boolean} [abs=false] If `true` function returns the absolute value of a number. Default: `false`.
 * @returns The number of full hours.
 * @example
 * getDiffInHours(new Date('2021-12-31T00:59:59'), new Date('2022-01-01T23:58:59')) //=> -46
 * getDiffInHours(new Date('2021-01-01T23:59:59'), new Date('2021-01-02T23:58:59'), true) //=> 23
 */

const getDiffInHours = (targetDate: Date, baseDate: Date, abs = false) => {
  const hours = Math.trunc(
    (targetDate.getTime() - baseDate.getTime()) / 1000 / 60 / 60
  );

  return abs ? Math.abs(hours) : hours;
};

export default getDiffInHours;
