import { Elbow30 } from "../apd/shared/models/elbow-30.model";
import { Elbow45 } from "../apd/shared/models/elbow-45.model";
import { Elbow60 } from "../apd/shared/models/elbow-60.model";
import { Elbow90 } from "../apd/shared/models/elbow-90.model";
import { ElbowSharp30 } from "../apd/shared/models/elbow-sharp-30.model";
import { ElbowSharp45 } from "../apd/shared/models/elbow-sharp-45.model";
import { ElbowSharp60 } from "../apd/shared/models/elbow-sharp-60.model";
import { ElbowSharp90 } from "../apd/shared/models/elbow-sharp-90.model";
import { LongReduc } from "../apd/shared/models/long-reduc.model";
import { PressedReduc } from "../apd/shared/models/pressed-reduc.model";
import { Singularity } from "../apd/shared/models/singularity.model";
import { TeeJunc45 } from "../apd/shared/models/tee-junc-45.model";
import { TeeJunc90 } from "../apd/shared/models/tee-junc-90.model";
import { TeeSep45 } from "../apd/shared/models/tee-sep-45.model";
import { TeeSep90 } from "../apd/shared/models/tee-sep-90.model";

export type singularities = {[key: string]: number};

export const singularityList = [
  new Elbow30 as Singularity,
  new Elbow45 as Singularity,
  new Elbow60 as Singularity,
  new Elbow90 as Singularity,
  new ElbowSharp30 as Singularity,
  new ElbowSharp45 as Singularity,
  new ElbowSharp60 as Singularity,
  new ElbowSharp90 as Singularity,
  new LongReduc as Singularity,
  new PressedReduc as Singularity,
  new TeeJunc45 as Singularity,
  new TeeJunc90 as Singularity,
  new TeeSep45 as Singularity,
  new TeeSep90 as Singularity
]
