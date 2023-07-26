const pattern = {
  lower: /^[a-z]+$/,
  upper: /^[A-Z]+$/,
  camel: /^[a-z][a-zA-Z0-9]*$/,
  pascal: /^[A-Z][a-zA-Z0-9]*$/,
}

const isCase = (value, cases) => {
  let patternCase = new RegExp(pattern[cases])
  if (value === null || patternCase === new RegExp('/(?:)/')) return

  return patternCase.test(value)
}

export default isCase
