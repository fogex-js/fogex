const patternColorCodes = {
  rgb: /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  hsl: /^hsl\(\s*(-?\d+|-?\d*\.\d+)\s*,\s*(-?\d+|-?\d*\.\d+)%\s*,\s*(-?\d+|-?\d*\.\d+)%\s*\)$/,
};

const isColorCode = (value, colorCode) => {
  let patternColorCode = new RegExp(patternColorCodes[colorCode]);
  if (value == null || patternColorCode == '/(?:)/') return;

  return patternColorCode.test(value);
};

export default isColorCode;
