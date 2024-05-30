import { DataApd } from "./data-apd.model";

export class FlowRate extends DataApd {
  constructor() {
    super();
    this.apiReference = 'flowrate';
    this.name = 'Débit';
    this.icon = '/assets/images/Flow_rate.svg';
    this.unit = 'm³/h';
  }
}
