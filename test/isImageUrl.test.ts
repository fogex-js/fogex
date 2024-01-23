import isImageUrl from '../src/patterns/isImageUrl'

it('should return true for image url format', () => {
  expect(isImageUrl('http://website.com/directory/image.jpg', 'jpg')).toBe(true)
  expect(isImageUrl('http://website.com/directory/image.jpeg', 'jpeg')).toBe(
    true
  )
  expect(isImageUrl('http://website.com/directory/image.png', 'png')).toBe(true)
  expect(isImageUrl('http://website.com/directory/image.gif', 'gif')).toBe(true)
  expect(isImageUrl('http://website.com/directory/image.png', 'jpg')).toBe(
    false
  )
  expect(isImageUrl('http://website.com/directory/image.gif', 'png')).toBe(
    false
  )
})
