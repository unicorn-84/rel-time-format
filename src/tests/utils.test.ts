import {
  getDiffInCalendarYears,
  getDiffInCalendarQuarters,
  getDiffInCalendarMonths,
  getDiffInCalendarWeeks,
} from '../utils';

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

  it('should return the negative number of calendar years', () => {
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

describe('getDiffInCalendarQuarters', () => {
  it('should return the positive number of calendar months', () => {
    expect(getDiffInCalendarQuarters(new Date(), new Date())).toBe(0);
    expect(getDiffInCalendarQuarters(new Date('2022-05-01'), new Date())).toBe(
      1
    );
    expect(
      getDiffInCalendarQuarters(new Date('2022-01-01'), new Date('2021-01-01'))
    ).toBe(4);
  });

  it('should return the negative number of calendar months', () => {
    expect(
      getDiffInCalendarQuarters(new Date('2021-12-31'), new Date(), false)
    ).toBe(-1);
    expect(
      getDiffInCalendarQuarters(
        new Date('2023-01-01'),
        new Date('2025-01-01'),
        false
      )
    ).toBe(-8);
    expect(
      getDiffInCalendarQuarters(
        new Date('2020-05-01'),
        new Date('2021-01-01'),
        false
      )
    ).toBe(-3);
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

describe('getDiffInCalendarWeeks', () => {
  it('should return the positive number of calendar months', () => {
    expect(getDiffInCalendarWeeks(new Date(), new Date())).toBe(0);
    expect(getDiffInCalendarWeeks(new Date('2021-12-31'), new Date())).toBe(0);
    expect(getDiffInCalendarWeeks(new Date(), new Date('2022-01-03'))).toBe(1);
    expect(getDiffInCalendarWeeks(new Date(), new Date('2022-12-31'))).toBe(52);
  });

  it('should return the negative number of calendar months', () => {
    expect(
      getDiffInCalendarWeeks(new Date('2021-12-26'), new Date(), false)
    ).toBe(-1);
    expect(
      getDiffInCalendarWeeks(
        new Date('2020-01-01'),
        new Date('2022-01-01'),
        false
      )
    ).toBe(-104);
    expect(
      getDiffInCalendarWeeks(
        new Date('2020-02-01'),
        new Date('2020-03-01'),
        false
      )
    ).toBe(-4);
  });
});
