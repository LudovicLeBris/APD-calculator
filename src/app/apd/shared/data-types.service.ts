import { Injectable } from '@angular/core';
import { DataApd } from './models/data-apd.model';
import { TotalApd } from './models/total-apd.model';
import { LinearApd } from './models/linear-apd.model';
import { AdditionalApd } from './models/additional-apd.model';
import { Altitude } from './models/altitude.model';
import { Diameter } from './models/diameter.model';
import { Elbow30 } from './models/elbow-30.model';
import { Elbow45 } from './models/elbow-45.model';
import { Elbow60 } from './models/elbow-60.model';
import { Elbow90 } from './models/elbow-90.model';
import { ElbowSharp30 } from './models/elbow-sharp-30.model';
import { ElbowSharp45 } from './models/elbow-sharp-45.model';
import { ElbowSharp60 } from './models/elbow-sharp-60.model';
import { ElbowSharp90 } from './models/elbow-sharp-90.model';
import { FlowRate } from './models/flow-rate.model';
import { FlowSpeed } from './models/flow-speed.model';
import { Height } from './models/height.model';
import { Length } from './models/length.model';
import { LongReduc } from './models/long-reduc.model';
import { Material } from './models/material.model';
import { PressedReduc } from './models/pressed-reduc.model';
import { Section } from './models/section.model';
import { Shape } from './models/shape.model';
import { SingularApd } from './models/singular-apd.model';
import { TeeJunc45 } from './models/tee-junc-45.model';
import { TeeJunc90 } from './models/tee-junc-90.model';
import { TeeSep45 } from './models/tee-sep-45.model';
import { TeeSep90 } from './models/tee-sep-90.model';
import { Temperature } from './models/temperature.model';
import { Width } from './models/width.model';

@Injectable({
  providedIn: 'root'
})
export class DataTypesService {

  // TODO : temporary object list. The object will come from a duct section, duct network or project object
  types = [
    new AdditionalApd,
    new Altitude,
    new Diameter,
    new Elbow30,
    new Elbow45,
    new Elbow60,
    new Elbow90,
    new ElbowSharp30,
    new ElbowSharp45,
    new ElbowSharp60,
    new ElbowSharp90,
    new FlowRate,
    new FlowSpeed,
    new Height,
    new Length,
    new LinearApd,
    new LongReduc,
    new Material,
    new PressedReduc,
    new Section,
    new Shape('circular'),
    new SingularApd,
    new TeeJunc45,
    new TeeJunc90,
    new TeeSep45,
    new TeeSep90,
    new Temperature,
    new TotalApd,
    new Width
  ]

  getTypes(dataType: string):DataApd | undefined {
    return this.types.find((element:DataApd) => dataType == element.getApiReference())
  }

}
