import isISBN from '../fogex/regex/isISBN';

it('should return true for valid isbn strings', () => {
  expect(isISBN('978-1-56619-909-4')).toBe(true);
  expect(isISBN('1-56619-909-3')).toBe(true);
});
