import { Altitude } from "./altitude.model";
import { DuctNetwork } from "./duct-network.model";
import { Temperature } from "./temperature.model";

export class Project {

  id: number | undefined = undefined;
  name: string = '';
  userId: number | undefined = undefined;
  generalAltitude: number = 0;
  generalTemperature: number = 20.0;
  ductNetworks: DuctNetwork[] = [];

}

export type PayloadProject = Omit<Project, "id" | "userId" | "ductNetworks">;
