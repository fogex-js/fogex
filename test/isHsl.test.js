import isHsl from '../fogex/regex/isHsl';

it('should return true for valid hsl values', () => {
  expect(isHsl('hsl(0, 100%, 50%)')).toBe(true);
});
