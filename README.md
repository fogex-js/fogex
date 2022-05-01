# fogex

Form Regex

## Installation

```
npm install fogex
```

## Usage

```
import * as fogex from './fogex/index.js';
```

```
fogex.isEmail('test@test.com'); // true
fogex.isEmail('test@test'); // false
```

### Use with parameters

`isPhoneNumber`

```
fogex.isPhoneNumber('+1 800 5551212', 'US'); // true
```

`isPin`

```
fogex.isPin('1234', '4'); // true
fogex.isPin('123456', '6'); // true

```

`isCreditCard`

#### Default

```
// Accepts all card types
isCreditCard.isCreditCard('1234 1234 1234 1234'); // true
```

#### Use with parameters

```
isCreditCard.isCreditCard('4140 5542 4728 1917', 'VISA'); // true
```

## Regex Patterns

| Tables                        | Description                                                                           | Parameter                |
| ----------------------------- | :------------------------------------------------------------------------------------ | ------------------------ |
| isAscii                       | Check if the string contains ASCII chars only.                                        |
| isBoolean                     | Check if a string is a boolean.                                                       |
| isCamelCase                   | Check if the string is a camelCase.                                                   |
| isCreditCard(val, cardType)   | Check if the string is a credit card number. The default value accepts all card types | `VISA` or `MASTER`       |
| isEmail                       | Check if the string is an email.                                                      |
| isFloat                       | Check if the string is a float.                                                       |
| isHash                        | Check if the string is a hash of type                                                 |
| isHex                         | Check if the string is a hexadecimal color.                                           |
| isHour12                      | Check if the hour 12 format is an correct.                                            |
| isHour24                      | Check if the hour 24 format is an correct.                                            |
| isHsl                         | Check if the string is an HSL (hue, saturation, lightness, optional alpha)            |
| isIdentityNumber(val, locale) | Check if the string is a identity number.                                             | `US` or `TR`             |
| isImageUrl(val, extension)    | Check if the string is a image url. The default value accepts all image extension     | `png`,`jpg`,`jpeg`,`gif` |
| isImei                        | Check if check if the string is a valid IMEI number.                                  |
| isInteger                     | Check if the string is an integer.                                                    |
| isIp                          | Check if the string is an IP                                                          |
| isISBN                        | Check if the string is an ISBN.                                                       |
| isLowerCase                   | Check if the string is a LowerCase.                                                   |
| isMac                         | Check if the string is a MAC address.                                                 |
| isMd5                         | Check if the string is a MD5 hash.                                                    |
| isMongoId                     | Check if the string is a valid a MongoDB ObjectId.                                    |
| isMonth                       | Check if the string is a month.                                                       |
| isPascalCase                  | Check if the string is a PascalCase.                                                  |
| isPassword                    | Check if a password is strong or not.                                                 |
| isPhoneNumber(val, locale)    | Check if the string is a mobile phone number.                                         | `US` or `TR`             |
| isPin(val, length)            | Check if the string is a pin.                                                         | `4` or `6`               |
| isPlate(val, locale)          | Check if string the format of a plate format.                                         | `US` or `TR`             |
| isPort                        | Check if the string is a valid port number.                                           |
| isPostalCode(val, locale)     | Check if the string is a postal code number.                                          | `US` or `TR`             |
| isRgb                         | Check if the string is a rgb or rgba color.                                           |
| isString                      | Check if string of a letter                                                           |
| isUpperCase                   | Check if the string is a UpperCase.                                                   |
| isWhiteSpace                  | Check if the string contains white space.                                             |

## Developers

|                                                           |                                                       |
| --------------------------------------------------------- | ----------------------------------------------------- |
| ![](https://avatars.githubusercontent.com/u/19785698?v=4) | Emre Yilmaz \| [@ymzEmre](https://github.com/ymzEmre) |
| ![](https://avatars.githubusercontent.com/u/39124676?v=4) | Ahmet Ozkan \| [@ahmet](https://github.com/ahmet021)  |

## Contribution

Fogex is under development, and is open to suggestions and contributions.

It is publicly open for any contribution. Bug fixes, new features and extra modules are welcome.

To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.

To report a bug: Please report it using GitHub Issues.

## MIT License

Copyright (c) 2022 Emre Yilmaz & Ahmet Ozkan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
