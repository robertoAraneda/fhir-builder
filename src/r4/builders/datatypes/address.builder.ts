import { AddressTypeType, AddressUseType, IAddress, IElement, IExtension, IPeriod } from 'fhirtypes/dist/r4';
import { Address } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { IElementBuilder } from '../base/element-builder.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<IAddress, UnderscoreKeys<IAddress>>;

interface IAddressBuilder extends IElementBuilder, IBuildable<Address> {
  setUse(value: AddressUseType): this;
  setType(value: AddressTypeType): this;
  setText(value: string): this;
  addLine(value: string): this;
  setCity(value: string): this;
  setDistrict(value: string): this;
  setState(value: string): this;
  setPostalCode(value: string): this;
  setCountry(value: string): this;
  setPeriod(value: IPeriod): this;
}

export class AddressBuilder implements IAddressBuilder {
  private readonly address: Address;

  constructor() {
    this.address = new Address();
  }

  setId(id: string): this {
    this.address.id = id;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.address.extension = this.address.extension || [];
    this.address.extension.push(extension);
    return this;
  }

  addPrimitiveExtension<T extends PrimitiveExtensionFields>(
    param: T,
    extension: T extends '_line' ? IElement[] : IElement,
  ): this {
    if (param === '_line') {
      this.address._line = extension as IElement[];
    } else {
      const localParam = param as Exclude<PrimitiveExtensionFields, '_line'>;
      this.address[`${localParam}`] = extension as IElement;
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
    return this.address;
  }
}
