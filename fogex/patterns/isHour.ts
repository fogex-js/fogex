const pattern = {
  12: /^(0?[1-9]|1[012])(:[0-5]\d){0,2}(am|pm)$/,
  24: /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/,
}

const isHour = (value, hourFormat) => {
  let patternCase = new RegExp(pattern[hourFormat])
  if (value === null || patternCase === new RegExp('/(?:)/')) return

  return patternCase.test(value)
}

export default isHour
