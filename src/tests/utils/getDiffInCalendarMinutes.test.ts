import getDiffInCalendarMinutes from '../../utils/getDiffInCalendarMinutes';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarMinutes', () => {
  it('should return the positive number of calendar minutes', () => {
    expect(getDiffInCalendarMinutes(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarMinutes(new Date(), new Date('2021-12-31T23:59:59'))
    ).toBe(1);

    expect(
      getDiffInCalendarMinutes(new Date('2022-01-01T00:59:59'), new Date())
    ).toBe(59);

    expect(
      getDiffInCalendarMinutes(
        new Date('2022-01-01T00:59:59'),
        new Date('2021-12-31T23:59:59')
      )
    ).toBe(60);
  });

  it('should return the negative number of calendar minutes', () => {
    expect(
      getDiffInCalendarMinutes(
        new Date(),
        new Date('2022-01-01T00:59:59'),
        false
      )
    ).toBe(-59);

    expect(
      getDiffInCalendarMinutes(
        new Date('2021-12-31T23:59:59'),
        new Date(),
        false
      )
    ).toBe(-1);

    expect(
      getDiffInCalendarMinutes(
        new Date('2021-01-01T23:59:59'),
        new Date('2021-01-02T00:00:59'),
        false
      )
    ).toBe(-1);
  });
});
