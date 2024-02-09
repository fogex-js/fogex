const pattern = new RegExp(/^[\x00-\x7F]*$/)

const isAscii = (value?: any) => {
  if (!value) return false

  return pattern.test(value.toString())
}

export default isAscii
