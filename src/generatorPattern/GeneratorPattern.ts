interface Options {
  minLength?: number
  maxLength?: number
  lowerCase?: boolean
  upperCase?: boolean
  number?: boolean
  specialCharacter?: boolean
}

class GeneratorPattern {
  private regexPattern: string

  constructor(options: Options) {
    this.regexPattern = this.buildRegexPattern(options)
  }

  private buildRegexPattern(options: Options): string {
    const optionChecks = {
      lowerCase: () =>
        options.lowerCase ? this.includeLowerCase() : '(?!.*[a-z])',
      upperCase: () =>
        options.upperCase ? this.includeUpperCase() : '(?!.*[A-Z])',
      number: () => (options.number ? this.includeNumber() : '(?!.*\\d)'),
      specialCharacter: () =>
        options.specialCharacter
          ? this.includeSpecialCharacter()
          : '(?!.*[!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>/?])',
    }

    const patterns = Object.values(optionChecks).map((generatePattern) =>
      generatePattern()
    )
    return `^${patterns.join('')}.{${options.minLength || 0},${
      options.maxLength || ''
    }}$`
  }

  private includeLowerCase(): string {
    return '(?=.*[a-z])'
  }

  private includeUpperCase(): string {
    return '(?=.*[A-Z])'
  }

  private includeNumber(): string {
    return '(?=.*\\d)'
  }

  private includeSpecialCharacter(): string {
    return '(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>/?])'
  }

  validate(value: string): boolean {
    const regex = new RegExp(this.regexPattern)
    return regex.test(value)
  }
}

export default GeneratorPattern
