import isCase from '../fogex/regex/isCase';

it('should return true for valid case values', () => {
  expect(isCase('abc', 'lower')).toBe(true);
  expect(isCase('ABC', 'upper')).toBe(true);
  expect(isCase('testTest', 'camel')).toBe(true);
  expect(isCase('FooBar', 'pascal')).toBe(true);
  expect(isCase('FooBarBaz', 'pascal')).toBe(true);
  expect(isCase('FooBarBazQux', 'pascal')).toBe(true);
});
