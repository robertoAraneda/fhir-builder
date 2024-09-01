import { ICodeableConcept, IElement } from 'fhirtypes/dist/r4';
import { CoverageClass } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<CoverageClass>;

/**
 * @description Interface for chaining the building of a CoverageClass
 * @interface ICoverageClassBuilder
 * @extends {IBuildable<CoverageClass>}
 */
interface ICoverageClassBuilder extends IBuildable<CoverageClass> {
  setType(value: ICodeableConcept): this;
  setValue(value: string): this;
  setName(value: string): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a CoverageClass
 * @class CoverageClassBuilder
 * @extends {BackboneBuilder}
 * @implements {ICoverageClassBuilder}
 * @author Roberto Araneda Espinoza
 */
export class CoverageClassBuilder extends BackboneBuilder implements ICoverageClassBuilder {
  private readonly coverageClass: CoverageClass;

  constructor() {
    super();
    this.coverageClass = new CoverageClass();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.coverageClass[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {CoverageClass}
   */
  build(): CoverageClass {
    return Object.assign(this.coverageClass, super.build());
  }

  /**
   * @description Sets the type value
   * @description The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
   * @param value - the value to set
   * @returns {this}
   */
  setType(value: ICodeableConcept): this {
    this.coverageClass.type = value;
    return this;
  }

  /**
   * @description Sets the value value
   * @description The alphanumeric string value associated with the insurer issued label.
   * @param value - the value to set
   * @returns {this}
   */
  setValue(value: string): this {
    this.coverageClass.value = value;
    return this;
  }

  /**
   * @description Sets the name value
   * @description A short description for the class.
   * @param value - the value to set
   * @returns {this}
   */
  setName(value: string): this {
    this.coverageClass.name = value;
    return this;
  }
}
