import isPascalCase from '../fogex/regex/isPascalCase';

it('should return true for valid pascalCase strings', () => {
  expect(isPascalCase('FooBar')).toBe(true);
  expect(isPascalCase('FooBarBaz')).toBe(true);
  expect(isPascalCase('FooBarBazQux')).toBe(true);
});
