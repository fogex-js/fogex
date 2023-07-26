const pattern = new RegExp(/^#[a-zA-Z0-9]{3,}$/)

const isHash = (value) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isHash
