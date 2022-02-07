import rtf from '..';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2022, 0));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('rel-time-format', () => {
  test('should return a human-friendly string with the target date', () => {
    expect(rtf(new Date())).toBe('in 0 days');
    expect(rtf(new Date(2023, 0))).toBe('in 365 days');
    expect(rtf(new Date(2021, 0))).toBe('365 days ago');
  });
  test('should throw error, if the target date is not the Date object', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => rtf()).toThrow(
      '[rel-time-format]: The target date must be the Date object'
    );
  });
});
