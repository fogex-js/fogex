const pattern = new RegExp(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/)

const isMac = (value:string) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isMac
