import { DataApd } from "./data-apd.model";

export class SingularApd extends DataApd {
  constructor() {
    super();
    this.apiReference = 'singularApd';
    this.name = 'Pdc singulières';
    this.icon = '/assets/images/Singular_apd.svg';
    this.unit = 'Pa';
  }
}
