import isIp from '../src/patterns/isIp';

it('should return true for valid IP strings', () => {
  expect(isIp('192.168.1.1')).toBe(true);
});
