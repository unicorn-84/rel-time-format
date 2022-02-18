import getRelWeeks from '../getRelWeeks';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getRelWeeks', () => {
  it('should return a relative time string', () => {
    expect(getRelWeeks(new Date())).toBe('in 0 weeks');
    expect(getRelWeeks(new Date('2022-01-03'))).toBe('in 1 week');
    expect(getRelWeeks(new Date('2021-12-26'))).toBe('1 week ago');
    expect(getRelWeeks(new Date('2021-11-27'))).toBe('5 weeks ago');
    expect(getRelWeeks(new Date('2023-01-01'))).toBe('in 52 weeks');
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelWeeks(new Date(), 'ru')).toBe('через 0 недель');
    expect(getRelWeeks(new Date('2022-01-03'), 'ru')).toBe('через 1 неделю');
    expect(getRelWeeks(new Date('2021-12-26'), 'ru')).toBe('1 неделю назад');
    expect(getRelWeeks(new Date('2021-11-27'), 'ru')).toBe('5 недель назад');
    expect(getRelWeeks(new Date('2023-01-01'), 'ru')).toBe('через 52 недели');
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelWeeks(new Date(), undefined, { numeric: 'auto' })).toBe(
      'this week'
    );
    expect(
      getRelWeeks(new Date('2022-01-03'), undefined, { numeric: 'auto' })
    ).toBe('next week');
    expect(
      getRelWeeks(new Date('2021-12-26'), undefined, { numeric: 'auto' })
    ).toBe('last week');
    expect(
      getRelWeeks(new Date('2021-11-27'), undefined, { numeric: 'auto' })
    ).toBe('5 weeks ago');
    expect(
      getRelWeeks(new Date('2023-01-01'), undefined, { numeric: 'auto' })
    ).toBe('in 52 weeks');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(getRelWeeks(new Date(), 'ru', { numeric: 'auto' })).toBe(
      'на этой неделе'
    );
    expect(getRelWeeks(new Date('2022-01-03'), 'ru', { numeric: 'auto' })).toBe(
      'на следующей неделе'
    );
    expect(getRelWeeks(new Date('2021-12-26'), 'ru', { numeric: 'auto' })).toBe(
      'на прошлой неделе'
    );
    expect(getRelWeeks(new Date('2021-11-27'), 'ru', { numeric: 'auto' })).toBe(
      '5 недель назад'
    );
    expect(getRelWeeks(new Date('2023-01-01'), 'ru', { numeric: 'auto' })).toBe(
      'через 52 недели'
    );
  });
});
