const pattern = {
  12: /^(0?[1-9]|1[012])(:[0-5]\d){0,2}(am|pm)$/i,
  24: /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/,
};

const isHour = (value: string | null, hourFormat: keyof typeof pattern): boolean | undefined => {
  const patternCase = new RegExp(pattern[hourFormat], 'i');
  if (value === null || patternCase.test('')) return undefined;

  return patternCase.test(value);
};

export default isHour;
