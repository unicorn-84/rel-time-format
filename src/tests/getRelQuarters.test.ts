import getRelQuarters from '../getRelQuarters';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2022, 0));
});

afterEach(() => {
  jest.useRealTimers();
});

describe.only('getRelQuarters', () => {
  it('should throw an error, if the date is not the Date object', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => getRelQuarters()).toThrow(
      "[rel-time-format]: 'undefined' is not the Date object"
    );
  });

  it('should return a relative time string', () => {
    expect(getRelQuarters(new Date())).toBe('in 0 quarters');
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelQuarters(new Date(2022, 5), 'ru')).toBe('через 1 квартал');
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelQuarters(new Date(), undefined, { numeric: 'auto' })).toBe(
      'this quarter'
    );
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(getRelQuarters(new Date(), 'ru', { numeric: 'auto' })).toBe(
      'в текущем квартале'
    );
  });
});
