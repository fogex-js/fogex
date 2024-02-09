import { expect, it } from '@jest/globals'
import GeneratorPattern from '../../src/generatorPattern/GeneratorPattern'

it('should return true for minLength 3', () => {
  const generatorPattern = new GeneratorPattern({
    minLength: 3,
    lowerCase: true,
  })
  expect(generatorPattern.validate('aaa')).toBe(true)
})

it('should return false for minLength 3', () => {
  const generatorPattern = new GeneratorPattern({
    minLength: 3,
  })
  expect(generatorPattern.validate('ab')).toBe(false)
})

// it('should return true for maxLength 3', () => {
//   const generatorPattern = new GeneratorPattern({
//     maxLength: 3,
//   })
//   expect(generatorPattern.validate('abc')).toBe(true)
// })

it('should return false for maxLength 3', () => {
  const generatorPattern = new GeneratorPattern({
    maxLength: 3,
  })
  expect(generatorPattern.validate('abcd')).toBe(false)
})

it('should return true for minLength 3 and maxLength 5', () => {
  const generatorPattern = new GeneratorPattern({
    minLength: 3,
    maxLength: 5,
    upperCase: true,
  })
  expect(generatorPattern.validate('AAAAA')).toBe(true)
})

it('should return false for minLength 3 and maxLength 5', () => {
  const generatorPattern = new GeneratorPattern({
    minLength: 3,
    maxLength: 5,
  })
  expect(generatorPattern.validate('ab')).toBe(false)
})

it('should return false for minLength 3 and maxLength 5', () => {
  const generatorPattern = new GeneratorPattern({
    minLength: 3,
    maxLength: 5,
  })
  expect(generatorPattern.validate('abcdef')).toBe(false)
})

it('should return true for lowerCase', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
  })
  expect(generatorPattern.validate('abc')).toBe(true)
})

it('should return false for lowerCase', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
  })
  expect(generatorPattern.validate('ABC')).toBe(false)
})

it('should return true for upperCase', () => {
  const generatorPattern = new GeneratorPattern({
    upperCase: true,
  })
  expect(generatorPattern.validate('ABC')).toBe(true)
})

it('should return false for upperCase', () => {
  const generatorPattern = new GeneratorPattern({
    upperCase: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})

it('should return true for number', () => {
  const generatorPattern = new GeneratorPattern({
    number: true,
  })
  expect(generatorPattern.validate('123')).toBe(true)
})

it('should return false for number', () => {
  const generatorPattern = new GeneratorPattern({
    number: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})

it('should return true for specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    specialCharacter: true,
  })
  expect(generatorPattern.validate('!@#')).toBe(true)
})

it('should return false for specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    specialCharacter: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase and upperCase', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    upperCase: true,
  })
  expect(generatorPattern.validate('aBc')).toBe(true)
})

it('should return false for lowerCase and upperCase', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    upperCase: true,
  })
  expect(generatorPattern.validate('123')).toBe(false)
})

it('should return true for lowerCase and number', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    number: true,
  })
  expect(generatorPattern.validate('a1b')).toBe(true)
})

it('should return false for lowerCase and number', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    number: true,
  })
  expect(generatorPattern.validate('ABC')).toBe(false)
})

it('should return true for lowerCase and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('a!b')).toBe(true)
})

it('should return false for lowerCase and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('ABC')).toBe(false)
})

it('should return true for upperCase and number', () => {
  const generatorPattern = new GeneratorPattern({
    upperCase: true,
    number: true,
  })
  expect(generatorPattern.validate('A1B')).toBe(true)
})

it('should return false for upperCase and number', () => {
  const generatorPattern = new GeneratorPattern({
    upperCase: true,
    number: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})

it('should return true for upperCase and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    upperCase: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('A!B')).toBe(true)
})

it('should return false for upperCase and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    upperCase: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})

it('should return true for number and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    number: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('1!2')).toBe(true)
})

it('should return false for number and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    number: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase, upperCase and number', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
  })
  expect(generatorPattern.validate('a1B')).toBe(true)
})

it('should return false for lowerCase, upperCase and number', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase, upperCase and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    upperCase: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('a!B')).toBe(true)
})

it('should return false for lowerCase, upperCase and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    upperCase: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase, number and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('a!1')).toBe(true)
})

it('should return false for lowerCase, number and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})

it('should return true for upperCase, number and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('A!1')).toBe(true)
})

it('should return false for upperCase, number and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase, upperCase, number and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('a!1B')).toBe(true)
})

it('should return false for lowerCase, upperCase, number and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})

it('should return true for lowerCase, upperCase, number and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('a!1B')).toBe(true)
})

it('should return false for lowerCase, upperCase, number and specialCharacter', () => {
  const generatorPattern = new GeneratorPattern({
    lowerCase: true,
    upperCase: true,
    number: true,
    specialCharacter: true,
  })
  expect(generatorPattern.validate('abc')).toBe(false)
})
