import { DataApd } from "./data-apd.model";

export class Elbow60 extends DataApd {
  constructor() {
    super();
    this.apiReference = '60_elbow';
    this.name = 'Coude à 60°';
    this.icon = '/assets/images/60_elbow.svg';
  }
}
