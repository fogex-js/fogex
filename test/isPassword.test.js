import isPassword from '../fogex/regex/isPassword';

it('should return true for valid password strings', () => {
  expect(isPassword('foobarTest!123')).toBe(true);
});
