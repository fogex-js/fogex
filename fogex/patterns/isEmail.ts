let pattern = new RegExp(/([a-zA-Z0-9])+\@([a-zA-Z0-9])+\.[a-zA-Z]{2,}/)

const isEmail = (value) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isEmail
