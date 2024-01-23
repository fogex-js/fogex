import isIdentityNumber from '../src/patterns/isIdentityNumber';

it('should return true for identity number format', () => {
  expect(isIdentityNumber('11111111110', 'TR')).toBe(true);
  expect(isIdentityNumber('22222222222', 'TR')).toBe(true);
  expect(isIdentityNumber('011111111111', 'TR')).toBe(false);
  expect(isIdentityNumber('12222222221', 'TR')).toBe(false);
  expect(isIdentityNumber('001-01-0011', 'US')).toBe(true);
});
