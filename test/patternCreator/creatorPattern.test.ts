import { expect,it} from '@jest/globals';
import {creatorPattern} from '../../fogex/patterns/patternCreator/creatorPattern.ts'


it('should', () => {
  expect(creatorPattern('aA#!', 8, 'aA1!1234')).toBe(true)
  expect(creatorPattern('a', 6, 'qwerty')).toBe(true)
  expect(creatorPattern('A', 6, 'QWERTY')).toBe(true)
  expect(creatorPattern('aA', 6, 'qweRTY')).toBe(true)
  expect(creatorPattern('aA#', 6, 'aA1234')).toBe(true)
  expect(creatorPattern('aA!', 6, 'Qwer!.')).toBe(true)
  expect(creatorPattern('#', 4, '1234')).toBe(true)
  expect(creatorPattern('!', 4, '!/?.')).toBe(true)
  expect(creatorPattern('aA#!', 8, 'aa111234')).toBe(false)
  expect(creatorPattern('aA#!?', 4, 'aA1!')).toBe(true)
  expect(creatorPattern('aA#!?', 4, 'aA11')).toBe(true)
  expect(creatorPattern('aA?#!?', 4, 'aA11')).toBe(true)
  expect(creatorPattern('aA?#!?', 4, 'aa11')).toBe(true)
  expect(creatorPattern('aA?#!', 5, 'aa11*')).toBe(true)
  expect(creatorPattern('aA?#!', 5, 'aa11!')).toBe(true)
  expect(creatorPattern('aA?#!', 5, 'aa1')).toBe(false)
})
