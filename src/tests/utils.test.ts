import { getDiffInCalendarYears } from '../utils';

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
