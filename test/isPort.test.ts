import isPort from '../src/patterns/isPort'

it('should return true for valid port numbers', () => {
  expect(isPort('80')).toBe(true)
  expect(isPort('8080')).toBe(true)
  expect(isPort('65535')).toBe(true)
  expect(isPort('65536')).toBe(false)
  expect(isPort('')).toBe(false)
  expect(isPort(' ')).toBe(false)
  expect(isPort()).toBe(false)
  expect(isPort(null)).toBe(false)
  expect(isPort(true)).toBe(false)
  expect(isPort(false)).toBe(false)
  expect(isPort({})).toBe(false)
  expect(isPort([])).toBe(false)
  expect(isPort(1)).toBe(false)
  expect(isPort(0)).toBe(false)
  expect(isPort('1')).toBe(false)
  expect(isPort('0')).toBe(false)
  expect(isPort('1.1')).toBe(false)
  expect(isPort('0.1')).toBe(false)
  expect(isPort('1.1.1')).toBe(false)
})
