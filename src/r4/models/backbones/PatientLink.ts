import { IReference, IElement, LinkTypeType } from 'fhirtypes/dist/r4';
import { IPatientLink, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for PatientLink BackboneElement
 * @property {IReference} other
 * @property {LinkTypeType} type
 * @property {IElement} _type
 * @author Roberto Araneda Espinoza
 */
export class PatientLink extends BackboneElement implements IPatientLink, IValidatable, ISerializable {
  /**
   * @description The other patient resource that the link refers to.
   */
  other: IReference;

  /**
   * @description The type of link between this patient resource and another patient resource.
   */
  type: LinkTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

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
    return `PatientLink${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `PatientLink${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('PatientLink', this);
  }

  constructor(args?: IPatientLink) {
    super();
    if (args) Object.assign(this, args);
  }
}
