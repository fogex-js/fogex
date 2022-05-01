import isImageUrl from '../fogex/regex/isImageUrl';

it('should return true for image url format', () => {
  expect(isImageUrl('http://website.com/directory/image.png')).toBe(true);
  expect(isImageUrl('http://website.com/directory/image.jpg')).toBe(true);
  expect(isImageUrl('http://website.com/directory/image.jpeg')).toBe(true);
  expect(isImageUrl('http://website.com/directory/image.gif')).toBe(true);
  expect(isImageUrl('http://website.com/directory/image.doc')).toBe(false);
  expect(isImageUrl('http://website.com/directory/image.php')).toBe(false);
  expect(isImageUrl('http://website.com/directory/image.jpg', 'jpg')).toBe(true);
  expect(isImageUrl('http://website.com/directory/image.jpeg', 'jpeg')).toBe(true);
  expect(isImageUrl('http://website.com/directory/image.png', 'png')).toBe(true);
  expect(isImageUrl('http://website.com/directory/image.gif', 'gif')).toBe(true);
  expect(isImageUrl('http://website.com/directory/image.txt', 'txt')).toBe(false);
  expect(isImageUrl('http://website.com/directory/image.php', 'php')).toBe(false);
  expect(isImageUrl('http://website.com/directory/image.png', 'jpg')).toBe(false);
  expect(isImageUrl('http://website.com/directory/image.gif', 'png')).toBe(false);
});
