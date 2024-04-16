import { Altitude } from "./altitude.model";
import { DuctNetwork, JsonDuctNetwork } from "./duct-network.model";
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
