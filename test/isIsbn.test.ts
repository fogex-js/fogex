<<<<<<< HEAD
import isISBN from '../src/patterns/isIsbn';
=======
import isISBN from '../fogex/patterns/isIsbn';
>>>>>>> 6177931 (Add index.d.ts and fix jest for typescript)

it('should return true for valid isbn strings', () => {
  expect(isISBN('978-1-56619-909-4')).toBe(true);
  expect(isISBN('1-56619-909-3')).toBe(true);
});
