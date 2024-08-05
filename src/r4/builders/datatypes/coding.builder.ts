import { ElementBuilder } from '../../../core/r4/builders/base/element.builder';
import { IElement } from 'fhirtypes/dist/r4';
import { CodingParamExtensionType } from '../../../core/r4/types';
import { Coding } from '../../models';
import { IBuildable } from '../../../core/r4/interfaces';
import { IElementBuilder } from '../../../core/r4/interfaces/element-builder.interface';

interface ICodingBuilder extends IBuildable<Coding>, IElementBuilder {
  addParamExtension(param: CodingParamExtensionType, extension: IElement): this;
  setSystem(value: string): this;
  setVersion(value: string): this;
  setCode(value: string): this;
  setDisplay(value: string): this;
  setUserSelected(value: boolean): this;
}

/**
 * @description Coding builder
 *
 */
export class CodingBuilder extends ElementBuilder implements ICodingBuilder {
  private readonly coding: Coding;

  constructor() {
    super();

    this.coding = new Coding();
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
    return this.coding;
  }
}
