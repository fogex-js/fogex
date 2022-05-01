import isPin from '../fogex/regex/isPin';

it('should return true for pin format', () => {
  expect(isPin('1234', 4)).toBe(true);
  expect(isPin('123456', 6)).toBe(true);
});
