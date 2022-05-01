import isBoolean from '../fogex/regex/isBoolean.js';

it('should return true for valid boolean values', () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
});
