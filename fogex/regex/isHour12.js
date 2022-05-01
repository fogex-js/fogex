const patternHour12 = new RegExp(/^(0?[1-9]|1[012])(:[0-5]\d){0,2}(am|pm)$/);

const isHour12 = (value) => {
  if (value == null || patternHour12 == '/(?:)/') return;
  return patternHour12.test(value);
};

export default isHour12;
