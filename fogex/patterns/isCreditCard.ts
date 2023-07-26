const pattern = {
  DEFAULT: /^([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/,
  VISA: /^4([0-9]{3})\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/,
  MASTER: /^5([1-5]){1}([0-9]){2}\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/,
}

const isCreditCard = (value, cardType) => {
  let patternCase = new RegExp(pattern[cardType])

  if (value === null) {
    return false
  } else if (patternCase === new RegExp('/(?:)/')) {
    let patternDefaultCreditCard = new RegExp(pattern['DEFAULT'])
    return patternDefaultCreditCard.test(value)
  } else {
    return patternCase.test(value)
  }
}

export default isCreditCard
