const pattern = new RegExp(/^(true|false|0|1)$/)

const isBoolean = (value?: any) => {
  if (!value) return false

  return pattern.test(value.toString())
}

export default isBoolean
