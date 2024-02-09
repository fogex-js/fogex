const pattern = new RegExp(/^[-+]?[0-9]*\.?[0-9]+$/)

const isFloat = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isFloat
