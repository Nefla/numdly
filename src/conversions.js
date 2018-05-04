const { ones, ten, tens, units } = require('./place-numbers')
const reverse = require('./string-reverse')
const getNth = require('./get-nth')

function convertOnes(number) {
  return getNth(ones, number - 1)
}

function convertTen(number) {
  return getNth(ten, number % 10)
}

function convertTens(number) {
  let result = getNth(tens, Math.floor(number / 10) - 2)
  if (number % 10 > 0) result += `-${getNth(ones, number % 10 - 1)}`
  return result
}

function convertHundred(number) {
  let hundredUnit = Math.floor(number / 100)
  let rest = number % (hundredUnit * 100)
  let result = `${getNth(ones, hundredUnit - 1)} hundred`
  if (rest == 0) return result
  return `${result} ${convertSection(rest)}`
}

function convertSection(number) {
  if (!Number.isInteger(parseInt(number))) throw new Error()
  if (number >= 1 && number <= 9) return convertOnes(number)
  else if (number >= 10 && number <= 19) return convertTen(number)
  else if (number >= 20 && number <= 99) return convertTens(number)
  else if (number >= 100 && number <= 999) return convertHundred(number)
  else return ''
}

function convert(number) {
  if (number == 0) return 'zero'
  if (number < 1000) return convertSection(number)
  let arr = reverse(number.toString())
    .match(/.{1,3}/g)
    .map(n => reverse(n))
    .reverse()

  return arr
    .map((n, i) => {
      if (i < arr.length - 1)
        return `${convertSection(n)} ${getNth(units, arr.length - 2 - i)}`
      else return convertSection(n)
    })
    .filter(n => n)
    .join(', ')
}

module.exports = {
  convert
}
