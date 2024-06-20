import { ContextR4 } from "./r4";

class FHIRContext {

  forR4() {
    return new ContextR4();
  }
}

export { FHIRContext };
