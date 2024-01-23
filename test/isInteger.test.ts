import isInteger from '../src/patterns/isInteger';

it('should return true for valid integer values', () => {
  expect(isInteger(0)).toBe(true);
  expect(isInteger(1)).toBe(true);
  // expect(isInteger(-1)).toBe(true);
});
