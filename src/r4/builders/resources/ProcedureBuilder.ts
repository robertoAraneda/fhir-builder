import {
  IIdentifier,
  IElement,
  IReference,
  ICodeableConcept,
  IPeriod,
  IAge,
  IRange,
  IProcedurePerformer,
  IAnnotation,
  IProcedureFocalDevice,
  EventStatusType,
} from 'fhirtypes/dist/r4';
import { Procedure } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys, ExtractUnderscoreArrayKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Procedure>;

// Extract the keys that are arrays and start with an underscore
type UnderscoreArrayElements = ExtractUnderscoreArrayKeys<Procedure>;
/**
 * @description Interface for chaining the building of a Procedure
 * @interface IProcedureBuilder
 * @extends {IBuildable<Procedure>}
 */
interface IProcedureBuilder extends IBuildable<Procedure> {
  addIdentifier(value: IIdentifier): this;
  addInstantiatesCanonical(value: string): this;
  addInstantiatesUri(value: string): this;
  addBasedOn(value: IReference): this;
  addPartOf(value: IReference): this;
  setStatus(value: EventStatusType): this;
  setStatusReason(value: ICodeableConcept): this;
  setCategory(value: ICodeableConcept): this;
  setCode(value: ICodeableConcept): this;
  setSubject(value: IReference): this;
  setEncounter(value: IReference): this;
  setPerformedDateTime(value: string): this;
  setPerformedPeriod(value: IPeriod): this;
  setPerformedString(value: string): this;
  setPerformedAge(value: IAge): this;
  setPerformedRange(value: IRange): this;
  setRecorder(value: IReference): this;
  setAsserter(value: IReference): this;
  addPerformer(value: IProcedurePerformer): this;
  setLocation(value: IReference): this;
  addReasonCode(value: ICodeableConcept): this;
  addReasonReference(value: IReference): this;
  addBodySite(value: ICodeableConcept): this;
  setOutcome(value: ICodeableConcept): this;
  addReport(value: IReference): this;
  addComplication(value: ICodeableConcept): this;
  addComplicationDetail(value: IReference): this;
  addFollowUp(value: ICodeableConcept): this;
  addNote(value: IAnnotation): this;
  addFocalDevice(value: IProcedureFocalDevice): this;
  addUsedReference(value: IReference): this;
  addUsedCode(value: ICodeableConcept): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Procedure
 * @class ProcedureBuilder
 * @extends {DomainResourceBuilder}
 * @implements {IProcedureBuilder}
 * @author Roberto Araneda Espinoza
 */
export class ProcedureBuilder extends DomainResourceBuilder implements IProcedureBuilder {
  private readonly procedure: Procedure;

  constructor() {
    super();
    this.procedure = new Procedure();
  }

  /**
   * @description Sets the resource type to Procedure
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.procedure, incomingData);
    return this;
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension<T extends PrimitiveExtensionFields>(
    param: T,
    extension: T extends Extract<PrimitiveExtensionFields, UnderscoreArrayElements> ? IElement[] : IElement,
  ): this {
    const arrayParam = ['_instantiatesUri'];
    if (arrayParam.includes(param)) {
      this.procedure[param] = extension as IElement[];
      return this;
    }

    const localParam = param as Exclude<PrimitiveExtensionFields, UnderscoreArrayElements>;
    this.procedure[localParam] = extension as IElement;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Procedure}
   */
  build(): Procedure {
    return Object.assign(this.procedure, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description Business identifiers assigned to this procedure by the performer or other systems which remain constant as the resource is updated and is propagated from server to server.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.procedure.identifier = this.procedure.identifier || [];
    this.procedure.identifier.push(value);
    return this;
  }
  /**
   * @description Adds a value to the instantiatesCanonical array
   * @description The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
   * @param value - the value to add
   * @returns {this}
   */
  addInstantiatesCanonical(value: string): this {
    this.procedure.instantiatesCanonical = this.procedure.instantiatesCanonical || [];
    this.procedure.instantiatesCanonical.push(value);
    return this;
  }
  /**
   * @description Adds a value to the instantiatesUri array
   * @description The URL pointing to an externally maintained protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
   * @param value - the value to add
   * @returns {this}
   */
  addInstantiatesUri(value: string): this {
    this.procedure.instantiatesUri = this.procedure.instantiatesUri || [];
    this.procedure.instantiatesUri.push(value);
    return this;
  }
  /**
   * @description Adds a value to the basedOn array
   * @description A reference to a resource that contains details of the request for this procedure.
   * @param value - the value to add
   * @returns {this}
   */
  addBasedOn(value: IReference): this {
    this.procedure.basedOn = this.procedure.basedOn || [];
    this.procedure.basedOn.push(value);
    return this;
  }
  /**
   * @description Adds a value to the partOf array
   * @description A larger event of which this particular procedure is a component or step.
   * @param value - the value to add
   * @returns {this}
   */
  addPartOf(value: IReference): this {
    this.procedure.partOf = this.procedure.partOf || [];
    this.procedure.partOf.push(value);
    return this;
  }
  /**
   * @description Sets the status value
   * @description A code specifying the state of the procedure. Generally, this will be the in-progress or completed state.
   * @param value - the value to set
   * @returns {this}
   */
  setStatus(value: EventStatusType): this {
    this.procedure.status = value;
    return this;
  }

  /**
   * @description Sets the statusReason value
   * @description Captures the reason for the current state of the procedure.
   * @param value - the value to set
   * @returns {this}
   */
  setStatusReason(value: ICodeableConcept): this {
    this.procedure.statusReason = value;
    return this;
  }

  /**
   * @description Sets the category value
   * @description A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
   * @param value - the value to set
   * @returns {this}
   */
  setCategory(value: ICodeableConcept): this {
    this.procedure.category = value;
    return this;
  }

  /**
   * @description Sets the code value
   * @description The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
   * @param value - the value to set
   * @returns {this}
   */
  setCode(value: ICodeableConcept): this {
    this.procedure.code = value;
    return this;
  }

  /**
   * @description Sets the subject value
   * @description The person, animal or group on which the procedure was performed.
   * @param value - the value to set
   * @returns {this}
   */
  setSubject(value: IReference): this {
    this.procedure.subject = value;
    return this;
  }

  /**
   * @description Sets the encounter value
   * @description The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated.
   * @param value - the value to set
   * @returns {this}
   */
  setEncounter(value: IReference): this {
    this.procedure.encounter = value;
    return this;
  }

  /**
   * @description Sets the performedDateTime value
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   * @param value - the value to set
   * @returns {this}
   */
  setPerformedDateTime(value: string): this {
    this.procedure.performedDateTime = value;
    return this;
  }

  /**
   * @description Sets the performedPeriod value
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   * @param value - the value to set
   * @returns {this}
   */
  setPerformedPeriod(value: IPeriod): this {
    this.procedure.performedPeriod = value;
    return this;
  }

  /**
   * @description Sets the performedString value
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   * @param value - the value to set
   * @returns {this}
   */
  setPerformedString(value: string): this {
    this.procedure.performedString = value;
    return this;
  }

  /**
   * @description Sets the performedAge value
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   * @param value - the value to set
   * @returns {this}
   */
  setPerformedAge(value: IAge): this {
    this.procedure.performedAge = value;
    return this;
  }

  /**
   * @description Sets the performedRange value
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   * @param value - the value to set
   * @returns {this}
   */
  setPerformedRange(value: IRange): this {
    this.procedure.performedRange = value;
    return this;
  }

  /**
   * @description Sets the recorder value
   * @description Individual who recorded the record and takes responsibility for its content.
   * @param value - the value to set
   * @returns {this}
   */
  setRecorder(value: IReference): this {
    this.procedure.recorder = value;
    return this;
  }

  /**
   * @description Sets the asserter value
   * @description Individual who is making the procedure statement.
   * @param value - the value to set
   * @returns {this}
   */
  setAsserter(value: IReference): this {
    this.procedure.asserter = value;
    return this;
  }

  /**
   * @description Adds a value to the performer array
   * @description Limited to "real" people rather than equipment.
   * @param value - the value to add
   * @returns {this}
   */
  addPerformer(value: IProcedurePerformer): this {
    this.procedure.performer = this.procedure.performer || [];
    this.procedure.performer.push(value);
    return this;
  }
  /**
   * @description Sets the location value
   * @description The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
   * @param value - the value to set
   * @returns {this}
   */
  setLocation(value: IReference): this {
    this.procedure.location = value;
    return this;
  }

  /**
   * @description Adds a value to the reasonCode array
   * @description The coded reason why the procedure was performed. This may be a coded entity of some type, or may simply be present as text.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonCode(value: ICodeableConcept): this {
    this.procedure.reasonCode = this.procedure.reasonCode || [];
    this.procedure.reasonCode.push(value);
    return this;
  }
  /**
   * @description Adds a value to the reasonReference array
   * @description The justification of why the procedure was performed.
   * @param value - the value to add
   * @returns {this}
   */
  addReasonReference(value: IReference): this {
    this.procedure.reasonReference = this.procedure.reasonReference || [];
    this.procedure.reasonReference.push(value);
    return this;
  }
  /**
   * @description Adds a value to the bodySite array
   * @description Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
   * @param value - the value to add
   * @returns {this}
   */
  addBodySite(value: ICodeableConcept): this {
    this.procedure.bodySite = this.procedure.bodySite || [];
    this.procedure.bodySite.push(value);
    return this;
  }
  /**
   * @description Sets the outcome value
   * @description The outcome of the procedure - did it resolve the reasons for the procedure being performed?
   * @param value - the value to set
   * @returns {this}
   */
  setOutcome(value: ICodeableConcept): this {
    this.procedure.outcome = value;
    return this;
  }

  /**
   * @description Adds a value to the report array
   * @description This could be a histology result, pathology report, surgical report, etc.
   * @param value - the value to add
   * @returns {this}
   */
  addReport(value: IReference): this {
    this.procedure.report = this.procedure.report || [];
    this.procedure.report.push(value);
    return this;
  }
  /**
   * @description Adds a value to the complication array
   * @description Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
   * @param value - the value to add
   * @returns {this}
   */
  addComplication(value: ICodeableConcept): this {
    this.procedure.complication = this.procedure.complication || [];
    this.procedure.complication.push(value);
    return this;
  }
  /**
   * @description Adds a value to the complicationDetail array
   * @description Any complications that occurred during the procedure, or in the immediate post-performance period.
   * @param value - the value to add
   * @returns {this}
   */
  addComplicationDetail(value: IReference): this {
    this.procedure.complicationDetail = this.procedure.complicationDetail || [];
    this.procedure.complicationDetail.push(value);
    return this;
  }
  /**
   * @description Adds a value to the followUp array
   * @description If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
   * @param value - the value to add
   * @returns {this}
   */
  addFollowUp(value: ICodeableConcept): this {
    this.procedure.followUp = this.procedure.followUp || [];
    this.procedure.followUp.push(value);
    return this;
  }
  /**
   * @description Adds a value to the note array
   * @description Any other notes and comments about the procedure.
   * @param value - the value to add
   * @returns {this}
   */
  addNote(value: IAnnotation): this {
    this.procedure.note = this.procedure.note || [];
    this.procedure.note.push(value);
    return this;
  }
  /**
   * @description Adds a value to the focalDevice array
   * @description A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
   * @param value - the value to add
   * @returns {this}
   */
  addFocalDevice(value: IProcedureFocalDevice): this {
    this.procedure.focalDevice = this.procedure.focalDevice || [];
    this.procedure.focalDevice.push(value);
    return this;
  }
  /**
   * @description Adds a value to the usedReference array
   * @description Identifies medications, devices and any other substance used as part of the procedure.
   * @param value - the value to add
   * @returns {this}
   */
  addUsedReference(value: IReference): this {
    this.procedure.usedReference = this.procedure.usedReference || [];
    this.procedure.usedReference.push(value);
    return this;
  }
  /**
   * @description Adds a value to the usedCode array
   * @description Identifies coded items that were used as part of the procedure.
   * @param value - the value to add
   * @returns {this}
   */
  addUsedCode(value: ICodeableConcept): this {
    this.procedure.usedCode = this.procedure.usedCode || [];
    this.procedure.usedCode.push(value);
    return this;
  }
}
