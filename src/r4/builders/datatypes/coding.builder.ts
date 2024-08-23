import { IElement, IExtension } from 'fhirtypes/dist/r4';
import { Coding } from '../../models';
import { IElementBuilder } from '../base/element-builder.interface';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<Coding, UnderscoreKeys<Coding>>;

interface ICodingBuilder extends IElementBuilder, IBuildable<Coding> {
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
export class CodingBuilder implements ICodingBuilder {
  private readonly coding: Coding;

  constructor() {
    this.coding = new Coding();
  }

  setId(id: string): this {
    this.coding.id = id;
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
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.coding[param] = extension;
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
   * @returns {Coding} The coding
   */
  build(): Coding {
    return this.coding;
  }
}
