## API

### Table of contents

- [getRelYears](#getRelYears)

- [getRelQuarters](#getRelQuarters)

- [getRelMonths](#getRelMonths)

- [getRelWeeks](#getRelWeeks)

- [getRelDays](#getRelDays)

- [getRelHours](#getRelHours)

- [getRelMinutes](#getRelMinutes)

- [getRelSeconds](#getRelSeconds)

### getRelYears

Formats the date according to the [locales](#locales), formatting [options](#options) and the 'years' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the current date.

#### Syntax

> ```js
> getRelYears(date);
> getRelYears(date, locales);
> getRelYears(date, locales, options);
> ```

#### Parameters

- **`date`**: **`Date`** `Required` - The date to format.
- **`locales`**: **`string|string[]`** `Optional` - See [locales](#locales).
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelYears(new Date(), 'en'); //=> in 0 years
getRelYears(new Date(), 'ru', { numeric: 'auto' }); //=> в этом году
getRelYears(new Date('2022-01-01'), undefined, { numeric: 'auto' }); //=> e.g. this year
```

### getRelQuarters

Formats the date according to the [locales](#locales), formatting [options](#options) and the 'quarters' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the current date.

#### Syntax

> ```js
> getRelQuarters(date);
> getRelQuarters(date, locales);
> getRelQuarters(date, locales, options);
> ```

#### Parameters

- **`date`**: **`Date`** `Required` - The date to format.
- **`locales`**: **`string|string[]`** `Optional` - See [locales](#locales).
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelQuarters(new Date(), 'en'); //=> in 0 quarters
getRelQuarters(new Date(), 'ru', { numeric: 'auto' }); //=> в текущем квартале
getRelQuarters(new Date('2022-05-10'), undefined, { numeric: 'auto' }); //=> e.g. in 1 quarter
```

### getRelMonths

Formats the date according to the [locales](#locales), formatting [options](#options) and the 'months' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the current date.

#### Syntax

> ```js
> getRelMonths(date);
> getRelMonths(date, locales);
> getRelMonths(date, locales, options);
> ```

#### Parameters

- **`date`**: **`Date`** `Required` - The date to format.
- **`locales`**: **`string|string[]`** `Optional` - See [locales](#locales).
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelMonths(new Date(), 'en'); //=> in 0 months
getRelMonths(new Date(), 'ru', { numeric: 'auto' }); //=> в этом месяце
getRelMonths(new Date('2022-2-28')); //=> e.g. 1 month ago
```

### getRelWeeks

Formats the date according to the [locales](#locales), formatting [options](#options) and the 'weeks' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the current date.

#### Important

The first day of the week is Monday.

#### Syntax

> ```js
> getRelWeeks(date);
> getRelWeeks(date, locales);
> getRelWeeks(date, locales, options);
> ```

#### Parameters

- **`date`**: **`Date`** `Required` - The date to format.
- **`locales`**: **`string|string[]`** `Optional` - See [locales](#locales).
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelWeeks(new Date(), 'en'); //=> in 0 weeks
getRelWeeks(new Date(), 'ru', { numeric: 'auto' }); //=> на этой неделе
getRelWeeks(new Date('2020-02-28')); //=> e.g. 103 weeks ago
```

### getRelDays

Formats the date according to the [locales](#locales), formatting [options](#options) and the 'days' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the current date.

#### Syntax

> ```js
> getRelDays(date);
> getRelDays(date, locales);
> getRelDays(date, locales, options);
> ```

#### Parameters

- **`date`**: **`Date`** `Required` - The date to format.
- **`locales`**: **`string|string[]`** `Optional` - See [locales](#locales).
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelDays(new Date(), 'en'); //=> in 0 days
getRelDays(new Date(), 'ru', { numeric: 'auto' }); //=> сегодня
getRelDays(new Date('2022-01-22'), undefined, { numeric: 'auto' }); //=> e.g. 22 days ago
```

### getRelHours

Formats the date according to the [locales](#locales), formatting [options](#options) and the 'hours' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the current date.

#### Syntax

> ```js
> getRelHours(date);
> getRelHours(date, locales);
> getRelHours(date, locales, options);
> ```

#### Parameters

- **`date`**: **`Date`** `Required` - The date to format.
- **`locales`**: **`string|string[]`** `Optional` - See [locales](#locales).
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelHours(new Date(), 'en'); //=> in 0 hours
getRelHours(new Date(), 'ru', { numeric: 'auto' }); //=> в этот час
getRelHours(new Date('2021-12-31T23:00:00'), undefined, { numeric: 'auto' }); //=> e.g. 1 hour ago
```

### getRelMinutes

Formats the date according to the [locales](#locales), formatting [options](#options) and the 'minutes' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the current date.

#### Syntax

> ```js
> getRelMinutes(date);
> getRelMinutes(date, locales);
> getRelMinutes(date, locales, options);
> ```

#### Parameters

- **`date`**: **`Date`** `Required` - The date to format.
- **`locales`**: **`string|string[]`** `Optional` - See [locales](#locales).
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelMinutes(new Date(), 'en'); //=> in 0 minutes
getRelMinutes(new Date(), 'ru', { numeric: 'auto' }); //=> в эту минуту
getRelMinutes(new Date('2021-12-31T23:59:00'), undefined, { numeric: 'auto' }); //=> e.g. 1 minute ago
```

### getRelSeconds

Formats the date according to the [locales](#locales), formatting [options](#options) and the 'seconds' [unit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#parameters) in human-friendly words relative to the current date.

#### Syntax

> ```js
> getRelSeconds(date);
> getRelSeconds(date, locales);
> getRelSeconds(date, locales, options);
> ```

#### Parameters

- **`date`**: **`Date`** `Required` - The date to format.
- **`locales`**: **`string|string[]`** `Optional` - See [locales](#locales).
- **`options`**: **`Object`** `Optional` - See [options](#options).

#### Examples

```js
getRelSeconds(new Date(), 'en'); //=> in 0 seconds
getRelSeconds(new Date(), 'ru', { numeric: 'auto' }); //=> сейчас
getRelSeconds(new Date('2021-12-31T23:59:59'), undefined, { numeric: 'auto' }); //=> e.g. 1 seconds ago
```

### locales

A string with a [BCP 47 language tag](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4), or an array of such strings.
The `locales` argument is used to determine the locale used in a given operation. The JavaScript implementation examines locales, and then computes a locale it understands that comes closest to satisfying the expressed preference. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).

### options

An object with some or all of options of [Intl.RelativeTimeFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).

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
