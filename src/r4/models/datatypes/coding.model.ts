import { ICoding, IElement } from 'fhirtypes/dist/r4';
import { Element } from '../base/element.model';
import { CodingBuilder } from '../../builders/datatypes/coding.builder';
import { ValReturnType, DatatypeValidator } from '../../validators/base/datatype.validator';
import { IGenericObject } from '../../interfaces';
import { CodeableConceptValidator } from '../../validators/datatypes/codeable-concept.validator';
import { CodingValidator } from '../../validators/datatypes/coding.validator';

/**
 * @description A reference to a code defined by a terminology system.
 * @property {string} code - Symbol in syntax defined by the system
 * @property {string} display - Representation defined by the system
 * @property {string} system - Identity of the terminology system
 * @property {string} version - Version of the system - if relevant
 * @property {boolean} userSelected - If this coding was chosen directly by the user
 * @property {IElement} _system - Extension of system
 * @property {IElement} _version - Extension of version
 * @property {IElement} _code - Extension of code
 * @property {IElement} _display - Extension of display
 * @property {IElement} _userSelected - Extension of userSelected
 * @implements {ICoding}
 * @see https://www.hl7.org/fhir/datatypes.html#Coding Coding
 * @author Roberto Araneda
 */
export class Coding extends Element implements ICoding {
  /**
   * @description Identity of the terminology system
   */
  system: string;

  /**
   * @description Version of the system - if relevant
   */
  version: string;

  /**
   * @description Symbol in syntax defined by the system
   */
  code: string;

  /**
   * @description Representation defined by the system
   */
  display: string;

  /**
   * @description If this coding was chosen directly by the user
   */
  userSelected: boolean;

  // Extensions
  /**
   * @description Extension of system
   */
  _system: IElement;

  /**
   * @description Extension of version
   */
  _version: IElement;

  /**
   * @description Extension of code
   */
  _code: IElement;

  /**
   * @description Extension of display
   */
  _display: IElement;

  /**
   * @description Extension of userSelected
   */
  _userSelected: IElement;

  toJson(): Coding {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Coding${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Coding${JSON.stringify(this.toJson())}`;
  }

  private isValid(args: IGenericObject): ValReturnType {
    try {
      CodingValidator(args);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  validate(): ValReturnType {
    const { error } = this.isValid(this);
    return { error };
  }

  static builder(): CodingBuilder {
    return new CodingBuilder();
  }

  constructor(args?: ICoding) {
    super();
    Object.assign(this, args);
  }
}