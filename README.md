# numdly

[![Build Status](https://travis-ci.org/Nefla/numdly.svg?branch=master)](https://travis-ci.org/Nefla/numdly)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?longCache=true)](https://raw.githubusercontent.com/Nefla/numdly/master/LICENSE)

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