const patternPlates = {
  TR: /^(0[1-9]|[1-7][0-9]|8[01])(([A-Z])(\d{4,5})|([A-Z]{2})(\d{3,4})|([A-Z]{3})(\d{2,3}))$/,
  US: /^B[A-Z]{2}-[0-9]{3}$/,
};

const isPlate = (value, countyCode) => {
  let patternPlate = new RegExp(patternPlates[countyCode]);
  if (value == null || patternPlates == '/(?:)/') return;
  return patternPlate.test(value);
};

export default isPlate;
