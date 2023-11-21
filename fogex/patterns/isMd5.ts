const pattern = new RegExp(/^[a-f0-9]{32}$/)

const isMd5 = (value:string) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isMd5
