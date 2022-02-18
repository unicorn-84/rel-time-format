import getDiffInSeconds from '../getDiffInSeconds';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInSeconds', () => {
  it('should return the number of full seconds', () => {
    expect(getDiffInSeconds(new Date(), new Date())).toBe(0);

    expect(
      getDiffInSeconds(new Date(), new Date('2021-12-31T23:59:58.600'))
    ).toBe(1);

    expect(
      getDiffInSeconds(new Date('2022-01-01T00:00:59.900'), new Date())
    ).toBe(59);

    expect(
      getDiffInSeconds(
        new Date('2021-01-01T23:59:59.100'),
        new Date('2021-01-02T00:00:59.100')
      )
    ).toBe(-60);

    expect(
      getDiffInSeconds(
        new Date('2021-12-31T23:59:59.200'),
        new Date('2022-01-01T00:00:59.100'),
        true
      )
    ).toBe(59);
  });
});
