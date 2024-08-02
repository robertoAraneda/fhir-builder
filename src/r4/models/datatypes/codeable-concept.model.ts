import { ICodeableConcept, ICoding, IElement } from 'fhirtypes/dist/r4';
import { Element } from './element.model';
import { CodeableConceptBuilder } from '../../builders/datatypes/codeable-concept.builder';
import { CodeableConceptValidator } from '../../validators/datatypes/codeable-concept.validator';
import { IGenericObject } from '../../interfaces';
import { AddressValidator } from '../../validators/datatypes/address.validator';

/**
 * @description Concept - reference to a terminology or just text.
 * @property {string} id - Unique id for inter-element referencing
 * @property {ICoding[]} coding - Code defined by a terminology system
 * @property {string} text - Plain text representation of the concept
 * @property {IElement} _text - Extension of text element
 * @see https://www.hl7.org/fhir/datatypes.html#CodeableConcept CodeableConcept
 * @author Roberto Araneda
 */
export class CodeableConcept extends Element implements ICodeableConcept {
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

  toJson(): CodeableConcept {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `CodeableConcept${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `CodeableConcept${JSON.stringify(this.toJson())}`;
  }

  isValid(): { error: string | null } {
    try {
      CodeableConceptValidator(this);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  static builder(): CodeableConceptBuilder {
    return new CodeableConceptBuilder();
  }

  static validate(args: IGenericObject): { error: string | null } {
    try {
      CodeableConceptValidator(args);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  constructor(args: ICodeableConcept) {
    super();
    Object.assign(this, args);
  }
}
