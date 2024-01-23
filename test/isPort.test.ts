import isPort from '../src/patterns/isPort';

it('should return true for valid port numbers', () => {
  expect(isPort('80')).toBe(true);
  expect(isPort('8080')).toBe(true);
});
