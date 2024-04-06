import { Singularity } from "./singularity.model";

export class Elbow30 extends Singularity {
  constructor() {
    super();
    this.apiReference = '30_elbow';
    this.name = 'Coude à 30°';
    this.icon = '/assets/images/30_elbow.svg';
  }
}
