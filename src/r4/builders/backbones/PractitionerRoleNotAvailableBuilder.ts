import { IElement, IPeriod } from 'fhirtypes/dist/r4';
import { PractitionerRoleNotAvailable } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<PractitionerRoleNotAvailable>;

/**
 * @description Interface for chaining the building of a PractitionerRoleNotAvailable
 * @interface IPractitionerRoleNotAvailableBuilder
 * @extends {IBuildable<PractitionerRoleNotAvailable>}
 */
interface IPractitionerRoleNotAvailableBuilder extends IBuildable<PractitionerRoleNotAvailable> {
  setDescription(value: string): this;
  setDuring(value: IPeriod): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a PractitionerRoleNotAvailable
 * @class PractitionerRoleNotAvailableBuilder
 * @extends {BackboneBuilder}
 * @implements {IPractitionerRoleNotAvailableBuilder}
 * @author Roberto Araneda Espinoza
 */
export class PractitionerRoleNotAvailableBuilder
  extends BackboneBuilder
  implements IPractitionerRoleNotAvailableBuilder
{
  private readonly practitionerRoleNotAvailable: PractitionerRoleNotAvailable;

  constructor() {
    super();
    this.practitionerRoleNotAvailable = new PractitionerRoleNotAvailable();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.practitionerRoleNotAvailable[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {PractitionerRoleNotAvailable}
   */
  build(): PractitionerRoleNotAvailable {
    return Object.assign(this.practitionerRoleNotAvailable, super.build());
  }

  /**
   * @description Sets the description value
   * @description The reason that can be presented to the user as to why this time is not available.
   * @param value - the value to set
   * @returns {this}
   */
  setDescription(value: string): this {
    this.practitionerRoleNotAvailable.description = value;
    return this;
  }

  /**
   * @description Sets the during value
   * @description Service is not available (seasonally or for a public holiday) from this date.
   * @param value - the value to set
   * @returns {this}
   */
  setDuring(value: IPeriod): this {
    this.practitionerRoleNotAvailable.during = value;
    return this;
  }
}
