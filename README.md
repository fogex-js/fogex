# Fogex

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
  - [1) Pre-defined regex functions](#1-use-with-pre-defined-regex-functions)
  - [2) customPattern function](#2-use-with-custompattern-function)
  - [3) GeneratorPattern class](#3-use-with-generatorpattern-function)
- [Pre-defined Regex Functions](#pre-defined-regex-functions)
- [Contribution](#contribution)
- [License](#mit-license)

## Introduction

This package is still in the beta stage, please use it carefully.

I abbreviated the expression "Form Regular Expression" as "FOGEX" to give the library its name.

A JavaScript library for quickly and easily testing the validity or invalidity of a value.

## Installation

```
npm install fogex
```

or

```
yarn add fogex
```

## Usage

### 1) Use with pre-defined regex functions

```
import { isEmail } from 'fogex'
```

```
isEmail('test@test.com') // true
isEmail('test@test') // false
```

#### Use with parameters

`isPhoneNumber`

```
import { isPhoneNumber } from 'fogex'
```

```
isPhoneNumber('+11234567890', 'US') // true
isPhoneNumber('1234567890', 'US') // true
isPhoneNumber('+905555555555', 'US') // true
isPhoneNumber('05555555555', 'US') // true
isPhoneNumber('5555555555', 'US') // true
```

`isPin`

```
import { isPin } from 'fogex'
```

```
isPin('1234', '4') // true
isPin('123456', '6') // true

```

`isCreditCard`

```
import { isCreditCard } from 'fogex'
```

##### Default

```
// Accepts all card types
isCreditCard('XXXX XXXX XXXX XXXX') // true
isCreditCard('XXXXXXXXXXXXXXXX') // true
```

##### Use with parameters

```
isCreditCard('XXXX XXXX XXXX XXXX', 'VISA') // true
isCreditCard('XXXXXXXXXXXXXXXX', 'VISA') // true
```

```
isCreditCard('XXXX XXXX XXXX XXXX', 'MASTER') // true
isCreditCard('XXXXXXXXXXXXXXXX', 'MASTER') // true
```

### 2) Use with `customPattern` function

```
import { customPattern } from 'fogex'
```

a => a-z

A => A-Z

\# => 0-9

! => Special Characters

? => Optional Characters

Example

```
customPattern('aA#!', 8, 'aA1!1234') //true
customPattern('aA?#!', 5, 'aa11\*') // true
```

### 3) Use with `GeneratorPattern` function

```
import { GeneratorPattern } from 'fogex'
```

```
const value = 'qweR123!'

const options = {
  minLength: 6,
  maxLength: 12,
  lowerCase: true,
  upperCase: true,
  number: true,
  specialCharacter: true,
}

const validator = new GeneratorPattern(options)
const isValid = validator.validate(value)

console.log(isValid) // true
```

#### or

```
const validator = new GeneratorPattern({
  minLength: 6,
  maxLength: 12,
  lowerCase: true,
  upperCase: true,
  number: true,
  specialCharacter: true,
})

const isValid = validator.validate(value)
console.log(isValid)
```

## Pre-defined Regex Functions

| Tables                        | Description                                                                           | Parameter                           |
| ----------------------------- | :------------------------------------------------------------------------------------ | ----------------------------------- |
| isAscii                       | Check if the string contains ASCII chars only.                                        |
| isBoolean                     | Check if a string is a boolean.                                                       |
| isCase(val, case)             | Check if the string is a cases.                                                       | `lower`, `upper`, `camel`, `pascal` |
| isColorCode(val, colorCode)   | Check if the string is a color code.                                                  | `rgb`, `hex`, `hsl`                 |
| isCreditCard(val, cardType)   | Check if the string is a credit card number. The default value accepts all card types | `VISA` or `MASTER`                  |
| isEmail                       | Check if the string is an email.                                                      |
| isFloat                       | Check if the string is a float.                                                       |
| isHash                        | Check if the string is a hash of type                                                 |
| isHour(val, hourFormat)       | Check if the hour format is an correct.                                               | `12` or `24`                        |
| isIdentityNumber(val, locale) | Check if the string is a identity number.                                             | `US` or `TR`                        |
| isImageUrl(val, extension)    | Check if the string is a image url. The default value accepts all image extension     | `png`, `jpg`, `jpeg`, `gif`         |
| isImei                        | Check if check if the string is a valid IMEI number.                                  |
| isInteger                     | Check if the string is an integer.                                                    |
| isIp                          | Check if the string is an IP                                                          |
| isISBN                        | Check if the string is an ISBN.                                                       |
| isMac                         | Check if the string is a MAC address.                                                 |
| isMd5                         | Check if the string is a MD5 hash.                                                    |
| isMongoId                     | Check if the string is a valid a MongoDB ObjectId.                                    |
| isMonth                       | Check if the string is a month.                                                       |
| isPassword                    | Check if a password is strong or not.                                                 |
| isPhoneNumber(val, locale)    | Check if the string is a mobile phone number.                                         | `US` or `TR`                        |
| isPin(val, length)            | Check if the string is a pin.                                                         | `4` or `6`                          |
| isPlate(val, locale)          | Check if string the format of a plate format.                                         | `US` or `TR`                        |
| isPort                        | Check if the string is a valid port number.                                           |
| isPostalCode(val, locale)     | Check if the string is a postal code number.                                          | `US` or `TR`                        |
| isString                      | Check if string of a letter                                                           |
| isWhiteSpace                  | Check if the string contains white space.                                             |

## Contribution

Fogex library is under development, and is open to suggestions and contributions.

It is publicly open for any contribution. Bug fixes, new features and extra modules are welcome.

To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.

To report a bug: Please report it using GitHub Issues.

## MIT License

Copyright (c) 2024 Emre Yilmaz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
