import { IIdentifier, ICodeableConcept, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { PractitionerQualification } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a PractitionerQualification
 * @interface IPractitionerQualificationBuilder
 * @extends {IBuildable<PractitionerQualification>}
 */
interface IPractitionerQualificationBuilder extends IBuildable<PractitionerQualification> {
  addIdentifier(value: IIdentifier): this;
  setCode(value: ICodeableConcept): this;
  setPeriod(value: IPeriod): this;
  setIssuer(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a PractitionerQualification
 * @class PractitionerQualificationBuilder
 * @extends {BackboneBuilder}
 * @implements {IPractitionerQualificationBuilder}
 * @author Roberto Araneda Espinoza
 */
export class PractitionerQualificationBuilder extends BackboneBuilder implements IPractitionerQualificationBuilder {
  private readonly practitionerQualification: PractitionerQualification;

  constructor() {
    super();
    this.practitionerQualification = new PractitionerQualification();
  }

  /**
   * @description Builds the model
   * @returns {PractitionerQualification}
   */
  build(): PractitionerQualification {
    return Object.assign(this.practitionerQualification, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description An identifier that applies to this person's qualification in this role.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.practitionerQualification.identifier = this.practitionerQualification.identifier || [];
    this.practitionerQualification.identifier.push(value);
    return this;
  }
  /**
   * @description Sets the code value
   * @description Coded representation of the qualification.
   * @param value - the value to set
   * @returns {this}
   */
  setCode(value: ICodeableConcept): this {
    this.practitionerQualification.code = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description Period during which the qualification is valid.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.practitionerQualification.period = value;
    return this;
  }

  /**
   * @description Sets the issuer value
   * @description Organization that regulates and issues the qualification.
   * @param value - the value to set
   * @returns {this}
   */
  setIssuer(value: IReference): this {
    this.practitionerQualification.issuer = value;
    return this;
  }
}
