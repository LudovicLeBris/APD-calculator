import { diameters } from "../../../types/diameters";
import { DataApd } from "./data-apd.model";

export class Diameter extends DataApd {

  protected override value: diameters | undefined;

  constructor() {
    super();
    this.apiReference = 'diameter';
    this.name = 'Diamètre';
    this.icon = '/assets/images/Diameter.svg';
    this.unit = 'mm';
    this.value = undefined;
  }

  override setValue(value: diameters | undefined): void {
    this.value = value;
  }

  override getValue(): diameters | undefined {
    return this.value;
  }

}
