import isPhoneNumber from '../src/patterns/isPhoneNumber';

it('should return true for phone format', () => {
  expect(isPhoneNumber('+905555555555', 'TR')).toBe(true);
  expect(isPhoneNumber('905555555555', 'TR')).toBe(true);
  expect(isPhoneNumber('5555555555', 'TR')).toBe(true);
  expect(isPhoneNumber('+1 123 4567890', 'US')).toBe(true);
  expect(isPhoneNumber('+11234567890', 'US')).toBe(true);
  expect(isPhoneNumber('1234567890', 'US')).toBe(true);
});
