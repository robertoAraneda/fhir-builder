import { AddressTypeType, AddressUseType, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { ElementBuilder } from '../../../core/r4/builders/base/element.builder';
import { Address } from '../../models';
import { IBuildable } from '../../../core/r4/interfaces';
import { IElementBuilder } from '../../../core/r4/interfaces/element-builder.interface';

type ParamExtensionType = 'use' | 'type' | 'text' | 'line' | 'city' | 'district' | 'state' | 'postalCode' | 'country';

interface IAddressBuilder extends IBuildable<Address>, IElementBuilder {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: T extends 'line' ? IElement[] : IElement): this;
  setUse(value: AddressUseType): this;
  setType(value: AddressTypeType): this;
  setText(value: string): this;
  addLine(value: string): this;
  setMultipleLines(value: string[]): this;
  setCity(value: string): this;
  setDistrict(value: string): this;
  setState(value: string): this;
  setPostalCode(value: string): this;
  setCountry(value: string): this;
  setPeriod(value: IPeriod): this;
}

export class AddressBuilder extends ElementBuilder implements IAddressBuilder {
  private readonly address: Address;

  constructor() {
    super();
    this.address = new Address();
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: T extends 'line' ? IElement[] : IElement): this {
    if (param === 'line') {
      this.address._line = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamExtensionType, 'line'>;
      this.address[`_${localParam}`] = extension as IElement;
    }

    return this;
  }

  setUse(value: AddressUseType): this {
    this.address.use = value;
    return this;
  }

  setType(value: AddressTypeType): this {
    this.address.type = value;
    return this;
  }

  setText(value: string): this {
    this.address.text = value;
    return this;
  }

  addLine(value: string): this {
    if (!this.address.line) this.address.line = new Array<string>();
    this.address.line.push(value);
    return this;
  }

  setMultipleLines(value: string[]): this {
    this.address.line = value;
    return this;
  }

  setCity(value: string): this {
    this.address.city = value;
    return this;
  }

  setDistrict(value: string): this {
    this.address.district = value;
    return this;
  }

  setState(value: string): this {
    this.address.state = value;
    return this;
  }

  setPostalCode(value: string): this {
    this.address.postalCode = value;
    return this;
  }

  setCountry(value: string): this {
    this.address.country = value;
    return this;
  }

  setPeriod(value: IPeriod): this {
    this.address.period = value;
    return this;
  }

  build(): Address {
    Object.assign(this.address, { ...super.entity() });
    return this.address;
  }
}
