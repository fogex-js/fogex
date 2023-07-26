const pattern = new RegExp(
  /^(january|february|march|april|may|june|july|august|september|october|november|december)$/i
)

const isMonth = (value) => {
  if (value === null || pattern === new RegExp('/(?:)/')) return
  return pattern.test(value)
}

export default isMonth
