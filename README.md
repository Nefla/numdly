# numdly

[![npm version](https://img.shields.io/npm/v/numdly.svg)](https://www.npmjs.com/package/numdly)
[![Build Status](https://travis-ci.org/nefla/numdly.svg?branch=master)](https://travis-ci.org/nefla/numdly)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?longCache=true)](https://raw.githubusercontent.com/nefla/numdly/master/LICENSE)

Converts numbers into words.

## Installation

```bash
npm install numdly
```

## Usage

If your number is smaller than 2^53, you can pass the number directly:

```js
import numdly from 'numdly'
let numberText = numbly(314)
console.log(numberText) // three hundred forteen
```

For bigger numbers, however, use a string:

```js
import numdly from 'numdly'
let numberText = numdly('3141592653589793238')
```

## License

MIT.