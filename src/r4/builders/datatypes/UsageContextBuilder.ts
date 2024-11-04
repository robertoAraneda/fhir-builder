import { ICodeableConcept, ICoding, IQuantity, IRange, IReference } from 'fhirtypes/dist/r4';
import { IBuildable } from '../base';
import { UsageContext } from '../../models';

export interface IUsageContextBuilder extends IBuildable<UsageContext> {
  setCode(code: ICoding): this;
  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): this;
  setValueQuantity(valueQuantity: IQuantity): this;
  setValueRange(valueRange: IRange): this;
  setValueReference(valueReference: IReference): this;
}

export class UsageContextBuilder implements IUsageContextBuilder {
  private readonly usageContext: UsageContext;

  constructor() {
    this.usageContext = new UsageContext();
  }

  build(): UsageContext {
    return this.usageContext;
  }

  setCode(code: ICoding): this {
    this.usageContext.code = code;

    return this;
  }

  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): this {
    this.usageContext.valueCodeableConcept = valueCodeableConcept;

    return this;
  }

  setValueQuantity(valueQuantity: IQuantity): this {
    this.usageContext.valueQuantity = valueQuantity;

    return this;
  }

  setValueRange(valueRange: IRange): this {
    this.usageContext.valueRange = valueRange;

    return this;
  }

  setValueReference(valueReference: IReference): this {
    this.usageContext.valueReference = valueReference;

    return this;
  }
}
