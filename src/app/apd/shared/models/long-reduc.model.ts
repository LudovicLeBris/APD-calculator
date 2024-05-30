import { Singularity } from "./singularity.model";

export class LongReduc extends Singularity {
  constructor() {
    super();
    this.apiReference = 'long_reducer';
    this.name = 'Réduction longue';
    this.icon = '/assets/images/Long_reduc.svg';
  }
}
