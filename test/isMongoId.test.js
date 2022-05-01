import isMongoId from '../fogex/regex/isMongoId';

it('should return true for valid mongoId values', () => {
  expect(isMongoId('507f1f77bcf86cd799439011')).toBe(true);
});
