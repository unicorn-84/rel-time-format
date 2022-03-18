import { getDiffInCalendarYears } from '..';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarYears', () => {
  it('should return the number of calendar years', () => {
    expect(getDiffInCalendarYears(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarYears(new Date(), new Date('2020-01-01T23:59:59'))
    ).toBe(2);

    expect(
      getDiffInCalendarYears(
        new Date('2023-01-01T23:59:59'),
        new Date('2024-01-01T23:59:59')
      )
    ).toBe(-1);
    expect(
      getDiffInCalendarYears(
        new Date('2023-01-01T23:59:59'),
        new Date('2025-01-01T23:59:59'),
        true
      )
    ).toBe(2);
  });
});
