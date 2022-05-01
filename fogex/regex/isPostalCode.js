const patternPostalCodes = {
  TR: /^[0-9]{5}$/,
  US: /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/,
};

const isPostalCode = (value, countyCode) => {
  let patternPostalCode = new RegExp(patternPostalCodes[countyCode]);
  if (value == null || patternPostalCode == '/(?:)/') return;
  return patternPostalCode.test(value);
};

export default isPostalCode;
