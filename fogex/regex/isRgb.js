const patternRgb = new RegExp(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);

const isRgb = (value) => {
  if (value == null || patternRgb == '/(?:)/') return;
  return patternRgb.test(value);
};

export default isRgb;
