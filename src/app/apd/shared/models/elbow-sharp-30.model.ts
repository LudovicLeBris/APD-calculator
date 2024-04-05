import { DataApd } from "./data-apd.model";

export class ElbowSharp30 extends DataApd {
  constructor() {
    super();
    this.apiReference = '30_sharp_elbow';
    this.name = 'Coude aigu à 30°';
    this.icon = '/assets/images/30_sharp_elbow.svg';
  }
}
