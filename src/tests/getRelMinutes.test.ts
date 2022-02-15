import getRelMinutes from '../getRelMinutes';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe.only('getRelMinutes', () => {
  it('should throw an error, if the date is not the Date object', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => getRelMinutes()).toThrow(
      "[rel-time-format]: 'undefined' is not the Date object"
    );
  });

  it('should return a relative time string', () => {
    expect(getRelMinutes(new Date())).toBe('in 0 minutes');
    expect(getRelMinutes(new Date('2022-01-01T00:01:00'))).toBe('in 1 minute');
    expect(getRelMinutes(new Date('2021-12-31T23:59:00'))).toBe('1 minute ago');
    expect(getRelMinutes(new Date('2021-12-31T21:30:00'))).toBe(
      '150 minutes ago'
    );
    expect(getRelMinutes(new Date('2022-01-01T10:15:00'))).toBe(
      'in 615 minutes'
    );
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelMinutes(new Date(), 'ru')).toBe('через 0 минут');
    expect(getRelMinutes(new Date('2022-01-01T00:01:00'), 'ru')).toBe(
      'через 1 минуту'
    );
    expect(getRelMinutes(new Date('2021-12-31T23:59:00'), 'ru')).toBe(
      '1 минуту назад'
    );
    expect(getRelMinutes(new Date('2021-12-31T21:30:00'), 'ru')).toBe(
      '150 минут назад'
    );
    expect(getRelMinutes(new Date('2022-01-01T10:15:00'), 'ru')).toBe(
      'через 615 минут'
    );
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelMinutes(new Date(), undefined, { numeric: 'auto' })).toBe(
      'this minute'
    );
    expect(
      getRelMinutes(new Date('2022-01-01T00:01:00'), undefined, {
        numeric: 'auto',
      })
    ).toBe('in 1 minute');
    expect(
      getRelMinutes(new Date('2021-12-31T23:59:00'), undefined, {
        numeric: 'auto',
      })
    ).toBe('1 minute ago');
    expect(
      getRelMinutes(new Date('2021-12-31T21:30:00'), undefined, {
        numeric: 'auto',
      })
    ).toBe('150 minutes ago');
    expect(
      getRelMinutes(new Date('2022-01-01T10:15:00'), undefined, {
        numeric: 'auto',
      })
    ).toBe('in 615 minutes');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(getRelMinutes(new Date(), 'ru', { numeric: 'auto' })).toBe(
      'в эту минуту'
    );
    expect(
      getRelMinutes(new Date('2022-01-01T00:01:00'), 'ru', { numeric: 'auto' })
    ).toBe('через 1 минуту');
    expect(
      getRelMinutes(new Date('2021-12-31T23:59:00'), 'ru', { numeric: 'auto' })
    ).toBe('1 минуту назад');
    expect(
      getRelMinutes(new Date('2021-12-31T21:30:00'), 'ru', { numeric: 'auto' })
    ).toBe('150 минут назад');
    expect(
      getRelMinutes(new Date('2022-01-01T10:15:00'), 'ru', { numeric: 'auto' })
    ).toBe('через 615 минут');
  });
});
