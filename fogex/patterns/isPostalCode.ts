const pattern = {
  TR: /^[0-9]{5}$/,
  US: /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/,
};

const isPostalCode = (value: string | null, countyCode: keyof typeof pattern): boolean | undefined => {
  const patternCase = new RegExp(pattern[countyCode]);
  if (value === null || patternCase.test('')) return undefined;

  return patternCase.test(value);
};

export default isPostalCode;
