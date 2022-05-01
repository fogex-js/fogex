import isHour24 from '../fogex/regex/isHour24';

it('should return true for valid hour values', () => {
  expect(isHour24('12:00')).toBe(true);
  expect(isHour24('01:00')).toBe(true);
  expect(isHour24('10:15')).toBe(true);
});
