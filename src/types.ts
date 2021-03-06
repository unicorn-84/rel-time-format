export interface IGetRelOptions extends Intl.RelativeTimeFormatOptions {
  locales?:
    | Intl.UnicodeBCP47LocaleIdentifier
    | Intl.UnicodeBCP47LocaleIdentifier[];
}

export type TGetRel = (
  targetDate: Date,
  baseDate: Date,
  options?: IGetRelOptions
) => string;

export type TGetDiff = (
  targetDate: Date,
  baseDate: Date,
  abs?: boolean
) => number;
