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
import { Coverage } from '../../models';
import { DomainResourceBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<Coverage>;

/**
 * @description Interface for chaining the building of a Coverage
 * @interface ICoverageBuilder
 * @extends {IBuildable<Coverage>}
 */
interface ICoverageBuilder extends IBuildable<Coverage> {
  addIdentifier(value: IIdentifier): this;
  setStatus(value: FinancialResourceStatusCodesType): this;
  setType(value: ICodeableConcept): this;
  setPolicyHolder(value: IReference): this;
  setSubscriber(value: IReference): this;
  setSubscriberId(value: string): this;
  setBeneficiary(value: IReference): this;
  setDependent(value: string): this;
  setRelationship(value: ICodeableConcept): this;
  setPeriod(value: IPeriod): this;
  addPayor(value: IReference): this;
  addClass(value: ICoverageClass): this;
  setOrder(value: number): this;
  setNetwork(value: string): this;
  addCostToBeneficiary(value: ICoverageCostToBeneficiary): this;
  setSubrogation(value: boolean): this;
  addContract(value: IReference): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a Coverage
 * @class CoverageBuilder
 * @extends {DomainResourceBuilder}
 * @implements {ICoverageBuilder}
 * @author Roberto Araneda Espinoza
 */
export class CoverageBuilder extends DomainResourceBuilder implements ICoverageBuilder {
  private readonly coverage: Coverage;

  constructor() {
    super();
    this.coverage = new Coverage();
  }

  /**
   * @description Sets the resource type to Coverage
   * @param json - the json to parse
   * @returns {this}
   */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.coverage, incomingData);
    return this;
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.coverage[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {Coverage}
   */
  build(): Coverage {
    return Object.assign(this.coverage, super.build());
  }

  /**
   * @description Adds a value to the identifier array
   * @description A unique identifier assigned to this coverage.
   * @param value - the value to add
   * @returns {this}
   */
  addIdentifier(value: IIdentifier): this {
    this.coverage.identifier = this.coverage.identifier || [];
    this.coverage.identifier.push(value);
    return this;
  }
  /**
    * @description Sets the status value
    * @description The status of the resource instance. 
active | cancelled | draft | entered-in-error.
    * @param value - the value to set
    * @returns {this}
    */
  setStatus(value: FinancialResourceStatusCodesType): this {
    this.coverage.status = value;
    return this;
  }

  /**
   * @description Sets the type value
   * @description The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
   * @param value - the value to set
   * @returns {this}
   */
  setType(value: ICodeableConcept): this {
    this.coverage.type = value;
    return this;
  }

  /**
   * @description Sets the policyHolder value
   * @description The party who 'owns' the insurance policy.
   * @param value - the value to set
   * @returns {this}
   */
  setPolicyHolder(value: IReference): this {
    this.coverage.policyHolder = value;
    return this;
  }

  /**
   * @description Sets the subscriber value
   * @description The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.
   * @param value - the value to set
   * @returns {this}
   */
  setSubscriber(value: IReference): this {
    this.coverage.subscriber = value;
    return this;
  }

  /**
   * @description Sets the subscriberId value
   * @description The insurer assigned ID for the Subscriber.
   * @param value - the value to set
   * @returns {this}
   */
  setSubscriberId(value: string): this {
    this.coverage.subscriberId = value;
    return this;
  }

  /**
   * @description Sets the beneficiary value
   * @description The party who benefits from the insurance coverage; the patient when products and/or services are provided.
   * @param value - the value to set
   * @returns {this}
   */
  setBeneficiary(value: IReference): this {
    this.coverage.beneficiary = value;
    return this;
  }

  /**
   * @description Sets the dependent value
   * @description A unique identifier for a dependent under the coverage.
   * @param value - the value to set
   * @returns {this}
   */
  setDependent(value: string): this {
    this.coverage.dependent = value;
    return this;
  }

  /**
   * @description Sets the relationship value
   * @description The relationship of beneficiary (patient) to the subscriber.
   * @param value - the value to set
   * @returns {this}
   */
  setRelationship(value: ICodeableConcept): this {
    this.coverage.relationship = value;
    return this;
  }

  /**
   * @description Sets the period value
   * @description Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
   * @param value - the value to set
   * @returns {this}
   */
  setPeriod(value: IPeriod): this {
    this.coverage.period = value;
    return this;
  }

  /**
   * @description Adds a value to the payor array
   * @description The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements.
   * @param value - the value to add
   * @returns {this}
   */
  addPayor(value: IReference): this {
    this.coverage.payor = this.coverage.payor || [];
    this.coverage.payor.push(value);
    return this;
  }
  /**
   * @description Adds a value to the class array
   * @description A suite of underwriter specific classifiers.
   * @param value - the value to add
   * @returns {this}
   */
  addClass(value: ICoverageClass): this {
    this.coverage.class = this.coverage.class || [];
    this.coverage.class.push(value);
    return this;
  }
  /**
   * @description Sets the order value
   * @description The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
   * @param value - the value to set
   * @returns {this}
   */
  setOrder(value: number): this {
    this.coverage.order = value;
    return this;
  }

  /**
   * @description Sets the network value
   * @description The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
   * @param value - the value to set
   * @returns {this}
   */
  setNetwork(value: string): this {
    this.coverage.network = value;
    return this;
  }

  /**
   * @description Adds a value to the costToBeneficiary array
   * @description A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been  included on the health card.
   * @param value - the value to add
   * @returns {this}
   */
  addCostToBeneficiary(value: ICoverageCostToBeneficiary): this {
    this.coverage.costToBeneficiary = this.coverage.costToBeneficiary || [];
    this.coverage.costToBeneficiary.push(value);
    return this;
  }
  /**
   * @description Sets the subrogation value
   * @description When 'subrogation=true' this insurance instance has been included not for adjudication but to provide insurers with the details to recover costs.
   * @param value - the value to set
   * @returns {this}
   */
  setSubrogation(value: boolean): this {
    this.coverage.subrogation = value;
    return this;
  }

  /**
   * @description Adds a value to the contract array
   * @description The policy(s) which constitute this insurance coverage.
   * @param value - the value to add
   * @returns {this}
   */
  addContract(value: IReference): this {
    this.coverage.contract = this.coverage.contract || [];
    this.coverage.contract.push(value);
    return this;
  }
}
