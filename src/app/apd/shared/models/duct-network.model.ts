import { AdditionalApd } from "./additional-apd.model";
import { Air } from "./air.model";
import { Altitude } from "./altitude.model";
import { DuctSection } from "./duct-section.model";
import { Material } from "./material.model";
import { SingularApd } from "./singular-apd.model";
import { Temperature } from "./temperature.model";
import { TotalApd } from "./total-apd.model";

export class DuctNetwork {

  id: number | undefined = undefined;
  name: string = '';
  projectId: number | undefined = undefined;
  air: Air = new Air;
  altitude: Altitude = new Altitude;
  temperature: Temperature = new Temperature;
  generalMaterial: Material = new Material;
  additionalApd: AdditionalApd = new AdditionalApd;
  ductSections: DuctSection[] = [];
  totalLinearApd: TotalApd = new TotalApd;
  totalSingularApd: SingularApd = new SingularApd;
  totalAdditionalApd: AdditionalApd = new AdditionalApd;
  totalApd: TotalApd = new TotalApd;

  constructor() {
    this.altitude.setValue(0);
    this.temperature.setValue(20);
  }

}
