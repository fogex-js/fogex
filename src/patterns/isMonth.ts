const pattern = new RegExp(
  /^(january|february|march|april|may|june|july|august|september|october|november|december)$/i
)

const isMonth = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isMonth
