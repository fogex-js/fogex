import isBoolean from '../fogex/patterns/isBoolean';

it('should return true for valid boolean values', () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
});
