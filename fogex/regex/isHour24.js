let patternHour24 = new RegExp(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/);

const isHour24 = (value) => {
  if (value == null || patternHour24 == '/(?:)/') return;
  return patternHour24.test(value);
};

export default isHour24;
