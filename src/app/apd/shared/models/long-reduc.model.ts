import { DataApd } from "./data-apd.model";

export class LongReduc extends DataApd {
  constructor() {
    super();
    this.apiReference = 'long_reducer';
    this.name = 'Réduction longue';
    this.icon = '/assets/images/Long_reduc.svg';
  }
}
