import isMonth from '../fogex/regex/isMonth';

it('should return true for valid month values', () => {
  expect(isMonth('january')).toBe(true);
  expect(isMonth('february')).toBe(true);
  expect(isMonth('march')).toBe(true);
  expect(isMonth('april')).toBe(true);
  expect(isMonth('may')).toBe(true);
  expect(isMonth('june')).toBe(true);
  expect(isMonth('july')).toBe(true);
  expect(isMonth('august')).toBe(true);
  expect(isMonth('september')).toBe(true);
  expect(isMonth('october')).toBe(true);
  expect(isMonth('november')).toBe(true);
  expect(isMonth('december')).toBe(true);
});
