const pattern = new RegExp(/^[0-9]{15}$/)

const isImei = (value) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isImei
