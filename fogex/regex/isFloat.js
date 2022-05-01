const patternFloat = new RegExp(/^[-+]?[0-9]*\.?[0-9]+$/);

const isFloat = (value) => {
  if (value == null || patternFloat == '/(?:)/') return;
  return patternFloat.test(value);
};

export default isFloat;
