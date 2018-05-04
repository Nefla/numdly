const test = require('tape')
const api = require('../src/main')

test('match invalid inputs', t => {
  const error = t.throws(() => {
    api('ars')
  }, Error)

  t.end()
})
