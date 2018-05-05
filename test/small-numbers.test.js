const test = require('tape')
const api = require('../')

test('match with valid ones', t => {
  t.equal('zero', api(0))
  t.equal('one', api(1))
  t.equal('five', api(5))
  t.equal('nine', api(9))

  t.end()
})

test('match with valid tens', t => {
  t.equal('ten', api(10))
  t.equal('thirteen', api(13))
  t.equal('sixteen', api(16))
  t.equal('eighteen', api(18))
  t.end()
})

test('match with valid ten tens', t => {
  t.equal('twenty', api(20))
  t.equal('twenty-one', api(21))
  t.equal('thirty-two', api(32))
  t.equal('fifty', api(50))

  t.end()
})

test('match with valid hundreds', t => {
  t.equal('one hundred', api(100))
  t.equal('one hundred one', api(101))
  t.equal('one hundred eleven', api(111))
  t.equal('one hundred twenty-one', api(121))
  t.equal('two hundred forty-eight', api(248))

  t.end()
})
