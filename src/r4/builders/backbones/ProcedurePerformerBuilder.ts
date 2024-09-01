import { ICodeableConcept, IReference } from 'fhirtypes/dist/r4';
import { ProcedurePerformer } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a ProcedurePerformer
 * @interface IProcedurePerformerBuilder
 * @extends {IBuildable<ProcedurePerformer>}
 */
interface IProcedurePerformerBuilder extends IBuildable<ProcedurePerformer> {
  setFunction(value: ICodeableConcept): this;
  setActor(value: IReference): this;
  setOnBehalfOf(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a ProcedurePerformer
 * @class ProcedurePerformerBuilder
 * @extends {BackboneBuilder}
 * @implements {IProcedurePerformerBuilder}
 * @author Roberto Araneda Espinoza
 */
export class ProcedurePerformerBuilder extends BackboneBuilder implements IProcedurePerformerBuilder {
  private readonly procedurePerformer: ProcedurePerformer;

  constructor() {
    super();
    this.procedurePerformer = new ProcedurePerformer();
  }

  /**
   * @description Builds the model
   * @returns {ProcedurePerformer}
   */
  build(): ProcedurePerformer {
    return Object.assign(this.procedurePerformer, super.build());
  }

  /**
   * @description Sets the function value
   * @description Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
   * @param value - the value to set
   * @returns {this}
   */
  setFunction(value: ICodeableConcept): this {
    this.procedurePerformer.function = value;
    return this;
  }

  /**
   * @description Sets the actor value
   * @description The practitioner who was involved in the procedure.
   * @param value - the value to set
   * @returns {this}
   */
  setActor(value: IReference): this {
    this.procedurePerformer.actor = value;
    return this;
  }

  /**
   * @description Sets the onBehalfOf value
   * @description The organization the device or practitioner was acting on behalf of.
   * @param value - the value to set
   * @returns {this}
   */
  setOnBehalfOf(value: IReference): this {
    this.procedurePerformer.onBehalfOf = value;
    return this;
  }
}
