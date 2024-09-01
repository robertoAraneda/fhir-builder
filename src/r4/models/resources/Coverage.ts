import {
  IIdentifier,
  IElement,
  ICodeableConcept,
  IReference,
  IPeriod,
  ICoverageClass,
  ICoverageCostToBeneficiary,
  FinancialResourceStatusCodesType,
} from 'fhirtypes/dist/r4';
import { ICoverage, IOperationOutcome } from 'fhirtypes/dist/r4';
import { DomainResource, IValidatable, ISerializable } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for Coverage Resource
 * @property {string} resourceType
 * @property {IIdentifier[]} identifier
 * @property {FinancialResourceStatusCodesType} status
 * @property {IElement} _status
 * @property {ICodeableConcept} type
 * @property {IReference} policyHolder
 * @property {IReference} subscriber
 * @property {string} subscriberId
 * @property {IElement} _subscriberId
 * @property {IReference} beneficiary
 * @property {string} dependent
 * @property {IElement} _dependent
 * @property {ICodeableConcept} relationship
 * @property {IPeriod} period
 * @property {IReference[]} payor
 * @property {ICoverageClass[]} class
 * @property {number} order
 * @property {IElement} _order
 * @property {string} network
 * @property {IElement} _network
 * @property {ICoverageCostToBeneficiary[]} costToBeneficiary
 * @property {boolean} subrogation
 * @property {IElement} _subrogation
 * @property {IReference[]} contract
 * @author Roberto Araneda Espinoza
 */
export class Coverage extends DomainResource implements ICoverage, IValidatable, ISerializable {
  /**
   * @description The type of resource
   */
  resourceType? = 'Coverage';

  /**
   * @description A unique identifier assigned to this coverage.
   */
  identifier?: IIdentifier[];

  /**
   * @description The status of the resource instance. 
active | cancelled | draft | entered-in-error.
   */
  status: FinancialResourceStatusCodesType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
   */
  type?: ICodeableConcept;

  /**
   * @description The party who 'owns' the insurance policy.
   */
  policyHolder?: IReference;

  /**
   * @description The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.
   */
  subscriber?: IReference;

  /**
   * @description The insurer assigned ID for the Subscriber.
   */
  subscriberId?: string;

  /**
   * @description Extensions for subscriberId
   */
  _subscriberId?: IElement;

  /**
   * @description The party who benefits from the insurance coverage; the patient when products and/or services are provided.
   */
  beneficiary: IReference;

  /**
   * @description A unique identifier for a dependent under the coverage.
   */
  dependent?: string;

  /**
   * @description Extensions for dependent
   */
  _dependent?: IElement;

  /**
   * @description The relationship of beneficiary (patient) to the subscriber.
   */
  relationship?: ICodeableConcept;

  /**
   * @description Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
   */
  period?: IPeriod;

  /**
   * @description The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements.
   */
  payor: IReference[];

  /**
   * @description A suite of underwriter specific classifiers.
   */
  class?: ICoverageClass[];

  /**
   * @description The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
   */
  order?: number;

  /**
   * @description Extensions for order
   */
  _order?: IElement;

  /**
   * @description The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
   */
  network?: string;

  /**
   * @description Extensions for network
   */
  _network?: IElement;

  /**
   * @description A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been  included on the health card.
   */
  costToBeneficiary?: ICoverageCostToBeneficiary[];

  /**
   * @description When 'subrogation=true' this insurance instance has been included not for adjudication but to provide insurers with the details to recover costs.
   */
  subrogation?: boolean;

  /**
   * @description Extensions for subrogation
   */
  _subrogation?: IElement;

  /**
   * @description The policy(s) which constitute this insurance coverage.
   */
  contract?: IReference[];

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
    return `Coverage${JSON.stringify(this.toJson())}`;
  }

  /**
   * @description Returns a pretty string representation of the model
   * @returns {string}
   */
  toPrettyString(): string {
    return `Coverage${JSON.stringify(this.toJson(), null, 2)}`;
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
    return ConformanceValidator('Coverage', this);
  }

  constructor(args?: ICoverage) {
    super();
    if (args) Object.assign(this, args);
  }
}
