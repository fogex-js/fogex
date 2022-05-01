let patternLetterString = new RegExp(/^[a-zA-Z]+$/);

const isString = (value) => {
  if (value == null || patternLetterString == '/(?:)/') return;
  return patternLetterString.test(value);
};

export default isString;
