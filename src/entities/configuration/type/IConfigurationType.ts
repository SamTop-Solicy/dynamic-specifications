import { ConfigurationTypeValidationResult } from "./ConfigurationTypeValidationResult";

interface IConfigurationType {
  validate(value: string): ConfigurationTypeValidationResult;
}

export default IConfigurationType;