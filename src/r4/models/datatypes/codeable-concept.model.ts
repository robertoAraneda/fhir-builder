import { ICodeableConcept, ICoding, IElement } from 'fhirtypes/dist/r4';
import { CodeableConceptBuilder } from '../../builders';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from '../base/element.model';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';

/**
 * @description Concept - reference to a terminology or just text.
 * @property {string} id - Unique id for inter-element referencing
 * @property {ICoding[]} coding - Code defined by a terminology system
 * @property {string} text - Plain text representation of the concept
 * @property {IElement} _text - Extension of text element
 * @see https://www.hl7.org/fhir/datatypes.html#CodeableConcept CodeableConcept
 * @author Roberto Araneda
 */
export class CodeableConcept extends Element implements ICodeableConcept, IValidatable, ISerializable {
  /**
   * @description Code defined by a terminology system
   */
  coding?: ICoding[];

  /**
   * @description Plain text representation of the concept
   */
  text?: string;

  /**
   * @description Extension of text element
   */
  _text?: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `CodeableConcept${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `CodeableConcept${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator(this, 'CodeableConcept');
  }

  constructor(args?: ICodeableConcept) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): CodeableConceptBuilder {
    return new CodeableConceptBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
