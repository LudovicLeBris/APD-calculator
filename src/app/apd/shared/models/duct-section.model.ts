import { diameters } from "../../../types/diameters";
import { materials } from "../../../types/materials";
import { singularities } from "../../../types/singularity";
import { AdditionalApd } from "./additional-apd.model";
import { Air, JsonAir, StateAir } from "./air.model";
import { StateDataApd } from "./data-apd.model";
import { Diameter } from "./diameter.model";
import { FlowRate } from "./flow-rate.model";
import { FlowSpeed } from "./flow-speed.model";
import { Height } from "./height.model";
import { Length } from "./length.model";
import { LinearApd } from "./linear-apd.model";
import { Material } from "./material.model";
import { Shape, stateShape } from "./shape.model";
import { SingularApd } from "./singular-apd.model";
import { Singularity, StateSingularity } from "./singularity.model";
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
  ductSectionsSection: number = 0;
  flowspeed: FlowSpeed = new FlowSpeed;
  linearApd: LinearApd = new LinearApd;
  singularApd: SingularApd = new SingularApd;
  totalApd: TotalApd = new TotalApd;

}

export interface JsonDuctSection {
  id?: number | undefined,
  name: string,
  ductNetworkId?: number | undefined,
  air : JsonAir,
  shape: 'circular' | 'rectangular',
  diameter?: diameters | undefined,
  width?: number | undefined,
  height?: number | undefined,
  material : materials,
  flowrate: number,
  length: number,
  singularities: singularities,
  additionalApd?: number | undefined,
  equivDiameter?: number,
  ductSectionsSection?: number | undefined,
  flowspeed?: number | undefined,
  linearApd?: number | undefined,
  singularApd?: number | undefined,
  totalApd?: number | undefined
}

export interface StateDuctSection {
  id?: number | undefined,
  name: string,
  ductNetworkId?: number | undefined,
  air : StateAir,
  shape: stateShape,
  diameter?: StateDataApd,
  width?: StateDataApd,
  height?: StateDataApd,
  material : StateDataApd,
  flowrate: StateDataApd,
  length: StateDataApd,
  singularities: StateSingularity[],
  additionalApd?: StateDataApd,
  equivDiameter?: StateDataApd,
  ductSectionsSection?: StateDataApd,
  flowspeed?: StateDataApd,
  linearApd?: StateDataApd,
  singularApd?: StateDataApd,
  totalApd?: StateDataApd
}
