import { IElement, IPeriod, NameUseType } from 'fhirtypes/dist/r4';
import { HumanName } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { ElementBuilder } from '../base/element.builder';

type PrimitiveExtensionFields = keyof Pick<HumanName, UnderscoreKeys<HumanName>>;

interface IHumanNameBuilder extends IBuildable<HumanName> {
  setUse(value: NameUseType): this;
  setText(value: string): this;
  setFamily(value: string): this;
  addGiven(value: string): this;
  addPrefix(value: string): this;
  addSuffix(value: string): this;
  /**
   * Set period
   * @param value
   * @returns {HumanNameBuilder}
   */
  setPeriod(value: IPeriod): this;
}

export class HumanNameBuilder extends ElementBuilder implements IHumanNameBuilder {
  private readonly humanName: HumanName;

  constructor() {
    super();
    this.humanName = new HumanName();
  }

  addPrimitiveExtension<T extends PrimitiveExtensionFields>(
    param: T,
    extension: T extends '_given' | '_prefix' | '_suffix' ? IElement[] : IElement,
  ): this {
    const includes = ['_given', '_prefix', '_suffix'];
    if (includes.includes(param)) {
      this.humanName[param] = extension as IElement[];
    } else {
      const localParam = param as Exclude<PrimitiveExtensionFields, '_given' | '_prefix' | '_suffix'>;
      this.humanName[localParam] = extension as IElement;
    }
    return this;
  }

  setUse(value: NameUseType): this {
    this.humanName.use = value;
    return this;
  }

  setText(value: string): this {
    this.humanName.text = value;
    return this;
  }

  setFamily(value: string): this {
    this.humanName.family = value;
    return this;
  }

  addGiven(value: string): this {
    this.humanName.given = this.humanName.given || [];
    this.humanName.given.push(value);
    return this;
  }

  addPrefix(value: string): this {
    this.humanName.prefix = this.humanName.prefix || [];
    this.humanName.prefix.push(value);
    return this;
  }

  addSuffix(value: string): this {
    this.humanName.suffix = this.humanName.suffix || [];
    this.humanName.suffix.push(value);
    return this;
  }

  /**
   * Set period
   * @param value
   * @returns {HumanNameBuilder}
   */
  setPeriod(value: IPeriod): this {
    this.humanName.period = value;
    return this;
  }

  build(): HumanName {
    return Object.assign(this.humanName, super.build());
  }
}
