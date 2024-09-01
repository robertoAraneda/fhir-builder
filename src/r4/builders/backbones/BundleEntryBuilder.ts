import { IBundleLink, IElement, IResource, IBundleSearch, IBundleRequest, IBundleResponse } from 'fhirtypes/dist/r4';
import { BundleEntry } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<BundleEntry>;

/**
 * @description Interface for chaining the building of a BundleEntry
 * @interface IBundleEntryBuilder
 * @extends {IBuildable<BundleEntry>}
 */
interface IBundleEntryBuilder extends IBuildable<BundleEntry> {
  addLink(value: IBundleLink): this;
  setFullUrl(value: string): this;
  setResource(value: IResource & Record<string, any>): this;
  setSearch(value: IBundleSearch): this;
  setRequest(value: IBundleRequest): this;
  setResponse(value: IBundleResponse): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a BundleEntry
 * @class BundleEntryBuilder
 * @extends {BackboneBuilder}
 * @implements {IBundleEntryBuilder}
 * @author Roberto Araneda Espinoza
 */
export class BundleEntryBuilder extends BackboneBuilder implements IBundleEntryBuilder {
  private readonly bundleEntry: BundleEntry;

  constructor() {
    super();
    this.bundleEntry = new BundleEntry();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.bundleEntry[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {BundleEntry}
   */
  build(): BundleEntry {
    return Object.assign(this.bundleEntry, super.build());
  }

  /**
   * @description Adds a value to the link array
   * @description A series of links that provide context to this entry.
   * @param value - the value to add
   * @returns {this}
   */
  addLink(value: IBundleLink): this {
    this.bundleEntry.link = this.bundleEntry.link || [];
    this.bundleEntry.link.push(value);
    return this;
  }
  /**
   * @description Sets the fullUrl value
   * @description The Absolute URL for the resource.  The fullUrl SHALL NOT disagree with the id in the resource - i.e. if the fullUrl is not a urn:uuid, the URL shall be version-independent URL consistent with the Resource.id. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that:
   * fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle)
   * Results from operations might involve resources that are not identified.
   * @param value - the value to set
   * @returns {this}
   */
  setFullUrl(value: string): this {
    this.bundleEntry.fullUrl = value;
    return this;
  }

  /**
   * @description Sets the resource value
   * @description The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type.
   * @param value - the value to set
   * @returns {this}
   */
  setResource(value: IResource & Record<string, any>): this {
    this.bundleEntry.resource = value;
    return this;
  }

  /**
   * @description Sets the search value
   * @description Information about the search process that lead to the creation of this entry.
   * @param value - the value to set
   * @returns {this}
   */
  setSearch(value: IBundleSearch): this {
    this.bundleEntry.search = value;
    return this;
  }

  /**
   * @description Sets the request value
   * @description Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
   * @param value - the value to set
   * @returns {this}
   */
  setRequest(value: IBundleRequest): this {
    this.bundleEntry.request = value;
    return this;
  }

  /**
   * @description Sets the response value
   * @description Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
   * @param value - the value to set
   * @returns {this}
   */
  setResponse(value: IBundleResponse): this {
    this.bundleEntry.response = value;
    return this;
  }
}
