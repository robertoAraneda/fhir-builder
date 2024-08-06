import { IElement, IExtension } from 'fhirtypes/dist/r4';
import { CodingParamExtensionType } from '../../types';
import { Coding } from '../../models';

interface ICodingBuilder {
  // Element properties
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;

  // Coding properties
  addParamExtension(param: CodingParamExtensionType, extension: IElement): this;
  setSystem(value: string): this;
  setVersion(value: string): this;
  setCode(value: string): this;
  setDisplay(value: string): this;
  setUserSelected(value: boolean): this;

  // Build
  build(): Coding;
}

/**
 * @description Coding builder
 *
 */
export class CodingBuilder implements ICodingBuilder {
  private readonly coding: Coding;

  constructor() {
    this.coding = new Coding();
  }
  setId(id: string): this {
    this.coding.id = id;
    return this;
  }

  setMultipleExtension(extension: IExtension[]): this {
    this.coding.extension = extension;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.coding.extension = this.coding.extension || [];
    this.coding.extension.push(extension);
    return this;
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
    return this.coding;
  }
}
