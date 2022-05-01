import isRgb from '../fogex/regex/isRgb';

it('should return true for valid rgb values', () => {
  expect(isRgb('rgb(255, 0, 0)')).toBe(true);
  expect(isRgb('rgb(0, 255, 0)')).toBe(true);
  expect(isRgb('rgb(0, 0, 255)')).toBe(true);
  expect(isRgb('rgb(255, 255, 255)')).toBe(true);
  expect(isRgb('rgb(0, 0, 0)')).toBe(true);
});
