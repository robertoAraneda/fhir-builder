import { Extension } from '../models';

export interface BuildType {
  build: () => Extension;
}
