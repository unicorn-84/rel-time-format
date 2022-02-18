import getDiffInHours from '../getDiffInHours';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInHours', () => {
  it('should return the number of full hours', () => {
    expect(getDiffInHours(new Date(), new Date())).toBe(0);

    expect(getDiffInHours(new Date(), new Date('2021-12-31T22:59:59'))).toBe(1);

    expect(getDiffInHours(new Date('2022-01-01T23:59:59'), new Date())).toBe(
      23
    );

    expect(
      getDiffInHours(
        new Date('2021-12-31T00:59:59'),
        new Date('2022-01-01T23:58:59')
      )
    ).toBe(-46);

    expect(
      getDiffInHours(
        new Date('2021-01-01T23:59:59'),
        new Date('2021-01-02T23:58:59'),
        true
      )
    ).toBe(23);
  });
});
