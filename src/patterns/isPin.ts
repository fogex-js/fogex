const pattern = {
  4: /^[0-9]{4}$/,
  6: /^[0-9]{6}$/,
}

const isPin = (
  value?: any,
  pinLength?: keyof typeof pattern
): boolean | undefined => {
  if (!value) return false

  if (pinLength && pattern[pinLength]) {
    return pattern[pinLength].test(value)
  }

  return pattern[4].test(value) || pattern[6].test(value)
}

export default isPin
