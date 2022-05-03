const patternCases = {
  lower: /^[a-z]+$/,
  upper: /^[A-Z]+$/,
  camel: /^[a-z][a-zA-Z0-9]*$/,
  pascal: /^[A-Z][a-zA-Z0-9]*$/,
};

const isCase = (value, cases) => {
  let patternCase = new RegExp(patternCases[cases]);
  if (value == null || patternCase == '/(?:)/') return;

  return patternCase.test(value);
};

export default isCase;
