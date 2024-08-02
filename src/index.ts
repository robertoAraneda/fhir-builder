import * as modelsR4 from './r4/models';
import { DatatypeValidator } from './r4/utils/datatype.validator';

class CreateContext {
  forR4() {
    return {
      ...modelsR4,
      Validator: DatatypeValidator,
    };
  }
}

export { CreateContext };
