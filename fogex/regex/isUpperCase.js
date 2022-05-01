const patternUpperCase = new RegExp(/^[A-Z]+$/);

const isUpperCase = (value) => {
  if (value == null || patternUpperCase == '/(?:)/') return;
  return patternUpperCase.test(value);
};

export default isUpperCase;
