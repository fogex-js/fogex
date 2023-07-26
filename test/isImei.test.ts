import isImei from '../fogex/patterns/isImei';

it('should return true for valid IMEI strings', () => {
  expect(isImei('123456789012345')).toBe(true);
});
