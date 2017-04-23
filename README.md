# @fibjs/readdir-recursive

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@fibjs/readdir-recursive.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fibjs/readdir-recursive
[travis-image]: https://img.shields.io/travis/fibjs-modules/readdir-recursive.svg?style=flat-square
[travis-url]: https://travis-ci.org/fibjs-modules/readdir-recursive
[codecov-image]: https://img.shields.io/codecov/c/github/fibjs-modules/readdir-recursive.svg?style=flat-square
[codecov-url]: https://codecov.io/github/fibjs-modules/readdir-recursive?branch=master
[david-image]: https://img.shields.io/david/fibjs-modules/readdir-recursive.svg?style=flat-square
[david-url]: https://david-dm.org/fibjs-modules/readdir-recursive
[snyk-image]: https://snyk.io/test/npm/@fibjs/readdir-recursive/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@fibjs/readdir-recursive
[download-image]: https://img.shields.io/npm/dm/@fibjs/readdir-recursive.svg?style=flat-square
[download-url]: https://npmjs.org/package/@fibjs/readdir-recursive

Read a directory recursively.

## Install

```bash
$ npm i @fibjs/readdir-recursive --save
```

## Usage

```js
var read = require('fs-readdir-recursive')
read(__dirname) === [
  'test/test.js',
  'index.js',
  'LICENSE',
  'package.json',
  'README.md'
]
```

## Questions & Suggestions

Please open an issue [here](https://github.com/fibjs-modules/readdir-recursive/issues).

## License

[MIT](LICENSE)