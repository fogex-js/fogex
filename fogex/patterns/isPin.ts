const pattern = {
  4: /^[0-9]{4}$/,
  6: /^[0-9]{6}$/,
}

const isPin = (value, pinLength) => {
  let patternCase = new RegExp(pattern[pinLength])
  if (value === null || patternCase === new RegExp('/(?:)/')) return
  return patternCase.test(value)
}

export default isPin
