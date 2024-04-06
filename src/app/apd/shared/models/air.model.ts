import { Altitude } from "./altitude.model";
import { Temperature } from "./temperature.model";

export class Air {

  viscosity: number = 1.5080510051843115e-5;
  density: number = 1.2058928673556562;
  temperature: Temperature = new Temperature;
  altitude: Altitude = new Altitude;

  constructor() {
    this.temperature.setValue(20);
    this.altitude.setValue(0);
  }
}
