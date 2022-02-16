import { getDiffInCalendarYears, getDiffInCalendarMonths } from '../utils';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarYears', () => {
  it('should return the positive number of calendar years', () => {
    expect(getDiffInCalendarYears(new Date(), new Date())).toBe(0);
    expect(getDiffInCalendarYears(new Date('2023-01-01'), new Date())).toBe(1);
    expect(
      getDiffInCalendarYears(new Date('2021-01-01'), new Date('2023-01-01'))
    ).toBe(2);
  });

  it('should return the positive number of calendar years', () => {
    expect(
      getDiffInCalendarYears(new Date('2021-01-01'), new Date(), false)
    ).toBe(-1);
    expect(
      getDiffInCalendarYears(
        new Date('2023-01-01'),
        new Date('2025-01-01'),
        false
      )
    ).toBe(-2);
    expect(
      getDiffInCalendarYears(new Date('1984-10-11'), new Date(), false)
    ).toBe(-38);
  });
});

describe('getDiffInCalendarMonths', () => {
  it('should return the positive number of calendar months', () => {
    expect(getDiffInCalendarMonths(new Date(), new Date())).toBe(0);
    expect(getDiffInCalendarMonths(new Date('2022-02-01'), new Date())).toBe(1);
    expect(
      getDiffInCalendarMonths(new Date('2022-01-01'), new Date('2021-01-01'))
    ).toBe(12);
  });

  it('should return the negative number of calendar months', () => {
    expect(
      getDiffInCalendarMonths(new Date('2021-12-31'), new Date(), false)
    ).toBe(-1);
    expect(
      getDiffInCalendarMonths(
        new Date('2023-01-01'),
        new Date('2025-01-01'),
        false
      )
    ).toBe(-24);
    expect(
      getDiffInCalendarMonths(
        new Date('2020-02-29'),
        new Date('2020-03-01'),
        false
      )
    ).toBe(-1);
  });
});
