const test = require('tape')
const api = require('../')

test('match with huge numbers', t => {
  t.equal(
    'sixty-five quintillion, four hundred twenty-nine quadrillion, ' +
      'four hundred ninety-one trillion, nine hundred eighty-four billion, ' +
      'four hundred eighty million, nine hundred twelve thousand, ' +
      'three hundred seventy-six',
    api('65429491984480912376')
  )

  t.equal(
    'three novemdecillion, one hundred forty-one octodecillion, ' +
      'five hundred ninety-two septendecillion, six hundred fifty-three ' +
      'sexdecillion, five hundred eighty-nine quindecillion, seven hundred ' +
      'ninety-three quattuordecillion, two hundred thirty-eight tredecillion, ' +
      'four hundred sixty-two duodecillion, six hundred forty-three undecillion, ' +
      'three hundred eighty-three decillion, two hundred seventy-nine nonillion, ' +
      'five hundred two octillion, eight hundred eighty-four septillion, ' +
      'one hundred ninety-seven sextillion, one hundred sixty-nine quintillion, ' +
      'three hundred ninety-nine quadrillion, three hundred seventy-five trillion, ' +
      'one hundred five billion, eight hundred twenty million, nine ' +
      'hundred seventy-four thousand, nine hundred forty-four',
    api('3141592653589793238462643383279502884197169399375105820974944')
  )

  t.end()
})
