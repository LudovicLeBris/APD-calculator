import { Singularity } from "./singularity.model";

export class PressedReduc extends Singularity {
  constructor() {
    super();
    this.apiReference = 'pressed_reducer';
    this.name = 'Réduction courte';
    this.icon = '/assets/images/Pressed_reduc.svg';
  }
}
