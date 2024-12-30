import { IElement, IPeriod } from 'fhirtypes/dist/r4';
import { IPractitionerRoleNotAvailable, IOperationOutcome } from 'fhirtypes/dist/r4';
import { BackboneElement, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for PractitionerRoleNotAvailable BackboneElement
  undefined
  * @property {string} description
  * @property {IElement} _description
  * @property {IPeriod} during
  * @author Roberto Araneda Espinoza
  */
export class PractitionerRoleNotAvailable
  extends BackboneElement
  implements IPractitionerRoleNotAvailable, IValidatable, ISerializable
{
  /**
   * @description The reason that can be presented to the user as to why this time is not available.
   */
  description: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description Service is not available (seasonally or for a public holiday) from this date.
   */
  during?: IPeriod;

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
    return `PractitionerRoleNotAvailable${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `PractitionerRoleNotAvailable${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('PractitionerRoleNotAvailable', this);
  }

  constructor(args?: IPractitionerRoleNotAvailable) {
    super();
    if (args) Object.assign(this, args);
  }
}
