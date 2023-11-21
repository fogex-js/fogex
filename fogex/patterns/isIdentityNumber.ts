const pattern = {
  TR: /^[1-9]{1}[0-9]{9}[02468]{1}$/,
  US: /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/,
};

const isIdentityNumber = (value: string | null, countyCode: keyof typeof pattern): boolean | undefined => {
  const patternCase = new RegExp(pattern[countyCode]);
  if (value === null || patternCase.test('')) return undefined;

  return patternCase.test(value);
};

export default isIdentityNumber;
