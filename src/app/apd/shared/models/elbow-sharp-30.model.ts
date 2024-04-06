import { Singularity } from "./singularity.model";

export class ElbowSharp30 extends Singularity {
  constructor() {
    super();
    this.apiReference = '30_sharp_elbow';
    this.name = 'Coude aigu à 30°';
    this.icon = '/assets/images/30_sharp_elbow.svg';
  }
}
