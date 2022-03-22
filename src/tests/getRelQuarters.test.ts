import { getRelQuarters } from '..';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getRelQuarters', () => {
  it('should return a relative time string', () => {
    expect(getRelQuarters(new Date(), new Date())).toBe('in 0 quarters');
    expect(getRelQuarters(new Date('2022-05-01'), new Date())).toBe(
      'in 1 quarter'
    );
    expect(getRelQuarters(new Date('2021-12-01'), new Date())).toBe(
      '1 quarter ago'
    );
    expect(getRelQuarters(new Date('1984-10-11'), new Date())).toBe(
      '149 quarters ago'
    );
    expect(getRelQuarters(new Date('2084-10-11'), new Date())).toBe(
      'in 251 quarters'
    );
  });

  it('should return a relative time string according to the locales', () => {
    expect(getRelQuarters(new Date(), new Date(), { locales: 'ru' })).toBe(
      'через 0 кварталов'
    );
    expect(
      getRelQuarters(new Date('2022-05-01'), new Date(), { locales: 'ru' })
    ).toBe('через 1 квартал');
    expect(
      getRelQuarters(new Date('2021-12-01'), new Date(), { locales: 'ru' })
    ).toBe('1 квартал назад');
    expect(
      getRelQuarters(new Date('1984-10-11'), new Date(), { locales: 'ru' })
    ).toBe('149 кварталов назад');
    expect(
      getRelQuarters(new Date('2084-10-11'), new Date(), { locales: 'ru' })
    ).toBe('через 251 квартал');
  });

  it('should return a relative time string according to the formatting options', () => {
    expect(getRelQuarters(new Date(), new Date(), { numeric: 'auto' })).toBe(
      'this quarter'
    );
    expect(
      getRelQuarters(new Date('2022-05-01'), new Date(), { numeric: 'auto' })
    ).toBe('next quarter');
    expect(
      getRelQuarters(new Date('2021-12-01'), new Date(), { numeric: 'auto' })
    ).toBe('last quarter');
    expect(
      getRelQuarters(new Date('1984-10-11'), new Date(), { numeric: 'auto' })
    ).toBe('149 quarters ago');
    expect(
      getRelQuarters(new Date('2084-10-11'), new Date(), { numeric: 'auto' })
    ).toBe('in 251 quarters');
  });

  it('should return a relative time string according to the locales and the formatting options', () => {
    expect(
      getRelQuarters(new Date(), new Date(), { locales: 'ru', numeric: 'auto' })
    ).toBe('в текущем квартале');
    expect(
      getRelQuarters(new Date('2022-05-01'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('в следующем квартале');
    expect(
      getRelQuarters(new Date('2021-12-01'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('в прошлом квартале');
    expect(
      getRelQuarters(new Date('1984-10-11'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('149 кварталов назад');
    expect(
      getRelQuarters(new Date('2084-10-11'), new Date(), {
        locales: 'ru',
        numeric: 'auto',
      })
    ).toBe('через 251 квартал');
  });
});
