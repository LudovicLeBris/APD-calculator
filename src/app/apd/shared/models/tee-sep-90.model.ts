import { Singularity } from "./singularity.model";

export class TeeSep90 extends Singularity {
  constructor() {
    super();
    this.apiReference = '90_elbow';
    this.name = 'Té de séparation à 90°';
    this.icon = '/assets/images/90_sep_tee.svg';
  }
}
