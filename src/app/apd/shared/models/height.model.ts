import { DataApd } from "./data-apd.model";

export class Height extends DataApd {
  constructor() {
    super();
    this.apiReference = 'height';
    this.name = 'Hauteur';
    this.icon = '/assets/images/Height.svg';
    this.unit = 'mm';
  }
}
