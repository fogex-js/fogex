import isHash from '../fogex/regex/isHash';

it('should return true for valid hash values', () => {
  expect(isHash('#abc')).toBe(true);
});
