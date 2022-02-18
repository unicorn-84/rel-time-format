import getDiffInDays from '../getDiffInDays';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInDays', () => {
  it('should return the number of full days', () => {
    expect(getDiffInDays(new Date(), new Date())).toBe(0);

    expect(getDiffInDays(new Date(), new Date('2021-12-30T23:59:59'))).toBe(1);

    expect(getDiffInDays(new Date('2022-01-02T23:59:59'), new Date())).toBe(1);

    expect(
      getDiffInDays(
        new Date('2021-12-30T23:59:59'),
        new Date('2022-01-01T00:00:00')
      )
    ).toBe(-1);

    expect(
      getDiffInDays(
        new Date('2021-01-01T00:00:00'),
        new Date('2022-01-01T23:59:59'),
        true
      )
    ).toBe(365);
  });
});
