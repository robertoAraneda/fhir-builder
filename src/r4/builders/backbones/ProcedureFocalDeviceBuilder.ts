import { ICodeableConcept, IReference } from 'fhirtypes/dist/r4';
import { ProcedureFocalDevice } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';

/**
 * @description Interface for chaining the building of a ProcedureFocalDevice
 * @interface IProcedureFocalDeviceBuilder
 * @extends {IBuildable<ProcedureFocalDevice>}
 */
interface IProcedureFocalDeviceBuilder extends IBuildable<ProcedureFocalDevice> {
  setAction(value: ICodeableConcept): this;
  setManipulated(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a ProcedureFocalDevice
 * @class ProcedureFocalDeviceBuilder
 * @extends {BackboneBuilder}
 * @implements {IProcedureFocalDeviceBuilder}
 * @author Roberto Araneda Espinoza
 */
export class ProcedureFocalDeviceBuilder extends BackboneBuilder implements IProcedureFocalDeviceBuilder {
  private readonly procedureFocalDevice: ProcedureFocalDevice;

  constructor() {
    super();
    this.procedureFocalDevice = new ProcedureFocalDevice();
  }

  /**
   * @description Builds the model
   * @returns {ProcedureFocalDevice}
   */
  build(): ProcedureFocalDevice {
    return Object.assign(this.procedureFocalDevice, super.build());
  }

  /**
   * @description Sets the action value
   * @description The kind of change that happened to the device during the procedure.
   * @param value - the value to set
   * @returns {this}
   */
  setAction(value: ICodeableConcept): this {
    this.procedureFocalDevice.action = value;
    return this;
  }

  /**
   * @description Sets the manipulated value
   * @description The device that was manipulated (changed) during the procedure.
   * @param value - the value to set
   * @returns {this}
   */
  setManipulated(value: IReference): this {
    this.procedureFocalDevice.manipulated = value;
    return this;
  }
}
