import isIdentityNumber from '../fogex/regex/isIdentityNumber';

it('should return true for identity number format', () => {
  expect(isIdentityNumber('12345678910', 'TR')).toBe(true);
  // expect(isIdentityNumber('22334455666', 'TR')).toBe(true);
  // expect(isIdentityNumber('01234567892', 'TR')).toBe(false);
  // expect(isIdentityNumber('41234567829', 'TR')).toBe(false);
  // expect(isIdentityNumber('002-94-0823', 'US')).toBe(true);
  // expect(isIdentityNumber('605-48-4088', 'US')).toBe(true);
  // expect(isIdentityNumber('676-09-9718', 'US')).toBe(true);
  // expect(isIdentityNumber('759-10-5896', 'US')).toBe(true);
});
