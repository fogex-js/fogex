const patternImei = new RegExp(/^[0-9]{15}$/);

const isImei = (value) => {
  if (value == null || patternImei == '/(?:)/') return;
  return patternImei.test(value);
};

export default isImei;
