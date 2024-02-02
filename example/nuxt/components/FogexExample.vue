<script setup lang="ts">
import { isPin, customPattern, GeneratorPattern } from 'fogex'

// pre-defined patterns
const isPinValue: string = '1234'
const isPinValidate: boolean = isPin(isPinValue, 4) || false
console.log('isPinValidate', isPinValidate)

// custom pattern
const customParameterValue: string = 'qweR123!'
const customParameterValidate: boolean = customPattern(
  'aA#!',
  8,
  customParameterValue
)
console.log('customParameterValidate', customParameterValidate)

// class GeneratorPattern()
const generatorPatternValue: string = 'qweR123!'

const options = {
  minLength: 8,
  maxLength: 16,
  lowerCase: true,
  upperCase: true,
  number: true,
  specialCharacter: true,
}

const generatorPattern: GeneratorPattern = new GeneratorPattern(options)

const generatorPatternValidate: boolean = generatorPattern.validate(
  generatorPatternValue
)
console.log('generatorPatternValidate', generatorPatternValidate)
</script>

<template>Fogex Example</template>
