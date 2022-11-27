import creatorPattern from '../../fogex/regex/patternCreator/creatorPattern.js';

it('should', () => {
  expect(creatorPattern('aA#!', 8, 'aA1!1234')).toBe(true);
  expect(creatorPattern('a', 6, 'qwerty')).toBe(true);
  expect(creatorPattern('A', 6, 'QWERTY')).toBe(true);
  expect(creatorPattern('aA', 6, 'qweRTY')).toBe(true);
  expect(creatorPattern('aA#', 6, 'aA1234')).toBe(true);
  expect(creatorPattern('aA!', 6, 'Qwer!.')).toBe(true);
  expect(creatorPattern('#', 4, '1234')).toBe(true);
  expect(creatorPattern('!', 4, '!/?.')).toBe(true);
});
