const pattern = {
  TR: /^(\+?90|0)?5\d{9}$/,
  US: /^(\+?1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/,
}

const isPhoneNumber = (value, countyCode) => {
  let patternCase = new RegExp(pattern[countyCode])
  if (value === null || patternCase === new RegExp('/(?:)/')) return
  return patternCase.test(value)
}

export default isPhoneNumber
