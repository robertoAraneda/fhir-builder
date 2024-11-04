import { ICoding, IPeriod } from 'fhirtypes/dist/r4';
import { EncounterClassHistory } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a EncounterClassHistory
 * @interface IEncounterClassHistoryBuilder
 * @extends {IBuildable<EncounterClassHistory>}
 */
interface IEncounterClassHistoryBuilder extends IBuildable<EncounterClassHistory> {
  setClass(value: ICoding): this;
  setPeriod(value: IPeriod): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a EncounterClassHistory
 * @class EncounterClassHistoryBuilder
 * @extends {BackboneBuilder}
 * @implements {IEncounterClassHistoryBuilder}
 * @author Roberto Araneda Espinoza
 */
export class EncounterClassHistoryBuilder extends BackboneBuilder implements IEncounterClassHistoryBuilder {
  private readonly encounterClassHistory: EncounterClassHistory;

  constructor() {
    super();
    this.encounterClassHistory = new EncounterClassHistory();
  }

  /**
   * @description Builds the model
   * @returns {EncounterClassHistory}
   */
  build(): EncounterClassHistory {
    return Object.assign(this.encounterClassHistory, super.build());
  }

  /**
   * @description Sets the class value
   * @description inpatient | outpatient | ambulatory | emergency +.
   * @param value - the value to set
   * @returns {this}
   */
  setClass(value: ICoding): this {
    this.encounterClassHistory.class = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description The time that the episode was in the specified class.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.encounterClassHistory.period = value;
    return this;
  }
}
