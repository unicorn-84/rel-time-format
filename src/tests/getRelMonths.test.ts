import { getRelMonths } from '..';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getRelMonths', () => {
  it('should return a relative time string', () => {
    expect(getRelMonths(new Date(), new Date())).toBe('in 0 months');
    expect(getRelMonths(new Date('2022-02-01'), new Date())).toBe('in 1 month');
    expect(getRelMonths(new Date('2021-12-01'), new Date())).toBe(
      '1 month ago'
    );
    expect(getRelMonths(new Date('1984-10-11'), new Date())).toBe(
      '447 months ago'
    );
    expect(getRelMonths(new Date('2084-10-11'), new Date())).toBe(
      'in 753 months'
    );
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelMonths(new Date(), new Date(), { locales: 'ru' })).toBe(
      'через 0 месяцев'
    );
    expect(
      getRelMonths(new Date('2022-02-01'), new Date(), { locales: 'ru' })
    ).toBe('через 1 месяц');
    expect(
      getRelMonths(new Date('2021-12-01'), new Date(), { locales: 'ru' })
    ).toBe('1 месяц назад');
    expect(
      getRelMonths(new Date('1984-10-11'), new Date(), { locales: 'ru' })
    ).toBe('447 месяцев назад');
    expect(
      getRelMonths(new Date('2084-10-11'), new Date(), { locales: 'ru' })
    ).toBe('через 753 месяца');
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelMonths(new Date(), new Date(), { numeric: 'auto' })).toBe(
      'this month'
    );
    expect(
      getRelMonths(new Date('2022-02-01'), new Date(), { numeric: 'auto' })
    ).toBe('next month');
    expect(
      getRelMonths(new Date('2021-12-01'), new Date(), { numeric: 'auto' })
    ).toBe('last month');
    expect(
      getRelMonths(new Date('1984-10-11'), new Date(), { numeric: 'auto' })
    ).toBe('447 months ago');
    expect(
      getRelMonths(new Date('2084-10-11'), new Date(), { numeric: 'auto' })
    ).toBe('in 753 months');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(
      getRelMonths(new Date(), new Date(), { locales: 'ru', numeric: 'auto' })
    ).toBe('в этом месяце');
    expect(
      getRelMonths(new Date('2022-02-01'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('в следующем месяце');
    expect(
      getRelMonths(new Date('2021-12-01'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('в прошлом месяце');
    expect(
      getRelMonths(new Date('1984-10-11'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('447 месяцев назад');
    expect(
      getRelMonths(new Date('2084-10-11'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('через 753 месяца');
  });
});
