import { DataApd } from "./data-apd.model";

export class AdditionalApd extends DataApd {
  constructor() {
    super();
    this.apiReference = 'additionalApd';
    this.name = 'Pdc additionnelles';
    this.icon = '/assets/images/Additional_apd.svg';
    this.unit = 'Pa';
  }
}
