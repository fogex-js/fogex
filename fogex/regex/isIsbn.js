const patternIsbn = new RegExp(
  /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/
);

const isIsbn = (value) => {
  if (value == null || patternIsbn == '/(?:)/') return;
  return patternIsbn.test(value);
};

export default isIsbn;
