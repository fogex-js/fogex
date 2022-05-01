import isHour12 from '../fogex/regex/isHour12';

it('should return true for am-pm format', () => {
  expect(isHour12('12:00am')).toBe(true);
  expect(isHour12('01:00pm')).toBe(true);
  expect(isHour12('10:15am')).toBe(true);
});
