const pattern = {
  TR: /^[0-9]{5}$/,
  US: /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/,
}

const isPostalCode = (
  value?: any,
  countyCode?: keyof typeof pattern
): boolean | undefined => {
  if (!value) return false

  if (countyCode && pattern[countyCode]) {
    return pattern[countyCode].test(value)
  }

  return pattern.TR.test(value) || pattern.US.test(value)
}

export default isPostalCode
