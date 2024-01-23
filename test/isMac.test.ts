import isMac from '../src/patterns/isMac';

it('should return true for valid MAC strings', () => {
  expect(isMac('00-00-00-00-00-00')).toBe(true);
});
