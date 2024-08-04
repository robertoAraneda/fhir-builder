import * as modelsR4 from './r4/models';
import { DatatypeValidator } from './r4/validators/base/datatype.validator';
import { BackboneValidator } from './r4/validators/base/backbone.validator';
import { ResourceValidator } from './r4/validators/base/resource.validator';

class CreateContext {
  forR4() {
    return {
      ...modelsR4,
      Validator: {
        ...DatatypeValidator,
        ...BackboneValidator,
        ...ResourceValidator,
      },
    };
  }
}

const R4 = new CreateContext();

export const fhirR4 = R4.forR4;
