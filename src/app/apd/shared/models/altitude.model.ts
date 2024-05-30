import { DataApd } from "./data-apd.model";

export class Altitude extends DataApd {
  constructor() {
    super();
    this.apiReference = 'altitude';
    this.name = 'Altitude';
    this.icon = '/assets/images/Altitude.svg';
    this.unit = 'm'
  }
}
