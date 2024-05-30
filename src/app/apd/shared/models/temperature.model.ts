import { DataApd } from "./data-apd.model";

export class Temperature extends DataApd {
  constructor() {
    super();
    this.apiReference = 'temperature';
    this.name = 'Temperature';
    this.icon = '/assets/images/Temperature.svg';
    this.unit = '°C'
  }
}
