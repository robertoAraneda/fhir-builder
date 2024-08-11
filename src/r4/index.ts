import * as modelsR4 from './models';
import { ResourceValidator } from '../core/r4/validators/base';

export function contextR4() {
  return {
    ...modelsR4,
    Validator: {
      ...ResourceValidator,
    },
  };
}
