import { differenceInCalendarQuarters } from 'date-fns';
import { getDiffInCalendarQuarters } from '../../utils';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarQuarters', () => {
  it('should return the positive number of calendar months', () => {
    expect(getDiffInCalendarQuarters(new Date(), new Date())).toBe(
      differenceInCalendarQuarters(new Date(), new Date())
    );
    expect(getDiffInCalendarQuarters(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarQuarters(new Date(), new Date('2021-01-01T23:59:59'))
    ).toBe(
      differenceInCalendarQuarters(new Date(), new Date('2021-01-01T23:59:59'))
    );
    expect(
      getDiffInCalendarQuarters(new Date(), new Date('2021-01-01T23:59:59'))
    ).toBe(4);

    expect(
      getDiffInCalendarQuarters(new Date('2023-01-01T23:59:59'), new Date())
    ).toBe(
      differenceInCalendarQuarters(new Date('2023-01-01T23:59:59'), new Date())
    );
    expect(
      getDiffInCalendarQuarters(new Date('2023-01-01T23:59:59'), new Date())
    ).toBe(4);

    expect(
      getDiffInCalendarQuarters(
        new Date('2022-01-01T23:59:59'),
        new Date('2021-01-01T23:59:59')
      )
    ).toBe(
      differenceInCalendarQuarters(
        new Date('2022-01-01T23:59:59'),
        new Date('2021-01-01T23:59:59')
      )
    );

    expect(
      getDiffInCalendarQuarters(
        new Date('2022-01-01T23:59:59'),
        new Date('2021-01-01T23:59:59')
      )
    ).toBe(4);
  });

  it('should return the negative number of calendar months', () => {
    expect(
      getDiffInCalendarQuarters(
        new Date(),
        new Date('2025-01-01T23:59:59'),
        false
      )
    ).toBe(
      differenceInCalendarQuarters(new Date(), new Date('2025-01-01T23:59:59'))
    );
    expect(
      getDiffInCalendarQuarters(
        new Date(),
        new Date('2025-01-01T23:59:59'),
        false
      )
    ).toBe(-12);

    expect(
      getDiffInCalendarQuarters(
        new Date('2021-12-31T23:59:59'),
        new Date(),
        false
      )
    ).toBe(
      differenceInCalendarQuarters(new Date('2021-12-31T23:59:59'), new Date())
    );
    expect(
      getDiffInCalendarQuarters(
        new Date('2021-12-31T23:59:59'),
        new Date(),
        false
      )
    ).toBe(-1);

    expect(
      getDiffInCalendarQuarters(
        new Date('2020-05-01T23:59:59'),
        new Date('2021-01-01T23:59:59'),
        false
      )
    ).toBe(
      differenceInCalendarQuarters(
        new Date('2020-05-01T23:59:59'),
        new Date('2021-01-01T23:59:59')
      )
    );
    expect(
      getDiffInCalendarQuarters(
        new Date('2020-05-01T23:59:59'),
        new Date('2021-01-01T23:59:59'),
        false
      )
    ).toBe(-3);
  });
});
