import isCamelCase from '../fogex/regex/isCamelCase';

it('should return true for valid camelCase strings', () => {
  expect(isCamelCase('testTest')).toBe(true);
});
