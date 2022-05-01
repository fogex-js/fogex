import isAscii from '../fogex/regex/isAscii.js';

it('should return true for valid ascii strings', () => {
  expect(isAscii('abc')).toBe(true);
  expect(isAscii('abc123')).toBe(true);
  expect(isAscii('abc123!@#')).toBe(true);
});
