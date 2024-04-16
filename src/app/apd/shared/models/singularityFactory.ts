import { retry } from "rxjs";
import { Elbow30 } from "./elbow-30.model";
import { Elbow45 } from "./elbow-45.model";
import { Elbow60 } from "./elbow-60.model";
import { Elbow90 } from "./elbow-90.model";
import { ElbowSharp30 } from "./elbow-sharp-30.model";
import { ElbowSharp45 } from "./elbow-sharp-45.model";
import { ElbowSharp60 } from "./elbow-sharp-60.model";
import { ElbowSharp90 } from "./elbow-sharp-90.model";
import { LongReduc } from "./long-reduc.model";
import { PressedReduc } from "./pressed-reduc.model";
import { Singularity } from "./singularity.model";
import { TeeJunc45 } from "./tee-junc-45.model";
import { TeeJunc90 } from "./tee-junc-90.model";
import { TeeSep45 } from "./tee-sep-45.model";
import { TeeSep90 } from "./tee-sep-90.model";

export class SingularityFactory {
  createSingularity(type: string): Singularity | undefined {
    switch (type) {
      case '30_elbow':
        return new Elbow30;
        break;
      case '45_elbow':
        return new Elbow45;
        break;
      case '60_elbow':
        return new Elbow60;
        break;
      case '90_elbow':
        return new Elbow90;
        break;
      case '30_sharp_elbow':
        return new ElbowSharp30;
        break;
      case '45_sharp_elbow':
        return new ElbowSharp45;
        break;
      case '60_sharp_elbow':
        return new ElbowSharp60;
        break;
      case '90_sharp_elbow':
        return new ElbowSharp90;
        break;
      case 'long_reducer':
        return new LongReduc;
        break;
      case 'pressed_reducer':
        return new PressedReduc;
        break;
      case '45_junc_tee':
        return new TeeJunc45;
        break;
      case '90_junc_tee':
        return new TeeJunc90;
        break;
      case '45_sep_tee':
        return new TeeSep45;
        break;
      case '90_sep_tee':
        return new TeeSep90;
        break;
      default:
        return undefined;
        break;
    }
  }
}
