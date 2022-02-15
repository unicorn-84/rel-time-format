import getRelYears from '../getRelYears';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getRelYears', () => {
  it('should throw an error, if the date is not the Date object', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => getRelYears()).toThrow(
      "[rel-time-format]: 'undefined' is not the Date object"
    );
  });

  it('should return a relative time string', () => {
    expect(getRelYears(new Date())).toBe('in 0 years');
    expect(getRelYears(new Date('2023-01-01'))).toBe('in 1 year');
    expect(getRelYears(new Date('2021-01-01'))).toBe('1 year ago');
    expect(getRelYears(new Date('1984-10-11'))).toBe('38 years ago');
    expect(getRelYears(new Date('2084-10-11'))).toBe('in 62 years');
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelYears(new Date(), 'ru')).toBe('через 0 лет');
    expect(getRelYears(new Date('2023-01-01'), 'ru')).toBe('через 1 год');
    expect(getRelYears(new Date('2021-01-01'), 'ru')).toBe('1 год назад');
    expect(getRelYears(new Date('1984-10-11'), 'ru')).toBe('38 лет назад');
    expect(getRelYears(new Date('2084-10-11'), 'ru')).toBe('через 62 года');
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelYears(new Date(), undefined, { numeric: 'auto' })).toBe(
      'this year'
    );
    expect(
      getRelYears(new Date('2023-01-01'), undefined, { numeric: 'auto' })
    ).toBe('next year');
    expect(
      getRelYears(new Date('2021-01-01'), undefined, { numeric: 'auto' })
    ).toBe('last year');
    expect(
      getRelYears(new Date('1984-10-11'), undefined, { numeric: 'auto' })
    ).toBe('38 years ago');
    expect(
      getRelYears(new Date('2084-10-11'), undefined, { numeric: 'auto' })
    ).toBe('in 62 years');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(getRelYears(new Date(), 'ru', { numeric: 'auto' })).toBe(
      'в этом году'
    );
    expect(getRelYears(new Date('2023-01-01'), 'ru', { numeric: 'auto' })).toBe(
      'в следующем году'
    );
    expect(getRelYears(new Date('2021-01-01'), 'ru', { numeric: 'auto' })).toBe(
      'в прошлом году'
    );
    expect(getRelYears(new Date('1984-10-11'), 'ru', { numeric: 'auto' })).toBe(
      '38 лет назад'
    );
    expect(getRelYears(new Date('2084-10-11'), 'ru', { numeric: 'auto' })).toBe(
      'через 62 года'
    );
  });
});
