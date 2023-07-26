const pattern = new RegExp(/^[0-9]+$/)

const isInteger = (value) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isInteger
