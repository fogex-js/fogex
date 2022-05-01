import isWhiteSpace from '../fogex/regex/isWhiteSpace';

it('should return true for valid white space strings', () => {
  expect(isWhiteSpace(' ')).toBe(true);
  expect(isWhiteSpace('test ')).toBe(true);
  expect(isWhiteSpace('test test')).toBe(true);
  expect(isWhiteSpace('\t')).toBe(true);
  expect(isWhiteSpace('\n')).toBe(true);
  expect(isWhiteSpace('\r')).toBe(true);
  expect(isWhiteSpace('\f')).toBe(true);
});
