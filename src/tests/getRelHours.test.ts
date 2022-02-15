import getRelHours from '../getRelHours';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getRelHours', () => {
  it('should throw an error, if the date is not the Date object', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => getRelHours()).toThrow(
      "[rel-time-format]: 'undefined' is not the Date object"
    );
  });

  it('should return a relative time string', () => {
    expect(getRelHours(new Date())).toBe('in 0 hours');
    expect(getRelHours(new Date('2022-01-01T01:00:00'))).toBe('in 1 hour');
    expect(getRelHours(new Date('2021-12-31T23:00:00'))).toBe('1 hour ago');
    expect(getRelHours(new Date('2021-12-01T00:00:00'))).toBe('744 hours ago');
    expect(getRelHours(new Date('2022-01-30T00:00:00'))).toBe('in 696 hours');
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelHours(new Date(), 'ru')).toBe('через 0 часов');
    expect(getRelHours(new Date('2022-01-01T01:00:00'), 'ru')).toBe(
      'через 1 час'
    );
    expect(getRelHours(new Date('2021-12-31T23:00:00'), 'ru')).toBe(
      '1 час назад'
    );
    expect(getRelHours(new Date('2021-12-01T00:00:00'), 'ru')).toBe(
      '744 часа назад'
    );
    expect(getRelHours(new Date('2022-01-30T00:00:00'), 'ru')).toBe(
      'через 696 часов'
    );
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelHours(new Date(), undefined, { numeric: 'auto' })).toBe(
      'this hour'
    );
    expect(
      getRelHours(new Date('2022-01-01T01:00:00'), undefined, {
        numeric: 'auto',
      })
    ).toBe('in 1 hour');
    expect(
      getRelHours(new Date('2021-12-31T23:00:00'), undefined, {
        numeric: 'auto',
      })
    ).toBe('1 hour ago');
    expect(
      getRelHours(new Date('2021-12-01T00:00:00'), undefined, {
        numeric: 'auto',
      })
    ).toBe('744 hours ago');
    expect(
      getRelHours(new Date('2022-01-30T00:00:00'), undefined, {
        numeric: 'auto',
      })
    ).toBe('in 696 hours');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(getRelHours(new Date(), 'ru', { numeric: 'auto' })).toBe(
      'в этот час'
    );
    expect(
      getRelHours(new Date('2022-01-01T01:00:00'), 'ru', { numeric: 'auto' })
    ).toBe('через 1 час');
    expect(
      getRelHours(new Date('2021-12-31T23:00:00'), 'ru', { numeric: 'auto' })
    ).toBe('1 час назад');
    expect(
      getRelHours(new Date('2021-12-01T00:00:00'), 'ru', { numeric: 'auto' })
    ).toBe('744 часа назад');
    expect(
      getRelHours(new Date('2022-01-30T00:00:00'), 'ru', { numeric: 'auto' })
    ).toBe('через 696 часов');
  });
});
