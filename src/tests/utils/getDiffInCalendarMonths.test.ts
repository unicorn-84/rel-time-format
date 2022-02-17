import { differenceInCalendarMonths } from 'date-fns';
import { getDiffInCalendarMonths } from '../../utils';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarMonths', () => {
  it('should return the positive number of calendar months', () => {
    expect(getDiffInCalendarMonths(new Date(), new Date())).toBe(
      differenceInCalendarMonths(new Date(), new Date())
    );
    expect(getDiffInCalendarMonths(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarMonths(new Date(), new Date('2021-02-01T23:59:59'))
    ).toBe(
      differenceInCalendarMonths(new Date(), new Date('2021-02-01T23:59:59'))
    );
    expect(
      getDiffInCalendarMonths(new Date(), new Date('2021-02-01T23:59:59'))
    ).toBe(11);

    expect(
      getDiffInCalendarMonths(new Date('2022-02-01T23:59:59'), new Date())
    ).toBe(
      differenceInCalendarMonths(new Date('2022-02-01T23:59:59'), new Date())
    );
    expect(
      getDiffInCalendarMonths(new Date('2022-02-01T23:59:59'), new Date())
    ).toBe(1);

    expect(
      getDiffInCalendarMonths(
        new Date('2022-01-01T23:59:59'),
        new Date('2021-01-01T23:59:59')
      )
    ).toBe(
      differenceInCalendarMonths(
        new Date('2022-01-01T23:59:59'),
        new Date('2021-01-01T23:59:59')
      )
    );
    expect(
      getDiffInCalendarMonths(
        new Date('2022-01-01T23:59:59'),
        new Date('2021-01-01T23:59:59')
      )
    ).toBe(12);
  });

  it('should return the negative number of calendar months', () => {
    expect(
      getDiffInCalendarMonths(
        new Date(),
        new Date('2025-01-01T23:59:59'),
        false
      )
    ).toBe(
      differenceInCalendarMonths(new Date(), new Date('2025-01-01T23:59:59'))
    );
    expect(
      getDiffInCalendarMonths(
        new Date(),
        new Date('2025-01-01T23:59:59'),
        false
      )
    ).toBe(-36);

    expect(
      getDiffInCalendarMonths(
        new Date('2021-12-31T23:59:59'),
        new Date(),
        false
      )
    ).toBe(
      differenceInCalendarMonths(new Date('2021-12-31T23:59:59'), new Date())
    );
    expect(
      getDiffInCalendarMonths(
        new Date('2021-12-31T23:59:59'),
        new Date(),
        false
      )
    ).toBe(-1);

    expect(
      getDiffInCalendarMonths(
        new Date('2020-02-29T23:59:59'),
        new Date('2020-03-01T23:59:59'),
        false
      )
    ).toBe(
      differenceInCalendarMonths(
        new Date('2020-02-29T23:59:59'),
        new Date('2020-03-01T23:59:59')
      )
    );
    expect(
      getDiffInCalendarMonths(
        new Date('2020-02-29T23:59:59'),
        new Date('2020-03-01T23:59:59'),
        false
      )
    ).toBe(-1);
  });
});
