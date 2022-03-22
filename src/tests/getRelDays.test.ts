import { getRelDays } from '..';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getRelDays', () => {
  it('should return a relative time string', () => {
    expect(getRelDays(new Date(), new Date())).toBe('in 0 days');
    expect(getRelDays(new Date('2022-01-02'), new Date())).toBe('in 1 day');
    expect(getRelDays(new Date('2021-12-31'), new Date())).toBe('1 day ago');
    expect(getRelDays(new Date('2020-01-01'), new Date())).toBe('731 days ago');
    expect(getRelDays(new Date('2024-01-01'), new Date())).toBe('in 730 days');
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelDays(new Date(), new Date(), { locales: 'ru' })).toBe(
      'через 0 дней'
    );
    expect(
      getRelDays(new Date('2022-01-02'), new Date(), { locales: 'ru' })
    ).toBe('через 1 день');
    expect(
      getRelDays(new Date('2021-12-31'), new Date(), { locales: 'ru' })
    ).toBe('1 день назад');
    expect(
      getRelDays(new Date('2019-12-31'), new Date(), { locales: 'ru' })
    ).toBe('732 дня назад');
    expect(
      getRelDays(new Date('2024-01-01'), new Date(), { locales: 'ru' })
    ).toBe('через 730 дней');
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelDays(new Date(), new Date(), { numeric: 'auto' })).toBe(
      'today'
    );
    expect(
      getRelDays(new Date('2022-01-02'), new Date(), { numeric: 'auto' })
    ).toBe('tomorrow');
    expect(
      getRelDays(new Date('2021-12-31'), new Date(), { numeric: 'auto' })
    ).toBe('yesterday');
    expect(
      getRelDays(new Date('2019-12-31'), new Date(), { numeric: 'auto' })
    ).toBe('732 days ago');
    expect(
      getRelDays(new Date('2024-01-01'), new Date(), { numeric: 'auto' })
    ).toBe('in 730 days');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(
      getRelDays(new Date(), new Date(), { locales: 'ru', numeric: 'auto' })
    ).toBe('сегодня');
    expect(
      getRelDays(new Date('2022-01-02'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('завтра');
    expect(
      getRelDays(new Date('2021-12-31'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('вчера');
    expect(
      getRelDays(new Date('2019-12-31'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('732 дня назад');
    expect(
      getRelDays(new Date('2024-01-01'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('через 730 дней');
  });
});
