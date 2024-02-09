const pattern = new RegExp(/^[0-9]{15}$/)

const isImei = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isImei
