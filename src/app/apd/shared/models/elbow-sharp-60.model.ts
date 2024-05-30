import { Singularity } from "./singularity.model";

export class ElbowSharp60 extends Singularity {
  constructor() {
    super();
    this.apiReference = '60_sharp_elbow';
    this.name = 'Coude aigu à 60°';
    this.icon = '/assets/images/60_sharp_elbow.svg';
  }
}
