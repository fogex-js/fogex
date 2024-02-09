import isEmail from '../src/patterns/isEmail'

it('should return true for valid email values', () => {
  expect(isEmail('test@test.com')).toBe(true)
  expect(isEmail('')).toBe(false)
  expect(isEmail('xxxx@xxxx')).toBe(false)
  expect(isEmail('xxxx@xxxx')).toBe(false)
  expect(isEmail('xxxx@xxxx.')).toBe(false)
  expect(isEmail('xxxx@xxxx.x')).toBe(false)
})
