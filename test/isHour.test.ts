import isHour from '../src/patterns/isHour';

it('should return true for valid hour values', () => {
  expect(isHour('12:00am', 12)).toBe(true);
  expect(isHour('01:00pm', 12)).toBe(true);
  expect(isHour('10:15am', 12)).toBe(true);
  expect(isHour('12:00', 24)).toBe(true);
  expect(isHour('01:00', 24)).toBe(true);
  expect(isHour('10:15', 24)).toBe(true);
});
