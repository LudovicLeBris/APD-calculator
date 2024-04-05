import { DataApd } from "./data-apd.model";

export class LinearApd extends DataApd {
  constructor() {
    super();
    this.apiReference = 'linearApd';
    this.name = 'Pdc linéaires';
    this.icon = '/assets/images/Linear_apd.svg';
    this.unit = 'Pa';
  }
}
