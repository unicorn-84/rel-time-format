# 🕰️ rel-time-format

JavaScript library for human-friendly relative time and date formatting.

This is a simple wrapper for [Intl.RelativeTimeFormat](https://tc39.es/ecma402/#relativetimeformat-objects).

[![version](https://img.shields.io/npm/v/rel-time-format)](https://www.npmjs.com/package/ci-workflow-testing) [![build workflow](https://github.com/unicorn-84/rel-time-format/actions/workflows/build.yml/badge.svg)](https://github.com/unicorn-84/rel-time-format/actions/workflows/build.yml) [![codecov](https://codecov.io/gh/unicorn-84/rel-time-format/branch/master/graph/badge.svg?token=5A76CUQ75O)](https://codecov.io/gh/unicorn-84/rel-time-format) [![MIT license](https://img.shields.io/github/license/unicorn-84/rel-time-format)](https://github.com/unicorn-84/rel-time-format/blob/master/LICENSE) [![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## Installation

Using npm:

```bash
npm install rel-time-format
```

Using yarn:

```bash
yarn add rel-time-format
```

## Usage

### Important

- The **rel-time-format** library is ESM.

- The **rel-time-format** library is written using [ECMAScript Internationalization API](https://tc39.es/ecma402/#intl-object), which requires [Node.js](https://nodejs.org) version 14 or higher.

```js
import { getRelYears } from 'rel-time-format';

getRelYears(new Date(), 'en', { numeric: 'auto' }); //=> this years
```

## API

### getRelYears(date[,locales[,options]])

Formats the date according to the locales, formatting options and the 'years' unit in human-friendly words relative to the current date.

- **date**: **`Date`** (_required_) - The date to format.
- **locales**: **`string|string[]`** (_optional_) - See [locales](#locales).
- **options**: **`Object`** (_optional_) - See [options](#options).

```js
getRelYears(new Date(), 'en'); //=> in 0 years
getRelYears(new Date(), 'ru', { numeric: 'auto' }); //=> в этом году
getRelYears(new Date(2022, 0), undefined, { numeric: 'auto' }); //=> e.g. this year
```

### getRelQuarters(date[,locales[,options]])

Formats the date according to the locales, formatting options and the 'quarters' unit in human-friendly words relative to the current date.

- **date**: **`Date`** (_required_) - The date to format.
- **locales**: **`string|string[]`** (_optional_) - See [locales](#locales).
- **options**: **`Object`** (_optional_) - See [options](#options).

```js
getRelQuarters(new Date(), 'en'); //=> in 0 quarters
getRelQuarters(new Date(), 'ru', { numeric: 'auto' }); //=> в текущем квартале
getRelQuarters(new Date(2022, 5), undefined, { numeric: 'auto' }); //=> e.g. in 1 quarter
```

### getRelMonths(date[,locales[,options]])

Formats the date according to the locales, formatting options and the 'months' unit in human-friendly words relative to the current date.

- **date**: **`Date`** (_required_) - The date to format.
- **locales**: **`string|string[]`** (_optional_) - See [locales](#locales).
- **options**: **`Object`** (_optional_) - See [options](#options).

```js
getRelMonths(new Date(), 'en'); //=> in 0 months
getRelMonths(new Date(), 'ru', { numeric: 'auto' }); //=> в этом месяце
getRelMonths(new Date('2022-2-28')); //=> e.g. 1 month ago
```

### getRelDays(date[,locales[,options]])

Formats the date according to the locales, formatting options and the 'days' unit in human-friendly words relative to the current date.

- **date**: **`Date`** (_required_) - The date to format.
- **locales**: **`string|string[]`** (_optional_) - See [locales](#locales).
- **options**: **`Object`** (_optional_) - See [options](#options).

```js
getRelDays(new Date(), 'en'); //=> in 0 days
getRelDays(new Date(), 'ru', { numeric: 'auto' }); //=> сегодня
getRelDays(new Date(2022, 0, 1), undefined, { numeric: 'auto' }); //=> e.g. 22 days ago
```

### locales

A string with a [BCP 47 language tag](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4), or an array of such strings.
The `locales` argument is used to determine the locale used in a given operation. The JavaScript implementation examines locales, and then computes a locale it understands that comes closest to satisfying the expressed preference. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).

### options

An object with some or all of options of [Intl.RelativeTimeFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).
Values:

- **localeMatcher**:
  - **`best fit`** (default)
  - **`lookup`**
- **numeric**:
  - **`always`** (default, e.g., 1 day ago)
  - **`auto`** (e.g., yesterday)
- **style**:
  - **`long`**: (default, e.g., in 1 month)
  - **`short`**: (e.g., in 1 mo.)
  - **`narrow`** (e.g., in 1 mo.)

## Support

- Node.js >= 14
- Chrome >= 71
- Edge >= 79
- Firefox >= 65
- Opera >= 68
- Safari >= 14

## License

[MIT](https://github.com/unicorn-84/ci-workflow-testing/blob/master/LICENSE)
