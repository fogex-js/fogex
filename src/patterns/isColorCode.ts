const pattern = {
  rgb: /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  hsl: /^hsl\(\s*(-?\d+|-?\d*\.\d+)\s*,\s*(-?\d+|-?\d*\.\d+)%\s*,\s*(-?\d+|-?\d*\.\d+)%\s*\)$/,
}

const isColorCode = (
  value?: any,
  colorCode?: keyof typeof pattern
): boolean | undefined => {
  if (!value) return false

  return pattern[colorCode ?? 'hex'].test(value)
}

export default isColorCode
