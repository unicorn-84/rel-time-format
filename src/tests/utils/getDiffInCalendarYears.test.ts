import { differenceInCalendarYears } from 'date-fns';
import getDiffInCalendarYears from '../../utils/getDiffInCalendarYears';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarYears', () => {
  it('should return the positive number of calendar years', () => {
    expect(getDiffInCalendarYears(new Date(), new Date())).toBe(
      differenceInCalendarYears(new Date(), new Date())
    );
    expect(getDiffInCalendarYears(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarYears(new Date(), new Date('2020-01-01T23:59:59'))
    ).toBe(
      differenceInCalendarYears(new Date(), new Date('2020-01-01T23:59:59'))
    );
    expect(
      getDiffInCalendarYears(new Date(), new Date('2020-01-01T23:59:59'))
    ).toBe(2);

    expect(
      getDiffInCalendarYears(
        new Date('2024-01-01T23:59:59'),
        new Date('2023-01-01T23:59:59')
      )
    ).toBe(
      differenceInCalendarYears(
        new Date('2024-01-01T23:59:59'),
        new Date('2023-01-01T23:59:59')
      )
    );
    expect(
      getDiffInCalendarYears(
        new Date('2024-01-01T23:59:59'),
        new Date('2023-01-01T23:59:59')
      )
    ).toBe(1);
  });

  it('should return the negative number of calendar years', () => {
    expect(
      getDiffInCalendarYears(new Date(), new Date('2023-01-01T23:59:59'), false)
    ).toBe(
      differenceInCalendarYears(new Date(), new Date('2023-01-01T23:59:59'))
    );
    expect(
      getDiffInCalendarYears(new Date(), new Date('2023-01-01T23:59:59'), false)
    ).toBe(-1);

    expect(
      getDiffInCalendarYears(new Date('1984-10-11T23:59:59'), new Date(), false)
    ).toBe(
      differenceInCalendarYears(new Date('1984-10-11T23:59:59'), new Date())
    );
    expect(
      getDiffInCalendarYears(new Date('1984-10-11T23:59:59'), new Date(), false)
    ).toBe(-38);

    expect(
      getDiffInCalendarYears(
        new Date('2023-01-01T23:59:59'),
        new Date('2025-01-01T23:59:59'),
        false
      )
    ).toBe(
      differenceInCalendarYears(
        new Date('2023-01-01T23:59:59'),
        new Date('2025-01-01T23:59:59')
      )
    );
    expect(
      getDiffInCalendarYears(
        new Date('2023-01-01T23:59:59'),
        new Date('2025-01-01T23:59:59'),
        false
      )
    ).toBe(-2);
  });
});
