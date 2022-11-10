import IConfigurationType from "./type/IConfigurationType";
import {ConfigurationTypeValidationResult} from "./type/ConfigurationTypeValidationResult";
import {ConfigurationValueSetException} from "./Exceptions";

class Configuration {
  name: string;
  value: string | undefined;
  configType: IConfigurationType;

  constructor(configType: IConfigurationType, name: string, value: string | undefined = undefined) {
    this.name = name;
    this.configType = configType;
    this.value = value;
  }

  setValue(value: string) {
    let res: ConfigurationTypeValidationResult = this.configType.validate(value);
    if (res.success) {
      this.value = res.value;
    } else {
      throw new ConfigurationValueSetException(res.message, this.name, value);
    }
  }
}

export default Configuration;