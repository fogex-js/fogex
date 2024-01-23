import isMd5 from '../src/patterns/isMd5';

it('should return true for valid MD5 strings', () => {
  expect(isMd5('12345678901234567890123456789012')).toBe(true);
});
