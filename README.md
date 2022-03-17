# 🕰️ rel-time-format

JavaScript library for human-friendly relative date formatting.

This is a simple wrapper for [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat).

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

- The **rel-time-format** library is written using [ECMAScript Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl), which requires [Node.js](https://nodejs.org) version 14 or higher.

```js
import { getRelYears, getReDays, getRelHours } from 'rel-time-format';

getRelYears(new Date(), 'en', { numeric: 'auto' }); //=> this years
getRelDays(new Date('2022-01-01')); //=> e.g. 45 days ago
getRelHours(new Date(), 'ru'); // через 0 часов
```

## [API](https://github.com/unicorn-84/rel-time-format/blob/master/API.md)

- [getRelYears](https://github.com/unicorn-84/rel-time-format/blob/master/API.md#getRelYears)

- [getRelQuarters](https://github.com/unicorn-84/rel-time-format/blob/master/API.md#getRelQuarters)

- [getRelMonths](https://github.com/unicorn-84/rel-time-format/blob/master/API.md#getRelMonths)

- [getRelWeeks](https://github.com/unicorn-84/rel-time-format/blob/master/API.md#getRelWeeks)

- [getRelDays](https://github.com/unicorn-84/rel-time-format/blob/master/API.md#getRelDays)

- [getRelHours](https://github.com/unicorn-84/rel-time-format/blob/master/API.md#getRelHours)

- [getRelMinutes](https://github.com/unicorn-84/rel-time-format/blob/master/API.md#getRelMinutes)

- [getRelSeconds](https://github.com/unicorn-84/rel-time-format/blob/master/API.md#getRelSeconds)

## Support

- Node.js >= 14
- Chrome >= 71
- Edge >= 79
- Firefox >= 65
- Opera >= 68
- Safari >= 14

## License

[MIT](https://github.com/unicorn-84/rel-time-format/blob/master/LICENSE)
