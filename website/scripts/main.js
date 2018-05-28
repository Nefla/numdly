import numdly from 'numdly'
import imask from 'imask'

document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('input')
  const output = document.getElementById('output')

  var maskOptions = {
    mask: Number, // enable number mask

    // other options are optional with defaults below
    scale: 0, // digits after point, 0 for integers
    signed: true, // disallow negative
    thousandsSeparator: '.', // any single char
    padFractionalZeros: false, // if true, then pads zeros at end to the length of scale
    normalizeZeros: true, // appends or removes zeros at ends
    radix: ',', // fractional delimiter
    mapToRadix: ['.'], // symbols to process as radix
    min: 0
  }
  var mask = new IMask(input, maskOptions)

  input.addEventListener('keyup', onInputChange)
  output.addEventListener('keypress', e => {
    e.preventDefault()
  })

  setOutput(input.value.trim(), output)

  function onInputChange(e) {
    setOutput(e.target.value, output)
  }
})

function setOutput(value, output) {
  if (value === '') {
    output.textContent = ''
    return
  }
  const number = value.replace(/\./g, '')
  output.textContent = numdly(number)
}
