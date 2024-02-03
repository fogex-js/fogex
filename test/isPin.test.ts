import isPin from '../src/patterns/isPin'

it('should return true for pin format', () => {
  expect(isPin('1234', 4)).toBe(true)
  expect(isPin('12345', 4)).toBe(false)
  expect(isPin('123', 4)).toBe(false)
  expect(isPin('1234a', 4)).toBe(false)
  expect(isPin('123456', 6)).toBe(true)
  expect(isPin('12345', 6)).toBe(false)
  expect(isPin('1234567', 6)).toBe(false)
  expect(isPin('12345s', 6)).toBe(false)
})
