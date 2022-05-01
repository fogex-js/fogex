const patternCreditCards = {
  DEFAULT: /^([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/,
  VISA: /^4([0-9]{3})\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/,
  MASTER: /^5([1-5]){1}([0-9]){2}\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/,
};

const isCreditCard = (value, cardType) => {
  let patternCreditCard = new RegExp(patternCreditCards[cardType]);

  if (value == null) {
    return false;
  } else if (patternCreditCard == '/(?:)/') {
    let patternDefaultCreditCard = new RegExp(patternCreditCards['DEFAULT']);
    return patternDefaultCreditCard.test(value);
  } else {
    return patternCreditCard.test(value);
  }
};

export default isCreditCard;
