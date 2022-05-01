import isString from '../fogex/regex/isString';

it('should return true for valid string values', () => {
  expect(isString('abc')).toBe(true);
  // expect(isString('abc123')).toBe(true);
  // expect(isString('abc123!@#')).toBe(true);
});
