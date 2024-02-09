const pattern = {
  DEFAULT: /^([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/,
  VISA: /^4([0-9]{3})\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/,
  MASTER: /^5([1-5]){1}([0-9]){2}\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/,
}

const isCreditCard = (
  value?: string | null,
  cardType?: keyof typeof pattern
): boolean => {
  const patternCase = new RegExp(pattern[cardType || 'DEFAULT'])

  return patternCase.test(value || '')
}

export default isCreditCard
