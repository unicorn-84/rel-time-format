import { differenceInCalendarDays } from 'date-fns';
import { getDiffInCalendarDays } from '../../utils';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarDays', () => {
  it('should return the positive number of calendar days', () => {
    expect(getDiffInCalendarDays(new Date(), new Date())).toBe(
      differenceInCalendarDays(new Date(), new Date())
    );
    expect(getDiffInCalendarDays(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarDays(new Date(), new Date('2021-12-31T23:59:59'))
    ).toBe(
      differenceInCalendarDays(new Date(), new Date('2021-12-31T23:59:59'))
    );
    expect(
      getDiffInCalendarDays(new Date(), new Date('2021-12-31T23:59:59'))
    ).toBe(1);

    expect(
      getDiffInCalendarDays(new Date('2022-01-01T23:59:59'), new Date())
    ).toBe(
      differenceInCalendarDays(new Date('2022-01-01T23:59:59'), new Date())
    );
    expect(
      getDiffInCalendarDays(new Date('2022-01-01T23:59:59'), new Date())
    ).toBe(0);

    expect(
      getDiffInCalendarDays(
        new Date('2022-01-01T00:00:00'),
        new Date('2021-12-31T23:59:59')
      )
    ).toBe(
      differenceInCalendarDays(
        new Date('2022-01-01T00:00:00'),
        new Date('2021-12-31T23:59:59')
      )
    );
    expect(
      getDiffInCalendarDays(
        new Date('2022-01-01T00:00:00'),
        new Date('2021-12-31T23:59:59')
      )
    ).toBe(1);
  });

  it('should return the negative number of calendar days', () => {
    expect(
      getDiffInCalendarDays(new Date(), new Date('2022-02-01T23:59:59'), false)
    ).toBe(
      differenceInCalendarDays(new Date(), new Date('2022-02-01T23:59:59'))
    );
    expect(
      getDiffInCalendarDays(new Date(), new Date('2022-02-01T23:59:59'), false)
    ).toBe(-31);

    expect(
      getDiffInCalendarDays(new Date('2021-12-31T23:59:59'), new Date(), false)
    ).toBe(
      differenceInCalendarDays(new Date('2021-12-31T23:59:59'), new Date())
    );
    expect(
      getDiffInCalendarDays(new Date('2021-12-31T23:59:59'), new Date(), false)
    ).toBe(-1);

    expect(
      getDiffInCalendarDays(
        new Date('2021-01-01T00:00:00'),
        new Date('2022-01-01T23:59:59'),
        false
      )
    ).toBe(
      differenceInCalendarDays(
        new Date('2021-01-01T00:00:00'),
        new Date('2022-01-01T23:59:59')
      )
    );
    expect(
      getDiffInCalendarDays(
        new Date('2021-01-01T00:00:00'),
        new Date('2022-01-01T23:59:59'),
        false
      )
    ).toBe(-365);
  });
});
