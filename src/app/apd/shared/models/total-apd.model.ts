import { DataApd } from "./data-apd.model";

export class TotalApd extends DataApd {
  constructor() {
    super();
    this.apiReference = 'totalApd';
    this.name = 'Pdc totals';
    this.icon = '/assets/images/Total_apd.svg';
    this.unit = 'Pa';
  }
}
