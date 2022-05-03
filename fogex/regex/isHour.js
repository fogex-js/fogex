const patternHours = {
  12: /^(0?[1-9]|1[012])(:[0-5]\d){0,2}(am|pm)$/,
  24: /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/,
};

const isHour = (value, hourFormat) => {
  let patternHour = new RegExp(patternHours[hourFormat]);
  if (value == null || patternHour == '/(?:)/') return;

  return patternHour.test(value);
};

export default isHour;
