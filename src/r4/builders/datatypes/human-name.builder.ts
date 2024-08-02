import { ElementBuilder } from './element.builder';
import {
  HumanNameMultipleParamType,
  HumanNameParamType,
  HumanNameBuilderInterface,
} from '../../interfaces/human-name-builder.interface';
import { IElement, IHumanName, IPeriod, NameUseType } from 'fhirtypes/dist/r4';
import { HumanName } from '../../models/datatypes/human-name.model';

export class HumanNameBuilder extends ElementBuilder implements HumanNameBuilderInterface {
  private readonly humanName: IHumanName;

  constructor() {
    super();

    this.humanName = {} as IHumanName;
  }

  addParamExtension<T extends HumanNameParamType>(
    param: T,
    extension: T extends 'given' | 'prefix' | 'suffix' ? IElement[] : IElement,
  ): this {
    const includes = ['given', 'prefix', 'suffix'];
    if (includes.includes(param)) {
      const localMultipleParam = param as HumanNameMultipleParamType;
      this.humanName[`_${localMultipleParam}`] = extension as IElement[];
    } else {
      const localParam = param as Exclude<HumanNameParamType, 'given' | 'prefix' | 'suffix'>;
      this.humanName[`_${localParam}`] = extension as IElement;
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

  setMultipleGiven(value: string[]): this {
    this.humanName.given = value;
    return this;
  }

  addPrefix(value: string): this {
    this.humanName.prefix = this.humanName.prefix || [];
    this.humanName.prefix.push(value);
    return this;
  }

  setMultiplePrefix(value: string[]): this {
    this.humanName.prefix = value;
    return this;
  }

  addSuffix(value: string): this {
    this.humanName.suffix = this.humanName.suffix || [];
    this.humanName.suffix.push(value);
    return this;
  }

  setMultipleSuffix(value: string[]): this {
    this.humanName.suffix = value;
    return this;
  }

  setPeriod(value: IPeriod): this {
    this.humanName.period = value;
    return this;
  }

  build(): HumanName {
    Object.assign(this.humanName, { ...super.entity() });
    return new HumanName(this.humanName);
  }
}
