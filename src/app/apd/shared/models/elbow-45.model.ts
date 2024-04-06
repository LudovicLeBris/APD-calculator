import { Singularity } from "./singularity.model";

export class Elbow45 extends Singularity {
  constructor() {
    super();
    this.apiReference = '45_elbow';
    this.name = 'Coude à 45°';
    this.icon = '/assets/images/45_elbow.svg';
  }
}
