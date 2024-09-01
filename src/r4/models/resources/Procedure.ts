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
import { IProcedure, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Procedure Resource
 * @see {@link https://www.hl7.org/fhir/R4/procedure.html} for more information about this class
 * @description Elements defined in Ancestors: id, meta, implicitRules, language, text, contained, extension, modifierExtension
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {string[]} instantiatesCanonical
 * @property {string[]} instantiatesUri
 * @property {IElement[]} _instantiatesUri
 * @property {IReference[]} basedOn
 * @property {IReference[]} partOf
 * @property {EventStatusType} status
 * @property {IElement} _status
 * @property {ICodeableConcept} statusReason
 * @property {ICodeableConcept} category
 * @property {ICodeableConcept} code
 * @property {IReference} subject
 * @property {IReference} encounter
 * @property {string} performedDateTime
 * @property {IElement} _performedDateTime
 * @property {IPeriod} performedPeriod
 * @property {string} performedString
 * @property {IElement} _performedString
 * @property {IAge} performedAge
 * @property {IRange} performedRange
 * @property {IReference} recorder
 * @property {IReference} asserter
 * @property {IProcedurePerformer[]} performer
 * @property {IReference} location
 * @property {ICodeableConcept[]} reasonCode
 * @property {IReference[]} reasonReference
 * @property {ICodeableConcept[]} bodySite
 * @property {ICodeableConcept} outcome
 * @property {IReference[]} report
 * @property {ICodeableConcept[]} complication
 * @property {IReference[]} complicationDetail
 * @property {ICodeableConcept[]} followUp
 * @property {IAnnotation[]} note
 * @property {IProcedureFocalDevice[]} focalDevice
 * @property {IReference[]} usedReference
 * @property {ICodeableConcept[]} usedCode
 * @author Roberto Araneda Espinoza
 */
export class Procedure extends DomainResource implements IProcedure, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Procedure';

  /**
   * @description Business identifiers assigned to this procedure by the performer or other systems which remain constant as the resource is updated and is propagated from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
   */
  instantiatesCanonical?: string[];

  /**
   * @description The URL pointing to an externally maintained protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
   */
  instantiatesUri?: string[];

  /**
   * @description Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * @description A reference to a resource that contains details of the request for this procedure.
   */
  basedOn?: IReference[];

  /**
   * @description A larger event of which this particular procedure is a component or step.
   */
  partOf?: IReference[];

  /**
   * @description A code specifying the state of the procedure. Generally, this will be the in-progress or completed state.
   */
  status: EventStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Captures the reason for the current state of the procedure.
   */
  statusReason?: ICodeableConcept;

  /**
   * @description A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
   */
  category?: ICodeableConcept;

  /**
   * @description The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
   */
  code?: ICodeableConcept;

  /**
   * @description The person, animal or group on which the procedure was performed.
   */
  subject: IReference;

  /**
   * @description The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedDateTime?: string;

  /**
   * @description Extensions for performedDateTime
   */
  _performedDateTime?: IElement;

  /**
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedPeriod?: IPeriod;

  /**
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedString?: string;

  /**
   * @description Extensions for performedString
   */
  _performedString?: IElement;

  /**
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedAge?: IAge;

  /**
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedRange?: IRange;

  /**
   * @description Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: IReference;

  /**
   * @description Individual who is making the procedure statement.
   */
  asserter?: IReference;

  /**
   * @description Limited to "real" people rather than equipment.
   */
  performer?: IProcedurePerformer[];

  /**
   * @description The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
   */
  location?: IReference;

  /**
   * @description The coded reason why the procedure was performed. This may be a coded entity of some type, or may simply be present as text.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description The justification of why the procedure was performed.
   */
  reasonReference?: IReference[];

  /**
   * @description Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
   */
  bodySite?: ICodeableConcept[];

  /**
   * @description The outcome of the procedure - did it resolve the reasons for the procedure being performed?
   */
  outcome?: ICodeableConcept;

  /**
   * @description This could be a histology result, pathology report, surgical report, etc.
   */
  report?: IReference[];

  /**
   * @description Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
   */
  complication?: ICodeableConcept[];

  /**
   * @description Any complications that occurred during the procedure, or in the immediate post-performance period.
   */
  complicationDetail?: IReference[];

  /**
   * @description If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
   */
  followUp?: ICodeableConcept[];

  /**
   * @description Any other notes and comments about the procedure.
   */
  note?: IAnnotation[];

  /**
   * @description A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
   */
  focalDevice?: IProcedureFocalDevice[];

  /**
   * @description Identifies medications, devices and any other substance used as part of the procedure.
   */
  usedReference?: IReference[];

  /**
   * @description Identifies coded items that were used as part of the procedure.
   */
  usedCode?: ICodeableConcept[];

  /**
   * @description Returns a JSON representation of the model
   * @returns {Record<string, any>}
   */
  toJson(): Record<string, any> {
    return JSON.parse(JSON.stringify(this));
  }

  /**
   * @description Returns a string representation of the model
   * @returns {string}
   */
  toString(): string {
    return `Procedure${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Procedure${JSON.stringify(this.toJson(), null, 2)}`;
  }

  /**
   * @description Returns a serialized string representation of the model
   * @returns {string}
   */
  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  /**
   * @description Validates the model
   * @returns {isValid: boolean, operationOutcome: IOperationOutcome}
   */
  validate(): { isValid: boolean; operationOutcome: IOperationOutcome } {
    return ConformanceValidator('Procedure', this);
  }

  constructor(args?: IProcedure) {
    super();
    if (args) Object.assign(this, args);
  }
}
