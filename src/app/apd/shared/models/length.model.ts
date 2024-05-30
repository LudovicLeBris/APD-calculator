import { DataApd } from "./data-apd.model";

export class Length extends DataApd {
  constructor() {
    super();
    this.apiReference = 'length';
    this.name = 'Longueur';
    this.icon = '/assets/images/Length.svg';
    this.unit = 'm';
  }
}
