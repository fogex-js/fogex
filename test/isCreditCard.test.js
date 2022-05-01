import isCreditCard from '../fogex/regex/isCreditCard';

it('should return true for valid credit card values', () => {
  expect(isCreditCard('1111222233334444')).toBe(true);
  expect(isCreditCard('1111 2222 3333 4444')).toBe(true);
  expect(isCreditCard('4140554247281917', 'VISA')).toBe(true);
  expect(isCreditCard('4140 5542 4728 1917', 'VISA')).toBe(true);
  expect(isCreditCard('4002293472493304', 'VISA')).toBe(true);
  expect(isCreditCard('4002 2934 7249 3304', 'VISA')).toBe(true);
  expect(isCreditCard('5172286488262771', 'MASTER')).toBe(true);
  expect(isCreditCard('5172 2864 8826 2771', 'MASTER')).toBe(true);
  expect(isCreditCard('5498502904838748', 'MASTER')).toBe(true);
  expect(isCreditCard('5498 5029 0483 8748', 'MASTER')).toBe(true);
});
