import { DataApd } from "./data-apd.model";

export class Width extends DataApd {
  constructor() {
    super();
    this.apiReference = 'width';
    this.name = 'Largeur';
    this.icon = '/assets/images/Width.svg';
    this.unit = 'mm';
  }
}
