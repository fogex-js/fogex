const pattern = {
  TR: /^(\+?90|0)?5\d{9}$/,
  US: /^(\+?1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/,
}

const isPhoneNumber = (
  value?: any,
  countyCode?: keyof typeof pattern
): boolean | undefined => {
  if (!value) return false

  if (countyCode && pattern[countyCode]) {
    return pattern[countyCode].test(value)
  }

  return pattern.TR.test(value) || pattern.US.test(value)
}

export default isPhoneNumber
