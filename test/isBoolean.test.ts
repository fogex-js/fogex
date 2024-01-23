import isBoolean from '../src/patterns/isBoolean';

it('should return true for valid boolean values', () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
  expect(isBoolean('false')).toBe(false);
});
