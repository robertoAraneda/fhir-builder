import { IBuildable } from '../base/IBuildable';
import { Money } from '../../models/datatypes/Money';
import { CurrencyCodeType } from 'fhirtypes/dist/r4/types';
import { ElementBuilder } from '../base/ElementBuilder';
import { IElement } from 'fhirtypes/dist/r4';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<Money, UnderscoreKeys<Money>>;

interface IMoneyBuilder extends IBuildable<Money> {
  setValue(value: number): this;
  setCurrency(currency: CurrencyCodeType): this;
}

export class MoneyBuilder extends ElementBuilder implements IMoneyBuilder {
  private readonly money: Money;

  constructor() {
    super();
    this.money = new Money();
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.money[param] = extension;
    return this;
  }

  setValue(value: number): this {
    this.money.value = value;
    return this;
  }

  setCurrency(currency: CurrencyCodeType): this {
    this.money.currency = currency;
    return this;
  }

  build(): Money {
    return Object.assign(this.money, super.build());
  }
}
