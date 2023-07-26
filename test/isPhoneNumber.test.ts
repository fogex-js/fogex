import isPhoneNumber from '../fogex/patterns/isPhoneNumber';

it('should return true for phone format', () => {
  expect(isPhoneNumber('+905555555555', 'TR')).toBe(true);
  expect(isPhoneNumber('905555555555', 'TR')).toBe(true);
  expect(isPhoneNumber('5555555555', 'TR')).toBe(true);
  expect(isPhoneNumber('+1 123 4567890', 'US')).toBe(true);
});
