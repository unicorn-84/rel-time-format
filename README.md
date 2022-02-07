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
import rtf from 'rel-time-format';

rtf(new Date()); //=> in 0 days
```

## Support

- Node.js >= 14
- Chrome >= 71
- Edge >= 79
- Firefox >= 65
- Opera >= 68
- Safari >= 14

## License

[MIT](https://github.com/unicorn-84/ci-workflow-testing/blob/master/LICENSE)
