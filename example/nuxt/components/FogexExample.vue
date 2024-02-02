<script setup lang="ts">
import { isPin, customPattern, GeneratorPattern } from 'fogex'

// pre-defined patterns
const isPinValue = '1234'
const isPinValidate = isPin(isPinValue, 4)
console.log('isPinValidate', isPinValidate)

// custom pattern
const customParameterValue = 'qweR123!'
const customParameterValidate = customPattern('aA#!', 8, customParameterValue)
console.log('customParameterValidate', customParameterValidate)

// class GeneratorPattern()
const generatorPatternValue = 'qweR123!'

const options = {
  minLength: 8,
  maxLength: 16,
  lowerCase: true,
  upperCase: true,
  number: true,
  specialCharacter: true,
}

const generatorPattern = new GeneratorPattern(options)

const generatorPatternValidate = generatorPattern.validate(
  generatorPatternValue
)
console.log('generatorPatternValidate', generatorPatternValidate)
</script>

<template>Fogex Example</template>
