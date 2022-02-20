import getDiffInCalendarWeeks from '../utils/getDiffInCalendarWeeks';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarWeeks', () => {
  it('should return the number of calendar weeks', () => {
    expect(getDiffInCalendarWeeks(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarWeeks(new Date('2022-02-01T23:59:59'), new Date())
    ).toBe(5);

    expect(
      getDiffInCalendarWeeks(
        new Date('2022-01-31T23:59:59'),
        new Date('2022-03-01T00:00:00')
      )
    ).toBe(-4);

    expect(
      getDiffInCalendarWeeks(
        new Date('2022-03-01T00:00:00'),
        new Date('2022-03-21T23:59:59'),
        true
      )
    ).toBe(3);
  });
});
