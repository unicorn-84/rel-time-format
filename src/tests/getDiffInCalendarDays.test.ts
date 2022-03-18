import { getDiffInCalendarDays } from '..';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarDays', () => {
  it('should return the number of calendar days', () => {
    expect(getDiffInCalendarDays(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarDays(new Date(), new Date('2021-12-31T23:59:59'))
    ).toBe(1);

    expect(
      getDiffInCalendarDays(new Date('2022-01-01T23:59:59'), new Date())
    ).toBe(0);

    expect(
      getDiffInCalendarDays(
        new Date('2021-12-31T23:59:59'),
        new Date('2022-01-01T00:00:00')
      )
    ).toBe(-1);

    expect(
      getDiffInCalendarDays(
        new Date('2021-01-01T00:00:00'),
        new Date('2022-01-01T23:59:59'),
        true
      )
    ).toBe(365);
  });
});
