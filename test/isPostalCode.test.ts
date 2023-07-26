import isPostalCode from '../fogex/patterns/isPostalCode';

it('should return true for postal code format', () => {
  expect(isPostalCode('12345', 'TR')).toBe(true);
  expect(isPostalCode('12345', 'US')).toBe(true);
  expect(isPostalCode('12345-1234', 'US')).toBe(true);
  expect(isPostalCode('G3H 6A3', 'US')).toBe(true);
});
