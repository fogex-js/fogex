const pattern = new RegExp(/^[-+]?[0-9]*\.?[0-9]+$/)

const isFloat = (value:string) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isFloat
