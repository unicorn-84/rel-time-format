## API

Table of contents

- [getRelTime](#getRelTime)

- [getRelYears](#getRelYears)

- [getRelQuarters](#getRelQuarters)

- [getRelMonths](#getRelMonths)

- [getRelWeeks](#getRelWeeks)

- [getRelDays](#getRelDays)

- [getRelHours](#getRelHours)

- [getRelMinutes](#getRelMinutes)

- [getRelSeconds](#getRelSeconds)

- [getDiffInCalendarYears](#getDiffInCalendarYears)

- [getDiffInCalendarQuarters](#getDiffInCalendarQuarters)

- [getDiffInCalendarMonths](#getDiffInCalendarMonths)

- [getDiffInCalendarWeeks](#getDiffInCalendarWeeks)

- [getDiffInCalendarDays](#getDiffInCalendarDays)

- [getDiffInCalendarHours](#getDiffInCalendarHours)

- [getDiffInCalendarMinutes](#getDiffInCalendarMinutes)

- [getDiffInCalendarSeconds](#getDiffInCalendarSeconds)

- [getDiffInMilliseconds](#getDiffInMilliseconds)

- [options](#options)

### `getRelTime`

Formats the target date according to the [locales and formatting options](#options) in human-friendly words relative to the given base date.

#### Syntax

> ```js
> getRelTime(targetDate, baseDate);
> getRelTime(targetDate, baseDate, options);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The date to format.
- **`baseDate`**: **`Date`** `Required` - The date to compare with.
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelTime(new Date(), new Date(), { locales: 'en' });
//=> in 0 seconds

getRelTime(new Date('2022-01-01T23:00:00'), new Date('2022-01-01T23:59:59'), {
  locales: 'en',
});
//=> 59 minutes ago

getRelTime(new Date('2022-11-01'), new Date('2022-01-01'), {
  locales: 'en',
});
//=> in 10 months

getRelTime(new Date('2022-01-01'), new Date('2022-01-02'), {
  locales: 'ru',
  numeric: 'auto',
});
//=> вчера
```

### `getRelYears`

Formats the target date according to [the locales and the formatting options](#options) and the 'years' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the given base date.

#### Syntax

> ```js
> getRelYears(targetDate, baseDate);
> getRelYears(targetDate, baseDate, options);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The date to format.
- **`baseDate`**: **`Date`** `Required` - The date to compare with.
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelYears(new Date(), new Date(), { locales: 'en' });
//=> in 0 years

getRelYears(new Date('2022-01-01'), new Date('2000-01-01'), {
  locales: 'ru',
  numeric: 'auto',
});
//=> через 22 года
```

### `getRelQuarters`

Formats the target date according to [the locales and the formatting options](#options) and the 'quarters' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the given base date.

#### Syntax

> ```js
> getRelQuarters(targetDate, baseDate);
> getRelQuarters(targetDate, baseDate, options);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The date to format.
- **`baseDate`**: **`Date`** `Required` - The date to compare with.
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelQuarters(new Date(), new Date(), { locales: 'en' });
//=> in 0 quarters

getRelQuarters(new Date('2022-01-01'), new Date('2022-10-01'), {
  locales: 'ru',
  numeric: 'auto',
});
//=> 3 квартала назад
```

### `getRelMonths`

Formats the target date according to [the locales and the formatting options](#options) and the 'months' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the given base date.

#### Syntax

> ```js
> getRelMonths(targetDate, baseDate);
> getRelMonths(targetDate, baseDate, options);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The date to format.
- **`baseDate`**: **`Date`** `Required` - The date to compare with.
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelMonths(new Date(), new Date(), { locales: 'en' });
//=> in 0 months

getRelMonths(new Date('2023-12-01'), new Date('2022-01-01'), {
  locales: 'ru',
  numeric: 'auto',
});
//=> через 23 месяца
```

### `getRelWeeks`

Formats the target date according to [the locales and the formatting options](#options) and the 'weeks' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the given base date.

#### Important

The week starts on Monday.

#### Syntax

> ```js
> getRelWeeks(targetDate, baseDate);
> getRelWeeks(targetDate, baseDate, options);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The date to format.
- **`baseDate`**: **`Date`** `Required` - The date to compare with.
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelWeeks(new Date(), new Date(), { locales: 'en' });
//=> in 0 weeks

getRelWeeks(new Date('2022-01-31'), new Date('2022-01-01'), {
  locales: 'ru',
  numeric: 'auto',
});
//=> через 5 недель
```

### `getRelDays`

Formats the target date according to [the locales and the formatting options](#options) and the 'days' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the given base date.

#### Syntax

> ```js
> getRelDays(targetDate, baseDate);
> getRelDays(targetDate, baseDate, options);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The date to format.
- **`baseDate`**: **`Date`** `Required` - The date to compare with.
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelDays(new Date(), new Date(), { locales: 'en' });
//=> in 0 days

getRelDays(new Date('2022-01-01'), new Date('2023-01-01'), {
  locales: 'ru',
  numeric: 'auto',
});
//=> 365 дней назад
```

### `getRelHours`

Formats the target date according to [the locales and the formatting options](#options) and the 'hours' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the given base date.

#### Syntax

> ```js
> getRelHours(targetDate, baseDate);
> getRelHours(targetDate, baseDate, options);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The date to format.
- **`baseDate`**: **`Date`** `Required` - The date to compare with.
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelHours(new Date(), new Date(), { locales: 'en' });
//=> in 0 hours

getRelHours(new Date('2022-01-01T00:00:00'), new Date('2022-01-01T00:59:00'), {
  locales: 'ru',
  numeric: 'auto',
});
//=> в этот час
```

### `getRelMinutes`

Formats the target date according to [the locales and the formatting options](#options) and the 'minutes' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the given base date.

#### Syntax

> ```js
> getRelMinutes(targetDate, baseDate);
> getRelMinutes(targetDate, baseDate, options);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The date to format.
- **`baseDate`**: **`Date`** `Required` - The date to compare with.
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelMinutes(new Date(), new Date(), { locales: 'en' });
//=> in 0 minutes

getRelMinutes(
  new Date('2022-01-01T22:00:00'),
  new Date('2022-01-01T21:15:00'),
  { locales: 'ru', numeric: 'auto' }
);
//=> через 45 минут
```

### `getRelSeconds`

Formats the target date according to [the locales and the formatting options](#options) and the 'seconds' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the given base date.

#### Syntax

> ```js
> getRelSeconds(targetDate, baseDate);
> getRelSeconds(targetDate, baseDate, options);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The date to format.
- **`baseDate`**: **`Date`** `Required` - The date to compare with.
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelSeconds(new Date(), new Date(), { locales: 'en' });
//=> in 0 seconds

getRelSeconds(
  new Date('2022-01-01T00:00:15'),
  new Date('2022-01-01T00:00:00.900'),
  { locales: 'ru', numeric: 'auto' }
);
//=> через 15 секунд
```

### `getDiffInCalendarYears`

Get the number of calendar years between the given dates.

#### Syntax

> ```js
> getDiffInCalendarYears(targetDate, baseDate);
> getDiffInCalendarYears(targetDate, baseDate, abs);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The first date.
- **`baseDate`**: **`Date`** `Required` - The second date.
- **`abs`**: **`Boolean`** `Optional` - If `true` function returns the absolute value of a number. Default: `false`.

#### Examples

```js
getDiffInCalendarYears(
  new Date('2024-01-01T23:59:59'),
  new Date('2023-01-01T23:59:59')
); //=> 1
getDiffInCalendarYears(
  new Date('2023-01-01T23:59:59'),
  new Date('2025-01-01T23:59:59'),
  true
); //=> 2
```

### `getDiffInCalendarQuarters`

Get the number of calendar quarters between the given dates.

#### Syntax

> ```js
> getDiffInCalendarQuarters(targetDate, baseDate);
> getDiffInCalendarQuarters(targetDate, baseDate, abs);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The first date.
- **`baseDate`**: **`Date`** `Required` - The second date.
- **`abs`**: **`Boolean`** `Optional` - If `true` function returns the absolute value of a number. Default: `false`.

#### Examples

```js
getDiffInCalendarQuarters(
  new Date('2021-01-01T23:59:59'),
  new Date('2022-01-01T23:59:59')
); //=> -4
getDiffInCalendarQuarters(
  new Date('2020-05-01T23:59:59'),
  new Date('2021-01-01T23:59:59'),
  true
); //=> 3
```

### `getDiffInCalendarMonths`

Get the number of calendar months between the given dates.

#### Syntax

> ```js
> getDiffInCalendarMonths(targetDate, baseDate);
> getDiffInCalendarMonths(targetDate, baseDate, abs);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The first date.
- **`baseDate`**: **`Date`** `Required` - The second date.
- **`abs`**: **`Boolean`** `Optional` - If `true` function returns the absolute value of a number. Default: `false`.

#### Examples

```js
getDiffInCalendarMonths(
  new Date('2021-01-01T23:59:59'),
  new Date('2022-01-01T23:59:59')
); //=> -12
getDiffInCalendarMonths(
  new Date('2020-02-29T23:59:59'),
  new Date('2020-03-01T23:59:59'),
  true
); //=> 1
```

### `getDiffInCalendarWeeks`

Get the number of calendar weeks between the given dates.

#### Important

The week starts on Monday.

#### Syntax

> ```js
> getDiffInCalendarWeeks(targetDate, baseDate);
> getDiffInCalendarWeeks(targetDate, baseDate, abs);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The first date.
- **`baseDate`**: **`Date`** `Required` - The second date.
- **`abs`**: **`Boolean`** `Optional` - If `true` function returns the absolute value of a number. Default: `false`.

#### Examples

```js
getDiffInCalendarWeeks(
  new Date('2022-01-31T23:59:59'),
  new Date('2022-03-01T00:00:00')
); //=> -4
getDiffInCalendarWeeks(
  new Date('2022-03-01T00:00:00'),
  new Date('2022-03-21T23:59:59'),
  true
); //=> 3
```

### `getDiffInCalendarDays`

Get the number of calendar days between the given dates. This means that the times are removed from the dates.

#### Syntax

> ```js
> getDiffInCalendarDays(targetDate, baseDate);
> getDiffInCalendarDays(targetDate, baseDate, abs);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The first date.
- **`baseDate`**: **`Date`** `Required` - The second date.
- **`abs`**: **`Boolean`** `Optional` - If `true` function returns the absolute value of a number. Default: `false`.

#### Examples

```js
getDiffInCalendarDays(
  new Date('2021-12-31T23:59:59'),
  new Date('2022-01-01T00:00:00')
); //=> -1
getDiffInCalendarDays(
  new Date('2021-01-01T00:00:00'),
  new Date('2022-01-01T23:59:59'),
  true
); //=> 365
```

### `getDiffInCalendarHours`

Get the number of calendar hours between the given dates. This means that minutes, seconds and milliseconds are removed from the dates.

#### Syntax

> ```js
> getDiffInCalendarHours(targetDate, baseDate);
> getDiffInCalendarHours(targetDate, baseDate, abs);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The first date.
- **`baseDate`**: **`Date`** `Required` - The second date.
- **`abs`**: **`Boolean`** `Optional` - If `true` function returns the absolute value of a number. Default: `false`.

#### Examples

```js
getDiffInCalendarHours(
  new Date('2021-12-31T00:59:59'),
  new Date('2022-01-01T23:59:59')
); //=> -47
getDiffInCalendarHours(
  new Date('2021-01-01T23:59:59'),
  new Date('2021-01-02T23:59:59'),
  true
); //=> 24
```

### `getDiffInCalendarMinutes`

Get the number of calendar minutes between the given dates. This means that seconds and milliseconds are removed from the dates.

#### Syntax

> ```js
> getDiffInCalendarMinutes(targetDate, baseDate);
> getDiffInCalendarMinutes(targetDate, baseDate, abs);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The first date.
- **`baseDate`**: **`Date`** `Required` - The second date.
- **`abs`**: **`Boolean`** `Optional` - If `true` function returns the absolute value of a number. Default: `false`.

#### Examples

```js
getDiffInCalendarMinutes(
  new Date('2021-01-01T23:59:59'),
  new Date('2021-01-02T00:00:59')
); //=> -1
getDiffInCalendarMinutes(
  new Date('2021-12-31T23:59:59'),
  new Date('2022-01-01T00:59:59'),
  true
); //=> 60
```

### `getDiffInCalendarSeconds`

Get the number of calendar seconds between the given dates. This means that milliseconds are removed from the dates.

#### Syntax

> ```js
> getDiffInCalendarSeconds(targetDate, baseDate);
> getDiffInCalendarSeconds(targetDate, baseDate, abs);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The first date.
- **`baseDate`**: **`Date`** `Required` - The second date.
- **`abs`**: **`Boolean`** `Optional` - If `true` function returns the absolute value of a number. Default: `false`.

#### Examples

```js
getDiffInCalendarSeconds(
  new Date('2021-01-01T23:59:59.100'),
  new Date('2021-01-02T00:00:59.100')
); //=> -60
getDiffInCalendarSeconds(
  new Date('2021-12-31T23:59:59.200'),
  new Date('2022-01-01T00:00:59.100'),
  true
); //=> 60
```

### `getDiffInMilliseconds`

Get the number of milliseconds between the given dates.

#### Syntax

> ```js
> getDiffInMilliseconds(targetDate, baseDate);
> getDiffInMilliseconds(targetDate, baseDate, abs);
> ```

#### Parameters

- **`targetDate`**: **`Date`** `Required` - The first date.
- **`baseDate`**: **`Date`** `Required` - The second date.
- **`abs`**: **`Boolean`** `Optional` - If `true` function returns the absolute value of a number. Default: `false`.

#### Examples

```js
getDiffInMilliseconds(
  new Date('2021-01-01T23:59:59.100'),
  new Date('2021-01-02T00:00:00.100')
); //=> -1000
getDiffInMilliseconds(
  new Date('2021-12-31T23:59:59.200'),
  new Date('2022-01-01T00:00:00.100'),
  true
); //=> 900
```

### `options`

An object with [the locales and the formatting options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#parameters).

- **`locales`**: `string|string[]`
- **`localeMatcher`**:
  - "`best fit`" (default)
  - "`lookup`"
- **`numeric`**:
  - "`always`" (default, e.g., `1 day ago`)
  - "`auto`" (e.g., `yesterday`)
- **`style`**:
  - "`long`": (default, e.g., `in 1 month`)
  - "`short`": (e.g., `in 1 mo.`)
  - "`narrow`" (e.g., `in 1 mo.`)
