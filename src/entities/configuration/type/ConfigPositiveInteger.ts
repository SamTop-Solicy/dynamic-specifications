import IConfigurationType from "./IConfigurationType";
import {ConfigurationTypeValidationResult} from "./ConfigurationTypeValidationResult";

export default class ConfigPositiveInteger implements IConfigurationType {
  validate(value: string): ConfigurationTypeValidationResult {
    if (Number.isInteger(value) && parseInt(value) > 0)
      return {
        success: true,
        value: value,
        message: '',
      };
    else
      return {
        success: false,
        value: value,
        message: 'Value should be positive integer',
      }
  }
}