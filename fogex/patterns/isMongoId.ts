const pattern = new RegExp('^[0-9a-fA-F]{24}$')

const isMongoId = (value:string) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isMongoId
