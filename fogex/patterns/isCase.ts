const pattern = {
  lower: /^[a-z]+$/,
  upper: /^[A-Z]+$/,
  camel: /^[a-z][a-zA-Z0-9]*$/,
  pascal: /^[A-Z][a-zA-Z0-9]*$/,
};

const isCase = (value: string | null, cases: keyof typeof pattern): boolean | undefined => {
  const patternCase = new RegExp(pattern[cases]);
  if (value === null || patternCase.test('')) return undefined;

  return patternCase.test(value);
};

export default isCase;
