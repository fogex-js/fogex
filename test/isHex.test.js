import isHex from '../fogex/regex/isHex';

it('should return true for valid hash values', () => {
  expect(isHex('#addaca')).toBe(true);
  expect(isHex('addaca')).toBe(true);
});
