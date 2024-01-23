const pattern = {
  4: /^[0-9]{4}$/,
  6: /^[0-9]{6}$/,
};

const isPin = (value: string | null, pinLength: keyof typeof pattern): boolean | undefined => {
  const patternCase = new RegExp(pattern[pinLength]);
  if (value === null || patternCase.test('')) return undefined;

  return patternCase.test(value);
};

export default isPin;
