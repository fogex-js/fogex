const pattern = new RegExp(/^(true|false)$/)

const isBoolean = (value:boolean) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value as unknown as string)
}

export default isBoolean
