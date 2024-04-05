import { DataApd } from "./data-apd.model";

export class Elbow45 extends DataApd {
  constructor() {
    super();
    this.apiReference = '45_elbow';
    this.name = 'Coude à 45°';
    this.icon = '/assets/images/45_elbow.svg';
  }
}
