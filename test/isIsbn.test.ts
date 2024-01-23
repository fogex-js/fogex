import isISBN from '../src/patterns/isIsbn';

it('should return true for valid isbn strings', () => {
  expect(isISBN('978-1-56619-909-4')).toBe(true);
  expect(isISBN('1-56619-909-3')).toBe(true);
});
