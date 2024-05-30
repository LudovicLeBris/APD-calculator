import { materials } from "../../../types/materials";
import { AdditionalApd } from "./additional-apd.model";
import { Air, JsonAir, StateAir } from "./air.model";
import { Altitude } from "./altitude.model";
import { StateDataApd } from "./data-apd.model";
import { DuctSection, JsonDuctSection, StateDuctSection } from "./duct-section.model";
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
    this.temperature.setValue(20.0);
  }

}

export interface JsonDuctNetwork {
  id?: number,
  name: string,
  projectId?: number,
  air: JsonAir,
  altitude: number,
  temperature: number,
  generalMaterial: materials,
  additionalApd?: number,
  ductSections: JsonDuctSection[],
  totalLinearApd?: number,
  totalSingularApd?: number,
  totalAdditionalApd?: number,
  totalApd?: number
}

export interface StateDuctNetwork {
  id?: number,
  name: string,
  projectId?: number,
  air: StateAir,
  altitude: StateDataApd,
  temperature: StateDataApd,
  generalMaterial: StateDataApd,
  additionalApd?: StateDataApd,
  ductSections: StateDuctSection[],
  totalLinearApd?: StateDataApd,
  totalSingularApd?: StateDataApd,
  totalAdditionalApd?: StateDataApd,
  totalApd?: StateDataApd
}
