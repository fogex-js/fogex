const pattern = new RegExp(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/)

const isMac = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isMac
