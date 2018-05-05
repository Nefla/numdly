const test = require('tape')
const api = require('../')

test('match with valid units (bigger than hundreds)', t => {
  t.equal('one thousand, seventeen', api(1017))
  t.equal('one thousand, seventy-one', api(1071))
  t.equal('three thousand, thirty-two', api(3032))
  t.equal('six hundred twenty-five thousand', api(625000))
  t.equal('five hundred forty-seven thousand, eight hundred one', api(547801))

  t.end()
})

test('match with valid large numbers', t => {
  t.equal('five million, three hundred twelve thousand, nine', api(5312009))
  t.equal(
    'three hundred ninety-four billion, eight hundred three million, ' +
      'four hundred twenty-three thousand, ninety-four',
    api(394803423094)
  )

  t.equal(
    'four hundred one trillion, three hundred ninety-four billion, ' +
      'eight hundred three million, four hundred twenty-three thousand, ' +
      'ninety-four',
    api(401394803423094)
  )

  t.end()
})
