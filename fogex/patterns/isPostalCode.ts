const pattern = {
  TR: /^[0-9]{5}$/,
  US: /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/,
}

const isPostalCode = (value, countyCode) => {
  let patternCase = new RegExp(pattern[countyCode])
  if (value === null || patternCase === new RegExp('/(?:)/')) return
  return patternCase.test(value)
}

export default isPostalCode
