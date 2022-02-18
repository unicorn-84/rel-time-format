import getDiffInMinutes from '../getDiffInMinutes';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInMinutes', () => {
  it('should return the number of full minutes', () => {
    expect(getDiffInMinutes(new Date(), new Date())).toBe(0);

    expect(getDiffInMinutes(new Date(), new Date('2021-12-31T23:59:59'))).toBe(
      0
    );

    expect(getDiffInMinutes(new Date('2022-01-01T00:59:59'), new Date())).toBe(
      59
    );

    expect(
      getDiffInMinutes(
        new Date('2021-01-01T23:59:59'),
        new Date('2021-01-02T00:00:59')
      )
    ).toBe(-1);

    expect(
      getDiffInMinutes(
        new Date('2021-12-31T23:59:59'),
        new Date('2022-01-01T00:59:59'),
        true
      )
    ).toBe(60);
  });
});
