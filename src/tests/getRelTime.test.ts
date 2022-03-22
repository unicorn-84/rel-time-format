import { getRelTime } from '..';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T01:01:01'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getRelTime', () => {
  it('should return a relative time string', () => {
    expect(getRelTime(new Date(), new Date())).toBe('in 0 seconds');
    expect(getRelTime(new Date('2022-01-01T01:02:00'), new Date())).toBe(
      'in 59 seconds'
    );
    expect(getRelTime(new Date('2022-01-01T01:00:59'), new Date())).toBe(
      '2 seconds ago'
    );
    expect(getRelTime(new Date('2022-01-01T01:03:00'), new Date())).toBe(
      'in 2 minutes'
    );
    expect(getRelTime(new Date('2022-01-01T00:59:59'), new Date())).toBe(
      '2 minutes ago'
    );
    expect(getRelTime(new Date('2022-01-01T02:59:59'), new Date())).toBe(
      'in 1 hour'
    );
    expect(getRelTime(new Date('2022-01-01T00:00:00'), new Date())).toBe(
      '1 hour ago'
    );
    expect(getRelTime(new Date('2022-01-02T01:01:59'), new Date())).toBe(
      'in 1 day'
    );
    expect(getRelTime(new Date('2021-12-31T01:01:00'), new Date())).toBe(
      '1 day ago'
    );
    expect(getRelTime(new Date('2022-01-08T00:00:00'), new Date())).toBe(
      'in 1 week'
    );
    expect(getRelTime(new Date('2021-12-10T01:01:00'), new Date())).toBe(
      '3 weeks ago'
    );
    expect(getRelTime(new Date('2022-02-08T00:00:00'), new Date())).toBe(
      'in 1 month'
    );
    expect(getRelTime(new Date('2021-10-01T01:01:01'), new Date())).toBe(
      '3 months ago'
    );
    expect(getRelTime(new Date('2023-01-01T00:00:00'), new Date())).toBe(
      'in 1 year'
    );
    expect(getRelTime(new Date('2020-12-31T23:59:59'), new Date())).toBe(
      '2 years ago'
    );
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelTime(new Date(), new Date(), { locales: 'ru' })).toBe(
      'через 0 секунд'
    );
    expect(
      getRelTime(new Date('2022-01-01T01:02:00'), new Date(), { locales: 'ru' })
    ).toBe('через 59 секунд');
    expect(
      getRelTime(new Date('2022-01-01T01:00:59'), new Date(), { locales: 'ru' })
    ).toBe('2 секунды назад');
    expect(
      getRelTime(new Date('2022-01-01T01:03:00'), new Date(), { locales: 'ru' })
    ).toBe('через 2 минуты');
    expect(
      getRelTime(new Date('2022-01-01T00:59:59'), new Date(), { locales: 'ru' })
    ).toBe('2 минуты назад');
    expect(
      getRelTime(new Date('2022-01-01T02:59:59'), new Date(), { locales: 'ru' })
    ).toBe('через 1 час');
    expect(
      getRelTime(new Date('2022-01-01T00:00:00'), new Date(), { locales: 'ru' })
    ).toBe('1 час назад');
    expect(
      getRelTime(new Date('2022-01-02T01:01:59'), new Date(), { locales: 'ru' })
    ).toBe('через 1 день');
    expect(
      getRelTime(new Date('2021-12-31T01:01:00'), new Date(), { locales: 'ru' })
    ).toBe('1 день назад');
    expect(
      getRelTime(new Date('2022-01-08T00:00:00'), new Date(), { locales: 'ru' })
    ).toBe('через 1 неделю');
    expect(
      getRelTime(new Date('2021-12-10T01:01:00'), new Date(), { locales: 'ru' })
    ).toBe('3 недели назад');
    expect(
      getRelTime(new Date('2022-02-08T00:00:00'), new Date(), { locales: 'ru' })
    ).toBe('через 1 месяц');
    expect(
      getRelTime(new Date('2021-10-01T01:01:01'), new Date(), { locales: 'ru' })
    ).toBe('3 месяца назад');
    expect(
      getRelTime(new Date('2023-01-01T00:00:00'), new Date(), { locales: 'ru' })
    ).toBe('через 1 год');
    expect(
      getRelTime(new Date('2020-12-31T23:59:59'), new Date(), { locales: 'ru' })
    ).toBe('2 года назад');
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(
      getRelTime(new Date(), new Date(), {
        numeric: 'auto',
      })
    ).toBe('now');
    expect(
      getRelTime(new Date('2022-01-01T01:00:59'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('2 seconds ago');
    expect(
      getRelTime(new Date('2022-01-01T01:02:00'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('in 59 seconds');
    expect(
      getRelTime(new Date('2022-01-01T01:03:00'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('in 2 minutes');
    expect(
      getRelTime(new Date('2022-01-01T00:59:59'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('2 minutes ago');
    expect(
      getRelTime(new Date('2022-01-01T02:59:59'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('in 1 hour');
    expect(
      getRelTime(new Date('2022-01-01T00:00:00'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('1 hour ago');
    expect(
      getRelTime(new Date('2022-01-02T01:01:59'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('tomorrow');
    expect(
      getRelTime(new Date('2021-12-31T01:01:00'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('yesterday');
    expect(
      getRelTime(new Date('2022-01-08T00:00:00'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('next week');
    expect(
      getRelTime(new Date('2021-12-10T01:01:00'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('3 weeks ago');
    expect(
      getRelTime(new Date('2022-02-08T00:00:00'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('next month');
    expect(
      getRelTime(new Date('2021-10-01T01:01:01'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('3 months ago');
    expect(
      getRelTime(new Date('2023-01-01T00:00:00'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('next year');
    expect(
      getRelTime(new Date('2020-12-31T23:59:59'), new Date(), {
        numeric: 'auto',
      })
    ).toBe('2 years ago');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(
      getRelTime(new Date(), new Date(), { locales: 'ru', numeric: 'auto' })
    ).toBe('сейчас');
    expect(
      getRelTime(new Date('2022-01-01T01:02:00'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('через 59 секунд');
    expect(
      getRelTime(new Date('2022-01-01T01:00:59'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('2 секунды назад');
    expect(
      getRelTime(new Date('2022-01-01T01:03:00'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('через 2 минуты');
    expect(
      getRelTime(new Date('2022-01-01T00:59:59'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('2 минуты назад');
    expect(
      getRelTime(new Date('2022-01-01T02:59:59'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('через 1 час');
    expect(
      getRelTime(new Date('2022-01-01T00:00:00'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('1 час назад');
    expect(
      getRelTime(new Date('2022-01-02T01:01:59'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('завтра');
    expect(
      getRelTime(new Date('2021-12-31T01:01:00'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('вчера');
    expect(
      getRelTime(new Date('2022-01-08T00:00:00'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('на следующей неделе');
    expect(
      getRelTime(new Date('2021-12-10T01:01:00'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('3 недели назад');
    expect(
      getRelTime(new Date('2022-02-08T00:00:00'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('в следующем месяце');
    expect(
      getRelTime(new Date('2021-10-01T01:01:01'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('3 месяца назад');
    expect(
      getRelTime(new Date('2023-01-01T00:00:00'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('в следующем году');
    expect(
      getRelTime(new Date('2020-12-31T23:59:59'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('2 года назад');
  });
});
