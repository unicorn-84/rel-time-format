import { getDiffInCalendarHours } from '../../utils';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarHours', () => {
  it('should return the positive number of calendar hours', () => {
    expect(getDiffInCalendarHours(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarHours(new Date(), new Date('2021-12-31T23:59:59'))
    ).toBe(1);

    expect(
      getDiffInCalendarHours(new Date('2022-01-01T23:59:59'), new Date())
    ).toBe(23);

    expect(
      getDiffInCalendarHours(
        new Date('2022-01-01T23:59:59'),
        new Date('2021-12-31T00:59:59')
      )
    ).toBe(47);
  });

  it('should return the negative number of calendar hours', () => {
    expect(
      getDiffInCalendarHours(new Date(), new Date('2022-01-01T23:59:59'), false)
    ).toBe(-23);

    expect(
      getDiffInCalendarHours(new Date('2021-12-31T23:59:59'), new Date(), false)
    ).toBe(-1);

    expect(
      getDiffInCalendarHours(
        new Date('2021-01-01T23:59:59'),
        new Date('2021-01-02T23:59:59'),
        false
      )
    ).toBe(-24);
  });
});
