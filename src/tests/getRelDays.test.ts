import getRelDays from '../getRelDays';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2022, 0));
});

afterEach(() => {
  jest.useRealTimers();
});

describe.only('getRelDays', () => {
  it('should throw an error, if the date is not the Date object', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => getRelDays()).toThrow(
      "[rel-time-format]: 'undefined' is not the Date object"
    );
  });

  it('should return a relative time string', () => {
    expect(getRelDays(new Date())).toBe('in 0 days');
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelDays(new Date(), 'ru')).toBe('через 0 дней');
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelDays(new Date(), undefined, { numeric: 'auto' })).toBe(
      'today'
    );
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(getRelDays(new Date(), 'ru', { numeric: 'auto' })).toBe('сегодня');
  });
});
