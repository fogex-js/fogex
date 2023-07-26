const pattern = new RegExp(/^(true|false)$/)

const isBoolean = (value) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isBoolean
