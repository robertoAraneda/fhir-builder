import { IElement } from 'fhirtypes/dist/r4';
import { BundleSearch } from '../../models';
import { BackboneBuilder, IBuildable } from '../base';
import { ExtractUnderscoreKeys } from '../../../core/commons/utils';

// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<BundleSearch>;

/**
 * @description Interface for chaining the building of a BundleSearch
 * @interface IBundleSearchBuilder
 * @extends {IBuildable<BundleSearch>}
 */
interface IBundleSearchBuilder extends IBuildable<BundleSearch> {
  setMode(value: string): this;
  setScore(value: number): this;
}

/**
 * @version R4 (v4.0.1)
 * @summary FHIR® Specification by HL7®
 * @description Class for building a BundleSearch
 * @class BundleSearchBuilder
 * @extends {BackboneBuilder}
 * @implements {IBundleSearchBuilder}
 * @author Roberto Araneda Espinoza
 */
export class BundleSearchBuilder extends BackboneBuilder implements IBundleSearchBuilder {
  private readonly bundleSearch: BundleSearch;

  constructor() {
    super();
    this.bundleSearch = new BundleSearch();
  }

  /**
   * @description Adds a primitive extension to the element
   * @param param - the field to add the extension to
   * @param extension - the extension to add
   * @returns {this}
   * @example addPrimitiveExtension('_value', { value: 'test' })
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.bundleSearch[param] = extension;
    return this;
  }

  /**
   * @description Builds the model
   * @returns {BundleSearch}
   */
  build(): BundleSearch {
    return Object.assign(this.bundleSearch, super.build());
  }

  /**
    * @description Sets the mode value
    * @description Why this entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
match | include | outcome.
    * @param value - the value to set
    * @returns {this}
    */
  setMode(value: string): this {
    this.bundleSearch.mode = value;
    return this;
  }

  /**
   * @description Sets the score value
   * @description When searching, the server's search ranking score for the entry.
   * @param value - the value to set
   * @returns {this}
   */
  setScore(value: number): this {
    this.bundleSearch.score = value;
    return this;
  }
}
