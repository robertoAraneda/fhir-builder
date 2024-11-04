import { IReference, IElement, ICodeableConcept, IPeriod, EncounterLocationStatusType } from 'fhirtypes/dist/r4';
import { EncounterLocation } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<EncounterLocation>;

/**
 * @description Interface for chaining the building of a EncounterLocation
 * @interface IEncounterLocationBuilder
 * @extends {IBuildable<EncounterLocation>}
 */
interface IEncounterLocationBuilder extends IBuildable<EncounterLocation> {
  setLocation(value: IReference): this;
  setStatus(value: EncounterLocationStatusType): this;
  setPhysicalType(value: ICodeableConcept): this;
  setPeriod(value: IPeriod): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a EncounterLocation
 * @class EncounterLocationBuilder
 * @extends {BackboneBuilder}
 * @implements {IEncounterLocationBuilder}
 * @author Roberto Araneda Espinoza
 */
export class EncounterLocationBuilder extends BackboneBuilder implements IEncounterLocationBuilder {
  private readonly encounterLocation: EncounterLocation;

  constructor() {
    super();
    this.encounterLocation = new EncounterLocation();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.encounterLocation[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {EncounterLocation}
   */
  build(): EncounterLocation {
    return Object.assign(this.encounterLocation, super.build());
  }

  /**
   * @description Sets the location value
   * @description The location where the encounter takes place.
   * @param value - the value to set
   * @returns {this}
   */
  setLocation(value: IReference): this {
    this.encounterLocation.location = value;
    return this;
  }

  /**
   * @description Sets the status value
   * @description The status of the participants' presence at the specified location during the period specified. If the participant is no longer at the location, then the period will have an end date/time.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: EncounterLocationStatusType): this {
    this.encounterLocation.status = value;
    return this;
  }

  /**
   * @description Sets the physicalType value
   * @description This will be used to specify the required levels (bed/ward/room/etc.) desired to be recorded to simplify either messaging or query.
   * @param value - the value to set
   * @returns {this}
   */
  setPhysicalType(value: ICodeableConcept): this {
    this.encounterLocation.physicalType = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description Time period during which the patient was present at the location.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.encounterLocation.period = value;
    return this;
  }
}
