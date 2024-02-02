import { expect, it } from '@jest/globals'
import CreatorPattern from '../../src/creatorPattern/CreatorPattern'

it('should return true for minLength 3', () => {
  const creatorPattern = new CreatorPattern({
    minLength: 3,
  })
  expect(creatorPattern.validate('abc')).toBe(true)
})

it('should return false for minLength 3', () => {
  const creatorPattern = new CreatorPattern({
    minLength: 3,
  })
  expect(creatorPattern.validate('ab')).toBe(false)
})

it('should return true for maxLength 3', () => {
  const creatorPattern = new CreatorPattern({
    maxLength: 3,
  })
  expect(creatorPattern.validate('abc')).toBe(true)
})

it('should return false for maxLength 3', () => {
  const creatorPattern = new CreatorPattern({
    maxLength: 3,
  })
  expect(creatorPattern.validate('abcd')).toBe(false)
})

it('should return true for minLength 3 and maxLength 5', () => {
  const creatorPattern = new CreatorPattern({
    minLength: 3,
    maxLength: 5,
  })
  expect(creatorPattern.validate('abc')).toBe(true)
})

it('should return false for minLength 3 and maxLength 5', () => {
  const creatorPattern = new CreatorPattern({
    minLength: 3,
    maxLength: 5,
  })
  expect(creatorPattern.validate('ab')).toBe(false)
})

it('should return false for minLength 3 and maxLength 5', () => {
  const creatorPattern = new CreatorPattern({
    minLength: 3,
    maxLength: 5,
  })
  expect(creatorPattern.validate('abcdef')).toBe(false)
})

it('should return true for lowerCase', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
  })
  expect(creatorPattern.validate('abc')).toBe(true)
})

it('should return false for lowerCase', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
  })
  expect(creatorPattern.validate('ABC')).toBe(false)
})

it('should return true for upperCase', () => {
  const creatorPattern = new CreatorPattern({
    upperCase: true,
  })
  expect(creatorPattern.validate('ABC')).toBe(true)
})

it('should return false for upperCase', () => {
  const creatorPattern = new CreatorPattern({
    upperCase: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})

it('should return true for number', () => {
  const creatorPattern = new CreatorPattern({
    number: true,
  })
  expect(creatorPattern.validate('123')).toBe(true)
})

it('should return false for number', () => {
  const creatorPattern = new CreatorPattern({
    number: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})

it('should return true for specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    specialCharacter: true,
  })
  expect(creatorPattern.validate('!@#')).toBe(true)
})

it('should return false for specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    specialCharacter: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase and upperCase', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    upperCase: true,
  })
  expect(creatorPattern.validate('aBc')).toBe(true)
})

it('should return false for lowerCase and upperCase', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    upperCase: true,
  })
  expect(creatorPattern.validate('123')).toBe(false)
})

it('should return true for lowerCase and number', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    number: true,
  })
  expect(creatorPattern.validate('a1b')).toBe(true)
})

it('should return false for lowerCase and number', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    number: true,
  })
  expect(creatorPattern.validate('ABC')).toBe(false)
})

it('should return true for lowerCase and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('a!b')).toBe(true)
})

it('should return false for lowerCase and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('ABC')).toBe(false)
})

it('should return true for upperCase and number', () => {
  const creatorPattern = new CreatorPattern({
    upperCase: true,
    number: true,
  })
  expect(creatorPattern.validate('A1B')).toBe(true)
})

it('should return false for upperCase and number', () => {
  const creatorPattern = new CreatorPattern({
    upperCase: true,
    number: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})

it('should return true for upperCase and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    upperCase: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('A!B')).toBe(true)
})

it('should return false for upperCase and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    upperCase: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})

it('should return true for number and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    number: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('1!2')).toBe(true)
})

it('should return false for number and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    number: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase, upperCase and number', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
  })
  expect(creatorPattern.validate('a1B')).toBe(true)
})

it('should return false for lowerCase, upperCase and number', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase, upperCase and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    upperCase: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('a!B')).toBe(true)
})

it('should return false for lowerCase, upperCase and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    upperCase: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase, number and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('a!1')).toBe(true)
})

it('should return false for lowerCase, number and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})

it('should return true for upperCase, number and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('A!1')).toBe(true)
})

it('should return false for upperCase, number and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase, upperCase, number and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('a!1B')).toBe(true)
})

it('should return false for lowerCase, upperCase, number and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase, upperCase, number and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('a!1B')).toBe(true)
})

it('should return false for lowerCase, upperCase, number and specialCharacter', () => {
  const creatorPattern = new CreatorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(creatorPattern.validate('abc')).toBe(false)
})