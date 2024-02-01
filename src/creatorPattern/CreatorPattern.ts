interface Options {
  minLength?: number;
  maxLength?: number;
  lowerCase?: boolean;
  upperCase?: boolean;
  number?: boolean;
  specialCharacter?: boolean;
}

class CreatorPattern {
  private regexPattern: string;

  constructor(options: Options) {
    this.regexPattern = this.buildRegexPattern(options);
  }

  private buildRegexPattern(options: Options): string {
    let regexPattern = '^';

    if (options.lowerCase) {
      regexPattern += this.lowerCase();
    }

    if (options.upperCase) {
      regexPattern += this.upperCase();
    }

    if (options.number) {
      regexPattern += this.number();
    }

    if (options.specialCharacter) {
      regexPattern += this.specialCharacter();
    }

    return regexPattern + `.{${options.minLength || 0},${options.maxLength || ''}}$`;
  }

  private lowerCase(): string {
    return '(?=.*[a-z])';
  }

  private upperCase(): string {
    return '(?=.*[A-Z])';
  }

  private number(): string {``
    return '(?=.*\\d)';
  }

  private specialCharacter(): string {
    return '(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>/?])';
  }

  validate(value: string): boolean {
    const regex = new RegExp(this.regexPattern);
    return regex.test(value);
  }
}


export default CreatorPattern;

