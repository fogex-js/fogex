const patternLowerCase = new RegExp(/^[a-z]+$/);

const isLowerCase = (value) => {
  if (value == null || patternLowerCase == '/(?:)/') return;
  return patternLowerCase.test(value);
};

export default isLowerCase;
