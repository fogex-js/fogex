import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { isPin, customPattern, GeneratorPattern } from 'fogex'

@Component({
  selector: 'app-fogex-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fogex-example.component.html',
  styleUrl: './fogex-example.component.css',
})
export class FogexExampleComponent {
  isPinValidate?: boolean
  customParameterValidate?: boolean
  generatorPatternValidate?: boolean

  constructor() {
    this.isPinValidate = this.isPin()
    this.customParameterValidate = this.customPattern()
    this.generatorPatternValidate = this.generatorPattern()
  }

  isPin() {
    const value = '1234'
    return isPin(value, 4)
  }

  customPattern() {
    const value = 'qweR123!'
    return customPattern('aA#!', 8, value)
  }

  generatorPattern() {
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
    return generatorPattern.validate(generatorPatternValue)
  }
}
