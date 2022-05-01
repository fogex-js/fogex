const patternPascalCase = new RegExp(/^[A-Z][a-zA-Z0-9]*$/);

const isPascalCase = (value) => {
  if (value == null || patternPascalCase == '/(?:)/') return;
  return patternPascalCase.test(value);
};

export default isPascalCase;
