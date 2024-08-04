import * as modelsR4 from './r4/models';
import { ResourceValidator } from './r4/validators/base/resource.validator';

export function contextR4() {
  return {
    ...modelsR4,
    Validator: {
      ...ResourceValidator,
    },
  };
}
