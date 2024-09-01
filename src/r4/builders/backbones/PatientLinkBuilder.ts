import { IReference, IElement, LinkTypeType } from 'fhirtypes/dist/r4';
import { PatientLink } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<PatientLink>;

/**
 * @description Interface for chaining the building of a PatientLink
 * @interface IPatientLinkBuilder
 * @extends {IBuildable<PatientLink>}
 */
interface IPatientLinkBuilder extends IBuildable<PatientLink> {
  setOther(value: IReference): this;
  setType(value: LinkTypeType): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a PatientLink
 * @class PatientLinkBuilder
 * @extends {BackboneBuilder}
 * @implements {IPatientLinkBuilder}
 * @author Roberto Araneda Espinoza
 */
export class PatientLinkBuilder extends BackboneBuilder implements IPatientLinkBuilder {
  private readonly patientLink: PatientLink;

  constructor() {
    super();
    this.patientLink = new PatientLink();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.patientLink[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {PatientLink}
   */
  build(): PatientLink {
    return Object.assign(this.patientLink, super.build());
  }

  /**
   * @description Sets the other value
   * @description The other patient resource that the link refers to.
   * @param value - the value to set
   * @returns {this}
   */
  setOther(value: IReference): this {
    this.patientLink.other = value;
    return this;
  }

  /**
   * @description Sets the type value
   * @description The type of link between this patient resource and another patient resource.
   * @param value - the value to set
   * @returns {this}
   */
  setType(value: LinkTypeType): this {
    this.patientLink.type = value;
    return this;
  }
}
