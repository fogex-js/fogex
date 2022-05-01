const patternBoolean = new RegExp(/^(true|false)$/);

const isBoolean = (value) => {
  if (value == null || patternBoolean == '/(?:)/') return;
  return patternBoolean.test(value);
};

export default isBoolean;
