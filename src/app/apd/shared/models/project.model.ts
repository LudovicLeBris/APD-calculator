import { Altitude } from "./altitude.model";
import { StateDataApd } from "./data-apd.model";
import { DuctNetwork, JsonDuctNetwork, StateDuctNetwork } from "./duct-network.model";
import { Temperature } from "./temperature.model";

export class Project {
  id: number | undefined = undefined;
  name: string = '';
  userId: number | undefined = undefined;
  generalAltitude: Altitude = new Altitude;
  generalTemperature: Temperature = new Temperature;
  ductNetworks: DuctNetwork[] = [];

}

export interface JsonProject {
  id?: number,
  name:string,
  userId?: number,
  generalAltitude: number,
  generalTemperature: number,
  ductNetworks: JsonDuctNetwork[]
}

export interface StateProject {
  id?: number,
  name: string,
  userId?: number,
  generalAltitude: StateDataApd,
  generalTemperature: StateDataApd,
  ductNetworks: StateDuctNetwork[]
}
