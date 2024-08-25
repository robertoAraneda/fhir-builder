import { ICodeableConcept, IdentifierUseType, IElement, IIdentifier, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { IdentifierBuilder } from '../../builders';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from '../base/element.model';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';

/**
 * @description An identifier intended for computation
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {IdentifierUseEnum | IdentifierUseType} use - 	usual | official | temp | secondary | old (If known). Binding: IdentifierUse (Required)
 * @property {ICodeableConcept} type - Description of identifier
 * @property {string} system - The namespace for the identifier value
 * @property {string} value - The value that is unique
 * @property {IPeriod} period - Time period when id is/was valid for use
 * @property {IReference} assigner - Organization that issued id (maybe just text)
 * @property {IElement} _use - Extension of use
 * @property {IElement} _system - Extension of system
 * @property {IElement} _value - Extension of value
 * @see {@link https://www.hl7.org/fhir/datatypes.html#Identifier Identifier}
 * @author Roberto Araneda
 */
export class Identifier extends Element implements IIdentifier, IValidatable, ISerializable {
  /**
   * @description usual | official | temp | secondary | old (If known)
   */
  use?: IdentifierUseType;

  /**
   * @description Description of identifier
   */
  type?: ICodeableConcept;

  /**
   * @description The namespace for the identifier value
   */
  system?: string;

  /**
   * @description The value that is unique
   */
  value?: string;

  /**
   * @description Time period when id is/was valid for use
   */
  period?: IPeriod;

  /**
   * @description Organization that issued id (may-be just text)
   */
  assigner?: IReference;

  /**
   * @description Extension of use
   */
  _use?: IElement;

  /**
   * @description Extension of system
   */
  _system?: IElement;

  /**
   * @description Extension of value
   */
  _value?: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Identifier${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Identifier${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator(this, 'Identifier');
  }

  constructor(args?: IIdentifier) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): IdentifierBuilder {
    return new IdentifierBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
