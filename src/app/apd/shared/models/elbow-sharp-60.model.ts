import { DataApd } from "./data-apd.model";

export class ElbowSharp60 extends DataApd {
  constructor() {
    super();
    this.apiReference = '60_sharp_elbow';
    this.name = 'Coude aigu à 60°';
    this.icon = '/assets/images/60_sharp_elbow.svg';
  }
}
