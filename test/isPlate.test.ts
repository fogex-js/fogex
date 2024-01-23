import isPlate from '../src/patterns/isPlate';

it('should return true for plate format', () => {
  expect(isPlate('01XX111', 'TR')).toBe(true);
  expect(isPlate('BXX-123', 'US')).toBe(true);
});
