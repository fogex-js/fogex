let patternCamelCase = new RegExp(/^[a-z][a-zA-Z0-9]*$/);

const isCamelCase = (value) => {
  if (value == null || patternCamelCase == '/(?:)/') return;
  return patternCamelCase.test(value);
};

export default isCamelCase;
