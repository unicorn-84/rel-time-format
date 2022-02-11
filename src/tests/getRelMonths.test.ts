import getRelMonths from '../getRelMonths';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-3-1'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe.only('getRelMonths', () => {
  it('should throw an error, if the date is not the Date object', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => getRelMonths()).toThrow(
      "[rel-time-format]: 'undefined' is not the Date object"
    );
  });

  it('should return a relative time string', () => {
    expect(getRelMonths(new Date())).toBe('in 0 months');
    expect(getRelMonths(new Date('2022-4-1'))).toBe('in 1 month');
    expect(getRelMonths(new Date('2022-2-28'))).toBe('1 month ago');
    expect(getRelMonths(new Date('1984-10-11'))).toBe('449 months ago');
    expect(getRelMonths(new Date('2084-10-11'))).toBe('in 751 months');
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelMonths(new Date(), 'ru')).toBe('через 0 месяцев');
    expect(getRelMonths(new Date('2022-4-1'), 'ru')).toBe('через 1 месяц');
    expect(getRelMonths(new Date('2022-2-28'), 'ru')).toBe('1 месяц назад');
    expect(getRelMonths(new Date('1984-10-11'), 'ru')).toBe(
      '449 месяцев назад'
    );
    expect(getRelMonths(new Date('2084-10-11'), 'ru')).toBe('через 751 месяц');
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelMonths(new Date(), undefined, { numeric: 'auto' })).toBe(
      'this month'
    );
    expect(
      getRelMonths(new Date('2022-4-1'), undefined, { numeric: 'auto' })
    ).toBe('next month');
    expect(
      getRelMonths(new Date('2022-2-28'), undefined, { numeric: 'auto' })
    ).toBe('last month');
    expect(
      getRelMonths(new Date('1984-10-11'), undefined, { numeric: 'auto' })
    ).toBe('449 months ago');
    expect(
      getRelMonths(new Date('2084-10-11'), undefined, { numeric: 'auto' })
    ).toBe('in 751 months');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(getRelMonths(new Date(), 'ru', { numeric: 'auto' })).toBe(
      'в этом месяце'
    );
    expect(getRelMonths(new Date('2022-4-1'), 'ru', { numeric: 'auto' })).toBe(
      'в следующем месяце'
    );
    expect(getRelMonths(new Date('2022-2-28'), 'ru', { numeric: 'auto' })).toBe(
      'в прошлом месяце'
    );
    expect(
      getRelMonths(new Date('1984-10-11'), 'ru', { numeric: 'auto' })
    ).toBe('449 месяцев назад');
    expect(
      getRelMonths(new Date('2084-10-11'), 'ru', { numeric: 'auto' })
    ).toBe('через 751 месяц');
  });
});
