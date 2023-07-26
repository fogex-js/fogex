let pattern = new RegExp(/^[a-zA-Z]+$/)

const isString = (value) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isString
