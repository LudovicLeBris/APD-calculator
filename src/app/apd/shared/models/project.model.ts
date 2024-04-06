import { Altitude } from "./altitude.model";
import { DuctNetwork } from "./duct-network.model";
import { Temperature } from "./temperature.model";

export class Project {

  id: number | undefined = undefined;
  name: string = '';
  userId: number | undefined = undefined;
  generalAltitude: Altitude = new Altitude;
  generalTemperature: Temperature = new Temperature;
  ductNetworks: DuctNetwork[] = [];

  constructor() {
    this.generalAltitude.setValue(0);
    this.generalTemperature.setValue(20);
  }

}
