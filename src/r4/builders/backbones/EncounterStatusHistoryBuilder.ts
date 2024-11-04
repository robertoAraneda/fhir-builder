import { IElement, IPeriod } from 'fhirtypes/dist/r4';
import { EncounterStatusHistory } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';
import { EncounterStatusType } from 'fhirtypes/dist/r4/types';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<EncounterStatusHistory>;

/**
 * @description Interface for chaining the building of a EncounterStatusHistory
 * @interface IEncounterStatusHistoryBuilder
 * @extends {IBuildable<EncounterStatusHistory>}
 */
interface IEncounterStatusHistoryBuilder extends IBuildable<EncounterStatusHistory> {
  setStatus(value: EncounterStatusType): this;
  setPeriod(value: IPeriod): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a EncounterStatusHistory
 * @class EncounterStatusHistoryBuilder
 * @extends {BackboneBuilder}
 * @implements {IEncounterStatusHistoryBuilder}
 * @author Roberto Araneda Espinoza
 */
export class EncounterStatusHistoryBuilder extends BackboneBuilder implements IEncounterStatusHistoryBuilder {
  private readonly encounterStatusHistory: EncounterStatusHistory;

  constructor() {
    super();
    this.encounterStatusHistory = new EncounterStatusHistory();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.encounterStatusHistory[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {EncounterStatusHistory}
   */
  build(): EncounterStatusHistory {
    return Object.assign(this.encounterStatusHistory, super.build());
  }

  /**
   * @description Sets the status value
   * @description planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: EncounterStatusType): this {
    this.encounterStatusHistory.status = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description The time that the episode was in the specified status.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.encounterStatusHistory.period = value;
    return this;
  }
}
