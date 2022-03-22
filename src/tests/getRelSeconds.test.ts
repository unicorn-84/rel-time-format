import { getRelSeconds } from '..';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getRelSeconds', () => {
  it('should return a relative time string', () => {
    expect(getRelSeconds(new Date())).toBe('in 0 seconds');
    expect(getRelSeconds(new Date('2022-01-01T00:00:01'))).toBe('in 1 second');
    expect(getRelSeconds(new Date('2021-12-31T23:59:59'))).toBe('1 second ago');
    expect(getRelSeconds(new Date('2021-12-31T23:59:30'))).toBe(
      '30 seconds ago'
    );
    expect(getRelSeconds(new Date('2022-01-01T00:10:15'))).toBe(
      'in 615 seconds'
    );
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelSeconds(new Date(), { locales: 'ru' })).toBe('через 0 секунд');
    expect(
      getRelSeconds(new Date('2022-01-01T00:00:01'), { locales: 'ru' })
    ).toBe('через 1 секунду');
    expect(
      getRelSeconds(new Date('2021-12-31T23:59:59'), { locales: 'ru' })
    ).toBe('1 секунду назад');
    expect(
      getRelSeconds(new Date('2021-12-31T23:59:30'), { locales: 'ru' })
    ).toBe('30 секунд назад');
    expect(
      getRelSeconds(new Date('2022-01-01T00:10:15'), { locales: 'ru' })
    ).toBe('через 615 секунд');
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelSeconds(new Date(), { numeric: 'auto' })).toBe('now');
    expect(
      getRelSeconds(new Date('2022-01-01T00:00:01'), {
        numeric: 'auto',
      })
    ).toBe('in 1 second');
    expect(
      getRelSeconds(new Date('2021-12-31T23:59:59'), {
        numeric: 'auto',
      })
    ).toBe('1 second ago');
    expect(
      getRelSeconds(new Date('2021-12-31T23:59:30'), {
        numeric: 'auto',
      })
    ).toBe('30 seconds ago');
    expect(
      getRelSeconds(new Date('2022-01-01T00:10:15'), {
        numeric: 'auto',
      })
    ).toBe('in 615 seconds');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(getRelSeconds(new Date(), { locales: 'ru', numeric: 'auto' })).toBe(
      'сейчас'
    );
    expect(
      getRelSeconds(new Date('2022-01-01T00:00:01'), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('через 1 секунду');
    expect(
      getRelSeconds(new Date('2021-12-31T23:59:59'), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('1 секунду назад');
    expect(
      getRelSeconds(new Date('2021-12-31T23:59:30'), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('30 секунд назад');
    expect(
      getRelSeconds(new Date('2022-01-01T00:10:15'), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('через 615 секунд');
  });
});
