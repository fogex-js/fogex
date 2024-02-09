const pattern = {
  TR: /^[1-9]{1}[0-9]{9}[02468]{1}$/,
  US: /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/,
}

const isIdentityNumber = (
  value?: any,
  countyCode?: keyof typeof pattern
): boolean | undefined => {
  if (!value) return false

  if (countyCode && pattern[countyCode]) {
    return pattern[countyCode].test(value)
  }

  return pattern.TR.test(value) || pattern.US.test(value)
}

export default isIdentityNumber
