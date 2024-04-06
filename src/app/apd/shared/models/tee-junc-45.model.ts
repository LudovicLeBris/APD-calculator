import { Singularity } from "./singularity.model";

export class TeeJunc45 extends Singularity {
  constructor() {
    super();
    this.apiReference = '45_junc_tee';
    this.name = 'Té de jonction à 45°';
    this.icon = '/assets/images/45_junc_tee.svg';
  }
}
