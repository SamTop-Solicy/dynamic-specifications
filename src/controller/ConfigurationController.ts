import Configuration from "../entities/configuration/Configuration";
import ConfigPositiveInteger from "../entities/configuration/type/ConfigPositiveInteger";

export default class ConfigurationController {
  createConfiguration(name: string) : Configuration {
    return new Configuration(new ConfigPositiveInteger(), name);
  }
}
