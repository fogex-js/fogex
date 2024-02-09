const pattern = new RegExp(/^[a-f0-9]{32}$/)

const isMd5 = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isMd5
