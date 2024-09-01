import { Element, IValidatable, ISerializable } from '../base';
import { ISimpleQuantity } from 'fhirtypes/dist/r4/datatypes/ISimpleQuantity';
import { IElement } from 'fhirtypes/dist/r4/base';
import { SimpleQuantityBuilder } from '../../builders';
import { ConformanceValidator } from '../../../core/r4/validators/base';

export class SimpleQuantity extends Element implements ISimpleQuantity, IValidatable, ISerializable {
  value?: number;
  unit?: string;
  system?: string;
  code?: string;
  _value?: IElement;
  _code?: IElement;
  _system?: IElement;
  _unit?: IElement;

  toJson(): any {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  constructor(args?: ISimpleQuantity) {
    super();
    if (args) Object.assign(this, args);
  }

  protected builderInstance(): SimpleQuantityBuilder {
    return new SimpleQuantityBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  validate() {
    return ConformanceValidator('SimpleQuantity', this);
  }
}
