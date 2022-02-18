import { getDiffInMilliseconds } from '../../utils';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInMilliseconds', () => {
  it('should return the positive number of milliseconds', () => {
    expect(getDiffInMilliseconds(new Date(), new Date())).toBe(0);

    expect(
      getDiffInMilliseconds(new Date(), new Date('2021-12-31T23:59:59.600'))
    ).toBe(400);

    expect(
      getDiffInMilliseconds(new Date('2022-01-01T00:00:00.900'), new Date())
    ).toBe(900);

    expect(
      getDiffInMilliseconds(
        new Date('2022-01-01T00:00:00.100'),
        new Date('2021-12-31T23:59:59.200')
      )
    ).toBe(900);
  });

  it('should return the negative number of milliseconds', () => {
    expect(
      getDiffInMilliseconds(
        new Date(),
        new Date('2022-01-01T00:00:00.200'),
        false
      )
    ).toBe(-200);

    expect(
      getDiffInMilliseconds(
        new Date('2021-12-31T23:59:59.100'),
        new Date(),
        false
      )
    ).toBe(-900);

    expect(
      getDiffInMilliseconds(
        new Date('2021-01-01T23:59:59.100'),
        new Date('2021-01-02T00:00:00.100'),
        false
      )
    ).toBe(-1000);
  });
});
