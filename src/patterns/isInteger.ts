const pattern = new RegExp(/^[0-9]+$/)

const isInteger = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isInteger
