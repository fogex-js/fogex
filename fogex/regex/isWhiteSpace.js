const patternWhiteSpace = new RegExp(/^\s*/);

const isWhiteSpace = (value) => {
  if (value == null || patternWhiteSpace == '/(?:)/') return;
  return patternWhiteSpace.test(value);
};

export default isWhiteSpace;
