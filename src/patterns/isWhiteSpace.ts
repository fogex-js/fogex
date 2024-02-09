const pattern = new RegExp(/^\s*/)

const isWhiteSpace = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isWhiteSpace
