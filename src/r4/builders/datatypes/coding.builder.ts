import { ElementBuilder } from './element.builder';
import { ICoding, IElement } from 'fhirtypes/dist/r4';
import { ICodingBuilder } from '../../interfaces';
import { CodingParamExtensionType } from '../../types';
import { Coding } from '../../models';

/**
 * @description Coding builder
 *
 */
export class CodingBuilder extends ElementBuilder implements ICodingBuilder {
  private readonly coding: ICoding;

  constructor() {
    super();

    this.coding = {} as ICoding;
  }

  /**
   * @description Add a param extension to the coding
   * @param param
   * @param extension
   */
  addParamExtension(param: CodingParamExtensionType, extension: IElement): this {
    this.coding[`_${param}`] = extension;
    return this;
  }

  /**
   * @description Set the system of the coding
   * @param system
   * @returns {CodingBuilder} The builder
   */
  setSystem(system: string): this {
    this.coding.system = system;
    return this;
  }

  /**
   * @description Set the version of the coding
   * @param version
   * @returns {CodingBuilder} The builder
   */
  setVersion(version: string): this {
    this.coding.version = version;
    return this;
  }

  /**
   * @description Set the code of the coding
   * @param code
   * @returns {CodingBuilder} The builder
   */
  setCode(code: string): this {
    this.coding.code = code;
    return this;
  }

  /**
   * @description Set the display of the coding
   * @param display
   * @returns {CodingBuilder} The builder
   */
  setDisplay(display: string): this {
    this.coding.display = display;
    return this;
  }

  /**
   * @description Set the userSelected of the coding
   * @param userSelected
   * @returns {CodingBuilder} The builder
   */
  setUserSelected(userSelected: boolean): this {
    this.coding.userSelected = userSelected;
    return this;
  }

  /**
   * @description Return the coding as a ICoding object
   * @returns {ICoding} The coding
   */
  build(): Coding {
    Object.assign(this.coding, { ...super.entity() });
    return new Coding(this.coding);
  }
}
