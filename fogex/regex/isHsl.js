const patternHsl = new RegExp(/^hsl\(\s*(-?\d+|-?\d*\.\d+)\s*,\s*(-?\d+|-?\d*\.\d+)%\s*,\s*(-?\d+|-?\d*\.\d+)%\s*\)$/);

const isHsl = (color) => {
  if (color == null || patternHsl == '/(?:)/') return;
  return patternHsl.test(color);
};

export default isHsl;
