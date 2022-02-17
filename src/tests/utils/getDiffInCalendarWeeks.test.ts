import { differenceInCalendarWeeks } from 'date-fns';
import getDiffInCalendarWeeks from '../../utils/getDiffInCalendarWeeks';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01T00:00:00'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getDiffInCalendarWeeks', () => {
  it('should return the positive number of calendar weeks', () => {
    expect(getDiffInCalendarWeeks(new Date(), new Date())).toBe(
      differenceInCalendarWeeks(new Date(), new Date(), { weekStartsOn: 1 })
    );
    expect(getDiffInCalendarWeeks(new Date(), new Date())).toBe(0);

    expect(
      getDiffInCalendarWeeks(new Date(), new Date('2021-11-27T23:59:59'))
    ).toBe(
      differenceInCalendarWeeks(new Date(), new Date('2021-11-27T23:59:59'), {
        weekStartsOn: 1,
      })
    );
    expect(
      getDiffInCalendarWeeks(new Date(), new Date('2021-11-27T23:59:59'))
    ).toBe(5);

    expect(
      getDiffInCalendarWeeks(new Date('2022-02-01T23:59:59'), new Date())
    ).toBe(
      differenceInCalendarWeeks(new Date('2022-02-01T23:59:59'), new Date(), {
        weekStartsOn: 1,
      })
    );
    expect(
      getDiffInCalendarWeeks(new Date('2022-02-01T23:59:59'), new Date())
    ).toBe(5);

    expect(
      getDiffInCalendarWeeks(
        new Date('2022-03-01T00:00:00'),
        new Date('2022-01-31T23:59:59')
      )
    ).toBe(
      differenceInCalendarWeeks(
        new Date('2022-03-01T00:00:00'),
        new Date('2022-01-31T23:59:59'),
        { weekStartsOn: 1 }
      )
    );
    expect(
      getDiffInCalendarWeeks(
        new Date('2022-03-01T00:00:00'),
        new Date('2022-01-31T23:59:59')
      )
    ).toBe(4);
  });

  it('should return the negative number of calendar weeks', () => {
    expect(
      getDiffInCalendarWeeks(new Date(), new Date('2022-01-30T23:59:59'), false)
    ).toBe(
      differenceInCalendarWeeks(new Date(), new Date('2022-01-30T23:59:59'), {
        weekStartsOn: 1,
      })
    );
    expect(
      getDiffInCalendarWeeks(new Date(), new Date('2022-01-30T23:59:59'), false)
    ).toBe(-4);

    expect(
      getDiffInCalendarWeeks(new Date('2021-11-22:00:00:00'), new Date(), false)
    ).toBe(
      differenceInCalendarWeeks(new Date('2021-11-22:00:00:00'), new Date(), {
        weekStartsOn: 1,
      })
    );
    expect(
      getDiffInCalendarWeeks(new Date('2021-11-22:00:00:00'), new Date(), false)
    ).toBe(-5);

    expect(
      getDiffInCalendarWeeks(
        new Date('2022-03-01T00:00:00'),
        new Date('2022-03-21T23:59:59'),
        false
      )
    ).toBe(
      differenceInCalendarWeeks(
        new Date('2022-03-01T00:00:00'),
        new Date('2022-03-21T23:59:59'),
        { weekStartsOn: 1 }
      )
    );
    expect(
      getDiffInCalendarWeeks(
        new Date('2022-03-01T00:00:00'),
        new Date('2022-03-21T23:59:59'),
        false
      )
    ).toBe(-3);
  });
});
