import { Singularity } from "./singularity.model";

export class TeeJunc90 extends Singularity {
  constructor() {
    super();
    this.apiReference = '90_junc_tee';
    this.name = 'Té de jonction à 90°';
    this.icon = '/assets/images/90_junc_tee.svg';
  }
}
