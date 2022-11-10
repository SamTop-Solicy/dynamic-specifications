import Configuration from "./configuration/Configuration";

class Specification {
  name: string;
  configs: Configuration[];

  constructor(name: string, configs: Configuration[]) {
    this.name = name;
    this.configs = configs;
  }
}