import { AdditionalApd } from "./additional-apd.model";
import { Altitude } from "./altitude.model";
import { DataApd } from "./data-apd.model";
import { Diameter } from "./diameter.model";
import { FlowRate } from "./flow-rate.model";
import { FlowSpeed } from "./flow-speed.model";
import { Height } from "./height.model";
import { Length } from "./length.model";
import { LinearApd } from "./linear-apd.model";
import { Material } from "./material.model";
import { Section } from "./section.model";
import { Shape } from "./shape.model";
import { SingularApd } from "./singular-apd.model";
import { Temperature } from "./temperature.model";
import { TotalApd } from "./total-apd.model";
import { Width } from "./width.model";

export class DataApdFactory {
  createDataApd(type: string): DataApd | undefined {
    switch (type) {
      case 'additionalApd':
        return new AdditionalApd;
        break;
      case 'altitude':
        return new Altitude;
        break;
      case 'diameter':
        return new Diameter;
        break;
      case 'flowrate':
        return new FlowRate;
        break;
      case 'flowspeed':
        return new FlowSpeed;
        break;
      case 'height':
        return new Height;
        break;
      case 'length':
        return new Length;
        break;
      case 'linearApd':
        return new LinearApd;
        break;
      case 'material':
        return new Material;
        break;
      case 'ductSectionsSection':
        return new Section;
        break;
      case 'shape':
        return new Shape('circular');
        break;
      case 'singularApd':
        return new SingularApd;
        break;
      case 'temperature':
        return new Temperature;
        break;
      case 'totalApd':
        return new TotalApd;
        break;
      case 'width':
        return new Width;
      default:
        return undefined;
        break;
    }
  }
}
