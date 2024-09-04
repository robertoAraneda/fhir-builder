import { ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { HealthcareServiceEligibility } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<HealthcareServiceEligibility>;

/**
 * @description Interface for chaining the building of a HealthcareServiceEligibility
 * @interface IHealthcareServiceEligibilityBuilder
 * @extends {IBuildable<HealthcareServiceEligibility>}
 */
interface IHealthcareServiceEligibilityBuilder extends IBuildable<HealthcareServiceEligibility> {
  setCode(value: ICodeableConcept): this;
  setComment(value: string): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a HealthcareServiceEligibility
 * @class HealthcareServiceEligibilityBuilder
 * @extends {BackboneBuilder}
 * @implements {IHealthcareServiceEligibilityBuilder}
 * @author Roberto Araneda Espinoza
 */
export class HealthcareServiceEligibilityBuilder
  extends BackboneBuilder
  implements IHealthcareServiceEligibilityBuilder
{
  private readonly healthcareServiceEligibility: HealthcareServiceEligibility;

  constructor() {
    super();
    this.healthcareServiceEligibility = new HealthcareServiceEligibility();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.healthcareServiceEligibility[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {HealthcareServiceEligibility}
   */
  build(): HealthcareServiceEligibility {
    return Object.assign(this.healthcareServiceEligibility, super.build());
  }

  /**
   * @description Sets the code value
   * @description Coded value for the eligibility.
   * @param value - the value to set
   * @returns {this}
   */
  setCode(value: ICodeableConcept): this {
    this.healthcareServiceEligibility.code = value;
    return this;
  }

  /**
   * @description Sets the comment value
   * @description Describes the eligibility conditions for the service.
   * @param value - the value to set
   * @returns {this}
   */
  setComment(value: string): this {
    this.healthcareServiceEligibility.comment = value;
    return this;
  }
}
