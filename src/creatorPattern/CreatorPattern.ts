interface Options {
  minLength?: number;
  maxLength?: number;
  lowerCase?: boolean;
  upperCase?: boolean;
  number?: boolean;
  specialCharacter?: boolean;
}

class PasswordPatternValidator {
  private regexPattern: string;

  constructor(options: Options) {
    this.regexPattern = this.buildRegexPattern(options);
  }

  private buildRegexPattern(options: Options): string {
    let regexPattern = '^';
  
    const optionChecks: { [K in keyof Options]: () => string } = {
      lowerCase: this.includeLowerCase,
      upperCase: this.includeUpperCase,
      number: this.includeNumber,
      specialCharacter: this.includeSpecialCharacter,
    };

    for (const [option, generatePattern] of Object.entries(optionChecks) as [keyof Options, () => string][]) {
      if (options[option]) {
        regexPattern += generatePattern();
      }
    }
  
    return regexPattern + `.{${options.minLength || 0},${options.maxLength || ''}}$`;
  }

  private includeLowerCase(): string {
    return '(?=.*[a-z])';
  }

  private includeUpperCase(): string {
    return '(?=.*[A-Z])';
  }

  private includeNumber(): string {
    return '(?=.*\\d)';
  }

  private includeSpecialCharacter(): string {
    return '(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>/?])';
  }

  validate(value: string): boolean {
    try {
      const regex = new RegExp(this.regexPattern);
      return regex.test(value);
    } catch (error) {
      console.error('Regex pattern creation error:', error);
      return false;
    }
  }
}

export default PasswordPatternValidator;