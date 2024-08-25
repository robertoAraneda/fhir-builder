import * as backbonesR4 from '../r4/models/backbones';
import * as resourcesR4 from '../r4/models/resources';
import * as datatypesR4 from '../r4/models/datatypes';
import * as backboneBuildersR4 from '../r4/builders/backbones';
import * as resourceBuildersR4 from '../r4/builders/resources';
import * as datatypeBuildersR4 from '../r4/builders/datatypes';
import { ResourceValidator } from '../core/r4/validators/base';

export function contextR4() {
  return {
    ...backbonesR4,
    ...resourcesR4,
    ...datatypesR4,
    ...backboneBuildersR4,
    ...resourceBuildersR4,
    ...datatypeBuildersR4,
    ...ResourceValidator,
  };
}
