import {
  ICodeableConcept,
  ICoding,
  IOperationOutcome,
  IQuantity,
  IRange,
  IReference,
  IUsageContext,
} from 'fhirtypes/dist/r4';
import { ISerializable, IValidatable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

export class UsageContext implements IUsageContext, ISerializable, IValidatable {
  code: ICoding;
  valueCodeableConcept?: ICodeableConcept;
  valueQuantity?: IQuantity;
  valueRange?: IRange;
  valueReference?: IReference;

  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  toJson(): Record<string, unknown> {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `UsageContext${JSON.stringify(this.toJson(), null, 2)}`;
  }

  validate(): { isValid: boolean; operationOutcome: IOperationOutcome } {
    return ConformanceValidator('UsageContext', this);
  }
}
