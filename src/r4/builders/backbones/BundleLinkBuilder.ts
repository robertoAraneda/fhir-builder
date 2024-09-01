import { IElement } from 'fhirtypes/dist/r4';
import { BundleLink } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<BundleLink>;

/**
 * @description Interface for chaining the building of a BundleLink
 * @interface IBundleLinkBuilder
 * @extends {IBuildable<BundleLink>}
 */
interface IBundleLinkBuilder extends IBuildable<BundleLink> {
  setRelation(value: string): this;
  setUrl(value: string): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a BundleLink
 * @class BundleLinkBuilder
 * @extends {BackboneBuilder}
 * @implements {IBundleLinkBuilder}
 * @author Roberto Araneda Espinoza
 */
export class BundleLinkBuilder extends BackboneBuilder implements IBundleLinkBuilder {
  private readonly bundleLink: BundleLink;

  constructor() {
    super();
    this.bundleLink = new BundleLink();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.bundleLink[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {BundleLink}
   */
  build(): BundleLink {
    return Object.assign(this.bundleLink, super.build());
  }

  /**
   * @description Sets the relation value
   * @description A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
   * @param value - the value to set
   * @returns {this}
   */
  setRelation(value: string): this {
    this.bundleLink.relation = value;
    return this;
  }

  /**
   * @description Sets the url value
   * @description The reference details for the link.
   * @param value - the value to set
   * @returns {this}
   */
  setUrl(value: string): this {
    this.bundleLink.url = value;
    return this;
  }
}
