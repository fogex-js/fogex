const pattern = new RegExp(/^[0-9]+$/)

const isInteger = (value:number) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value.toString())
}

export default isInteger
