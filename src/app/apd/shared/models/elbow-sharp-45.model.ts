import { DataApd } from "./data-apd.model";

export class ElbowSharp45 extends DataApd {
  constructor() {
    super();
    this.apiReference = '45_sharp_elbow';
    this.name = 'Coude aigu à 45°';
    this.icon = '/assets/images/45_sharp_elbow.svg';
  }
}
