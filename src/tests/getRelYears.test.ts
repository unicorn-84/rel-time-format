import getRelYears from '../getRelYears';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2022, 0));
});

afterEach(() => {
  jest.useRealTimers();
});

describe.only('getRelYears', () => {
  it('should throw an error, if the date in not the Date object', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => getRelYears()).toThrow(
      "[rel-time-format]: 'undefined' is not a Date object"
    );
  });

  it('should return a relative time string', () => {
    expect(getRelYears(new Date())).toBe('in 0 years');
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelYears(new Date(), 'ru')).toBe('через 0 лет');
  });

  it('should return a relative time string according to formatting options', () => {
    expect(getRelYears(new Date(), undefined, { numeric: 'auto' })).toBe(
      'this year'
    );
  });

  it('should return a relative time string according to the locales and formatting options', () => {
    expect(getRelYears(new Date(), 'ru', { numeric: 'auto' })).toBe(
      'в этом году'
    );
  });
});
