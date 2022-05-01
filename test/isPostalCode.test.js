import isPhoneNumber from '../fogex/regex/isPostalCode';

it('should return true for postal code format', () => {
  expect(isPhoneNumber('12345', 'TR')).toBe(true);
  expect(isPhoneNumber('12345', 'US')).toBe(true);
  expect(isPhoneNumber('12345-1234', 'US')).toBe(true);
  expect(isPhoneNumber('G3H 6A3', 'US')).toBe(true);
});
