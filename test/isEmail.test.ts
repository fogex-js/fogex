import isEmail from '../src/patterns/isEmail';

it('should return true for valid email values', () => {
  expect(isEmail('test@test.com')).toBe(true);
});
