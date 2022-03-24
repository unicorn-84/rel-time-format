# 🕰️ rel-time-format

> JavaScript library for human-friendly relative date formatting.

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
import { getRelTime } from 'rel-time-format';

getRelTime(new Date(), new Date(), {
  locales: 'en',
  numeric: 'auto',
});
//=> now

getRelTime(new Date(2023, 0, 1), new Date('2022-12-01'), {
  locales: 'ru',
  style: 'short',
});
//=> через 1 мес.
```

```js
import { getRelYears } from 'rel-time-format';

getRelYears(new Date('2000 Jan 1'), new Date('2022-01-01'), { locales: 'en' });
//=> 22 years ago
```

```js
import { getDiffInCalendarDays } from 'rel-time-format';

getDiffInCalendarDays(
  new Date('2022-01-01'),
  new Date('2022-01-02T23:59:59'),
  true
);
//=> 1
```

## API

See [API](https://github.com/unicorn-84/rel-time-format/blob/master/API.md).

## Support

- Node.js >= 14
- Chrome >= 71
- Edge >= 79
- Firefox >= 65
- Opera >= 68
- Safari >= 14

## License

[MIT](https://github.com/unicorn-84/rel-time-format/blob/master/LICENSE)
