import { DataApd } from "./data-apd.model";

export class FlowSpeed extends DataApd {
  constructor() {
    super();
    this.apiReference = 'flowspeed';
    this.name = 'Vitesse';
    this.icon = '/assets/images/Flow_speed.svg';
    this.unit = 'm/s';
  }
}
