import { IAddress } from "../interfaces/IAddress";
import { Address } from "../models";

type ParamExtensionType = 'use' | 'type' | 'text' | 'line' | 'city' | 'district' | 'state' | 'postalCode' | 'country';

interface IAddressBuilder{
  setText(value: string): AddressBuilder;
}

export class AddressBuilder implements IAddressBuilder {
  private readonly address: IAddress;

  constructor() {
    this.address = {} as IAddress;
  }


  setText(value: string): AddressBuilder {
    this.address.text = value;
    return this;
  }


  build(): Address {
    return new Address(this.address)
  }
}
