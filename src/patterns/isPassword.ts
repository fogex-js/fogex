let pattern = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
)

const isPassword = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isPassword
