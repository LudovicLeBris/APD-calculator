import { DataApd } from "./data-apd.model";

export class Diameter extends DataApd {
  constructor() {
    super();
    this.apiReference = 'diameter';
    this.name = 'Diamètre';
    this.icon = '/assets/images/Diameter.svg';
    this.unit = 'mm';

    type diameters =
      80 |
      160 |
      200 |
      250 |
      315 |
      355 |
      400 |
      450 |
      500 |
      560 |
      630 |
      710 |
      800 |
      900 |
      1120 |
      1250 |
      undefined

    (this.value as diameters) = undefined;
  }

}
