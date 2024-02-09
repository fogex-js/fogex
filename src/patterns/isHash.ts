const pattern = new RegExp(/^#[a-zA-Z0-9]{3,}$/)

const isHash = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isHash
