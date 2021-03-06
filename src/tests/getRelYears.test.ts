import { getRelYears } from '..';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getRelYears', () => {
  it('should return a relative time string', () => {
    expect(getRelYears(new Date(), new Date())).toBe('in 0 years');
    expect(getRelYears(new Date('2023-01-01'), new Date())).toBe('in 1 year');
    expect(getRelYears(new Date('2021-01-01'), new Date())).toBe('1 year ago');
    expect(getRelYears(new Date('1984-10-11'), new Date())).toBe(
      '38 years ago'
    );
    expect(getRelYears(new Date('2084-10-11'), new Date())).toBe('in 62 years');
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelYears(new Date(), new Date(), { locales: 'ru' })).toBe(
      'через 0 лет'
    );
    expect(
      getRelYears(new Date('2023-01-01'), new Date(), { locales: 'ru' })
    ).toBe('через 1 год');
    expect(
      getRelYears(new Date('2021-01-01'), new Date(), { locales: 'ru' })
    ).toBe('1 год назад');
    expect(
      getRelYears(new Date('1984-10-11'), new Date(), { locales: 'ru' })
    ).toBe('38 лет назад');
    expect(
      getRelYears(new Date('2084-10-11'), new Date(), { locales: 'ru' })
    ).toBe('через 62 года');
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelYears(new Date(), new Date(), { numeric: 'auto' })).toBe(
      'this year'
    );
    expect(
      getRelYears(new Date('2023-01-01'), new Date(), { numeric: 'auto' })
    ).toBe('next year');
    expect(
      getRelYears(new Date('2021-01-01'), new Date(), { numeric: 'auto' })
    ).toBe('last year');
    expect(
      getRelYears(new Date('1984-10-11'), new Date(), { numeric: 'auto' })
    ).toBe('38 years ago');
    expect(
      getRelYears(new Date('2084-10-11'), new Date(), { numeric: 'auto' })
    ).toBe('in 62 years');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(
      getRelYears(new Date(), new Date(), { locales: 'ru', numeric: 'auto' })
    ).toBe('в этом году');
    expect(
      getRelYears(new Date('2023-01-01'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('в следующем году');
    expect(
      getRelYears(new Date('2021-01-01'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('в прошлом году');
    expect(
      getRelYears(new Date('1984-10-11'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('38 лет назад');
    expect(
      getRelYears(new Date('2084-10-11'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('через 62 года');
  });
});
