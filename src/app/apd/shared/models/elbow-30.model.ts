import { DataApd } from "./data-apd.model";

export class Elbow30 extends DataApd {
  constructor() {
    super();
    this.apiReference = '30_elbow';
    this.name = 'Coude à 30°';
    this.icon = '/assets/images/30_elbow.svg';
  }
}
