import isPhoneNumber from '../fogex/regex/isPhoneNumber';

it('should return true for phone format', () => {
  expect(isPhoneNumber('+905357894520', 'TR')).toBe(true);
  expect(isPhoneNumber('905357894520', 'TR')).toBe(true);
  expect(isPhoneNumber('05357894520', 'TR')).toBe(true);
  expect(isPhoneNumber('5357894520', 'TR')).toBe(true);
  expect(isPhoneNumber('+1 800 5551212', 'US')).toBe(true);
  expect(isPhoneNumber('1 800 5551212', 'US')).toBe(true);
});
