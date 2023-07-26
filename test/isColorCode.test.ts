import isColorCode from '../fogex/patterns/isColorCode';

it('should return true for valid color code values', () => {
  expect(isColorCode('rgb(255, 0, 0)', 'rgb')).toBe(true);
  expect(isColorCode('rgb(0, 255, 0)', 'rgb')).toBe(true);
  expect(isColorCode('rgb(0, 0, 255)', 'rgb')).toBe(true);
  expect(isColorCode('rgb(255, 255, 255)', 'rgb')).toBe(true);
  expect(isColorCode('rgb(0, 0, 0)', 'rgb')).toBe(true);
  expect(isColorCode('#addaca', 'hex')).toBe(true);
  expect(isColorCode('addaca', 'hex')).toBe(true);
  expect(isColorCode('hsl(0, 100%, 50%)', 'hsl')).toBe(true);
  expect(isColorCode('', 'rgb')).toBe(false);
});
