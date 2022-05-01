const patternInteger = new RegExp(/^[0-9]+$/);

const isInteger = (value) => {
  if (value == null || patternInteger == '/(?:)/') return;
  return patternInteger.test(value);
};

export default isInteger;
