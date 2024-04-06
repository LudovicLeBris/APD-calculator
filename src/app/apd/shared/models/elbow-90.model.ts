import { Singularity } from "./singularity.model";

export class Elbow90 extends Singularity {
  constructor() {
    super();
    this.apiReference = '90_elbow';
    this.name = 'Coude à 90°';
    this.icon = '/assets/images/90_elbow.svg';
  }
}
