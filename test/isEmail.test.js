import isEmail from '../fogex/regex/isEmail';

it('should return true for valid email values', () => {
  expect(isEmail('test@test.com')).toBe(true);
});
