import { AdditionalApd } from "./additional-apd.model";
import { Air } from "./air.model";
import { Diameter } from "./diameter.model";
import { FlowRate } from "./flow-rate.model";
import { FlowSpeed } from "./flow-speed.model";
import { Height } from "./height.model";
import { Length } from "./length.model";
import { LinearApd } from "./linear-apd.model";
import { Material } from "./material.model";
import { Shape } from "./shape.model";
import { SingularApd } from "./singular-apd.model";
import { Singularity } from "./singularity.model";
import { TotalApd } from "./total-apd.model";
import { Width } from "./width.model";

export class DuctSection {

  id: number | undefined = undefined;
  name: string = '';
  ductNetworkId: number | undefined = undefined;
  air: Air = new Air;
  shape: Shape = new Shape('circular');
  diameter: Diameter = new Diameter;
  width: Width = new Width;
  height: Height = new Height;
  material: Material = new Material;
  flowrate: FlowRate = new FlowRate;
  length: Length = new Length;
  singularities: Singularity[] = [];
  additionalApd: AdditionalApd = new AdditionalApd;
  equivDiameter: number = 0;
  ductSectionSection: number = 0;
  flowspeed: FlowSpeed = new FlowSpeed;
  linearApd: LinearApd = new LinearApd;
  singularApd: SingularApd = new SingularApd;
  totalApd: TotalApd = new TotalApd;

}
