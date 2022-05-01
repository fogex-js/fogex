import isIdentityNumber from '../fogex/regex/isIdentityNumber';

it('should return true for identity number format', () => {
  expect(isIdentityNumber('12345678910', 'TR')).toBe(true);
});
