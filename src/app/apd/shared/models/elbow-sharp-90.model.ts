import { Singularity } from "./singularity.model";

export class ElbowSharp90 extends Singularity {
  constructor() {
    super();
    this.apiReference = '90_sharp_elbow';
    this.name = 'Coude aigu à 90°';
    this.icon = '/assets/images/90_sharp_elbow.svg';
  }
}
