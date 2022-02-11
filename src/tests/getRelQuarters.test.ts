import getRelQuarters from '../getRelQuarters';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe.skip('getRelQuarters', () => {
  it('should throw an error, if the date is not the Date object', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => getRelQuarters()).toThrow(
      "[rel-time-format]: 'undefined' is not the Date object"
    );
  });

  it('should return a relative time string', () => {
    expect(getRelQuarters(new Date())).toBe('in 0 quarters');
    expect(getRelQuarters(new Date('2022-05-01'))).toBe('in 1 quarter');
    expect(getRelQuarters(new Date('2021-12-01'))).toBe('1 quarter ago');
    expect(getRelQuarters(new Date('1984-10-11'))).toBe('152 quarters ago');
    expect(getRelQuarters(new Date('2084-10-11'))).toBe('in 248 months');
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelQuarters(new Date(), 'ru')).toBe('через 0 кварталов');
    expect(getRelQuarters(new Date('2022-05-01'), 'ru')).toBe(
      'через 1 квартал'
    );
    expect(getRelQuarters(new Date('2021-12-01'), 'ru')).toBe(
      '1 квартал назад'
    );
    expect(getRelQuarters(new Date('1984-10-11'), 'ru')).toBe(
      '152 квартала назад'
    );
    expect(getRelQuarters(new Date('2084-10-11'), 'ru')).toBe(
      'через 248 кварталов'
    );
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelQuarters(new Date(), undefined, { numeric: 'auto' })).toBe(
      'this quarter'
    );
    expect(
      getRelQuarters(new Date('2022-05-01'), undefined, { numeric: 'auto' })
    ).toBe('next quarter');
    expect(
      getRelQuarters(new Date('2021-12-01'), undefined, { numeric: 'auto' })
    ).toBe('last quarter');
    expect(
      getRelQuarters(new Date('1984-10-11'), undefined, { numeric: 'auto' })
    ).toBe('152 quarters ago');
    expect(
      getRelQuarters(new Date('2084-10-11'), undefined, { numeric: 'auto' })
    ).toBe('in 248 months');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(getRelQuarters(new Date(), 'ru', { numeric: 'auto' })).toBe(
      'в текущем квартале'
    );
    expect(
      getRelQuarters(new Date('2022-05-01'), 'ru', { numeric: 'auto' })
    ).toBe('в следующем квартале');
    expect(
      getRelQuarters(new Date('2021-12-01'), 'ru', { numeric: 'auto' })
    ).toBe('в прошлом квартале');
    expect(
      getRelQuarters(new Date('1984-10-11'), 'ru', { numeric: 'auto' })
    ).toBe('152 квартала назад');
    expect(
      getRelQuarters(new Date('2084-10-11'), 'ru', { numeric: 'auto' })
    ).toBe('через 248 кварталов');
  });
});
