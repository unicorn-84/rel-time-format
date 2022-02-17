import getDiffInCalendarSeconds from '../../utils/getDiffInCalendarSeconds';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarSeconds', () => {
  it('should return the positive number of calendar seconds', () => {
    expect(getDiffInCalendarSeconds(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarSeconds(new Date(), new Date('2021-12-31T23:59:59.600'))
    ).toBe(1);

    expect(
      getDiffInCalendarSeconds(new Date('2022-01-01T00:00:59.900'), new Date())
    ).toBe(59);

    expect(
      getDiffInCalendarSeconds(
        new Date('2022-01-01T00:00:59.100'),
        new Date('2021-12-31T23:59:59.200')
      )
    ).toBe(60);
  });

  it('should return the negative number of calendar seconds', () => {
    expect(
      getDiffInCalendarSeconds(
        new Date(),
        new Date('2022-01-01T00:00:59.200'),
        false
      )
    ).toBe(-59);

    expect(
      getDiffInCalendarSeconds(
        new Date('2021-12-31T23:59:59.100'),
        new Date(),
        false
      )
    ).toBe(-1);

    expect(
      getDiffInCalendarSeconds(
        new Date('2021-01-01T23:59:59.100'),
        new Date('2021-01-02T00:00:59.100'),
        false
      )
    ).toBe(-60);
  });
});
