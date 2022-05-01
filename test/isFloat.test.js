import isFloat from '../fogex/regex/isFloat';

it('should return true for valid float values', () => {
  expect(isFloat('1.0')).toBe(true);
  expect(isFloat('1.1')).toBe(true);
  expect(isFloat('1.12')).toBe(true);
  expect(isFloat('1.123')).toBe(true);
  expect(isFloat('1.1234')).toBe(true);
  expect(isFloat('1.12345')).toBe(true);
});
