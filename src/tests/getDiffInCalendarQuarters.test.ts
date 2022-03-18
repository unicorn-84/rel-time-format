import { getDiffInCalendarQuarters } from '..';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarQuarters', () => {
  it('should return the number of calendar quarters', () => {
    expect(getDiffInCalendarQuarters(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarQuarters(new Date(), new Date('2021-01-01T23:59:59'))
    ).toBe(4);

    expect(
      getDiffInCalendarQuarters(new Date('2023-01-01T23:59:59'), new Date())
    ).toBe(4);

    expect(
      getDiffInCalendarQuarters(
        new Date('2021-01-01T23:59:59'),
        new Date('2022-01-01T23:59:59')
      )
    ).toBe(-4);

    expect(
      getDiffInCalendarQuarters(
        new Date('2020-05-01T23:59:59'),
        new Date('2021-01-01T23:59:59'),
        true
      )
    ).toBe(3);
  });
});
