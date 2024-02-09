let pattern = new RegExp(/^[a-zA-Z]+$/)

const isString = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isString
