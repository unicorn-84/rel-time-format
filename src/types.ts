export interface IGetRelOptions extends Intl.RelativeTimeFormatOptions {
  locales?:
    | Intl.UnicodeBCP47LocaleIdentifier
    | Intl.UnicodeBCP47LocaleIdentifier[];
}

export type TGetRel = (date: Date, options?: IGetRelOptions) => string;
