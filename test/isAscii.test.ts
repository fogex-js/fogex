import isAscii from '../src/patterns/isAscii'

it('should return true for valid ascii strings', () => {
  expect(isAscii('abc')).toBe(true)
  expect(isAscii('abc123')).toBe(true)
  expect(isAscii('abc123!@#')).toBe(true)
  expect(isAscii(1)).toBe(true)
  expect(isAscii('√∑→←Ω♫😊🌍букваحرف')).toBe(false)
  expect(isAscii('a√')).toBe(false)
  expect(isAscii('a∑')).toBe(false)
  expect(isAscii('a→')).toBe(false)
  expect(isAscii('a←')).toBe(false)
  expect(isAscii('aΩ')).toBe(false)
  expect(isAscii('a♫')).toBe(false)
  expect(isAscii('a😊')).toBe(false)
  expect(isAscii('a🌍')).toBe(false)
  expect(isAscii('aбуква')).toBe(false)
  expect(isAscii('aحرف')).toBe(false)
})
