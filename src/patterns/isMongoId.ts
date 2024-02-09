const pattern = new RegExp('^[0-9a-fA-F]{24}$')

const isMongoId = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isMongoId
