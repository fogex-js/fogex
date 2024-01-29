import { expect,it } from '@jest/globals';
import customPattern from '../../src/customPattern/customPattern'


it('should', () => {
  expect(customPattern('aA#!', 8, 'aA1!1234')).toBe(true)
  expect(customPattern('a', 6, 'qwerty')).toBe(true)
  expect(customPattern('A', 6, 'QWERTY')).toBe(true)
  expect(customPattern('aA', 6, 'qweRTY')).toBe(true)
  expect(customPattern('aA#', 6, 'aA1234')).toBe(true)
  expect(customPattern('aA!', 6, 'Qwer!.')).toBe(true)
  expect(customPattern('#', 4, '1234')).toBe(true)
  expect(customPattern('!', 4, '!/?.')).toBe(true)
  expect(customPattern('aA#!', 8, 'aa111234')).toBe(false)
  expect(customPattern('aA#!?', 4, 'aA1!')).toBe(true)
  expect(customPattern('aA#!?', 4, 'aA11')).toBe(true)
  expect(customPattern('aA?#!?', 4, 'aA11')).toBe(true)
  expect(customPattern('aA?#!?', 4, 'aa11')).toBe(true)
  expect(customPattern('aA?#!', 5, 'aa11*')).toBe(true)
  expect(customPattern('aA?#!', 5, 'aa11!')).toBe(true)
  expect(customPattern('aA?#!', 5, 'aa1')).toBe(false)
})
