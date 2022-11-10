export class ConfigurationValueSetException {
  message: string;
  optionName: string;
  value: string;

  constructor(message: string, optionName: string, value: string) {
    this.message = message;
    this.optionName = optionName;
    this.value = value;
  }
}


