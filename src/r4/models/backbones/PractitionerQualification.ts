import { IIdentifier, ICodeableConcept, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { IPractitionerQualification, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for PractitionerQualification BackboneElement
  undefined
  * @property {IIdentifier[]} identifier
  * @property {ICodeableConcept} code
  * @property {IPeriod} period
  * @property {IReference} issuer
  * @author Roberto Araneda Espinoza
  */
export class PractitionerQualification
  extends BackboneElement
  implements IPractitionerQualification, IValidatable, ISerializable
{
  /**
   * @description An identifier that applies to this person's qualification in this role.
   */
  identifier?: IIdentifier[];

  /**
   * @description Coded representation of the qualification.
   */
  code: ICodeableConcept;

  /**
   * @description Period during which the qualification is valid.
   */
  period?: IPeriod;

  /**
   * @description Organization that regulates and issues the qualification.
   */
  issuer?: IReference;

  /**
   * @description Returns a JSON representation of the model
   * @returns {Record<string, any>}
   */
  toJson(): Record<string, any> {
    return JSON.parse(JSON.stringify(this));
  }

  /**
   * @description Returns a string representation of the model
   * @returns {string}
   */
  toString(): string {
    return `PractitionerQualification${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `PractitionerQualification${JSON.stringify(this.toJson(), null, 2)}`;
  }

  /**
   * @description Returns a serialized string representation of the model
   * @returns {string}
   */
  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  /**
   * @description Validates the model
   * @returns {isValid: boolean, operationOutcome: IOperationOutcome}
   */
  validate(): { isValid: boolean; operationOutcome: IOperationOutcome } {
    return ConformanceValidator('PractitionerQualification', this);
  }

  constructor(args?: IPractitionerQualification) {
    super();
    if (args) Object.assign(this, args);
  }
}
