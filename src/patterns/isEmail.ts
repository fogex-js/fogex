let pattern = new RegExp(/([a-zA-Z0-9])+\@([a-zA-Z0-9])+\.[a-zA-Z]{2,}/)

const isEmail = (value?: string): any => {
  if (!value) return false

  return pattern.test(value)
}

export default isEmail
