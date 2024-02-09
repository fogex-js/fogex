const pattern = {
  12: /^(0?[1-9]|1[012])(:[0-5]\d){0,2}(am|pm)$/i,
  24: /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/,
}

const isHour = (
  value?: any,
  hourFormat?: keyof typeof pattern
): boolean | undefined => {
  if (!value) return false

  if (hourFormat && pattern[hourFormat]) {
    return pattern[hourFormat].test(value)
  }

  return pattern[12].test(value) || pattern[24].test(value)
}

export default isHour
