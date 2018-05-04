# numdly

[![][TravisLogo]][Travis]
[![][mit-badge]][mit]

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