import { DataApd } from "./data-apd.model";

export class PressedReduc extends DataApd {
  constructor() {
    super();
    this.apiReference = 'pressed_reducer';
    this.name = 'Réduction courte';
    this.icon = '/assets/images/Pressed_reduc.svg';
  }
}
