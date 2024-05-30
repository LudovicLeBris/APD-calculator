import { Singularity } from "./singularity.model";

export class TeeSep45 extends Singularity {
  constructor() {
    super();
    this.apiReference = '45_sep_tee';
    this.name = 'Té de séparation à 45°';
    this.icon = '/assets/images/45_sep_tee.svg';
  }
}
