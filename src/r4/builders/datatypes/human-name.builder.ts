import { ElementBuilder } from '../../../core/r4/builders/base/element.builder';
import { IElement, IPeriod, NameUseType } from 'fhirtypes/dist/r4';
import { HumanName } from '../../models';
import { HumanNameParamType, HumanNameArrayParamType } from '../../../core/r4/types';
import { IBuildable } from '../../../core/r4/interfaces';
import { IElementBuilder } from '../../../core/r4/interfaces/element-builder.interface';

interface IHumanNameBuilder extends IBuildable<HumanName>, IElementBuilder {
  addParamExtension<T extends HumanNameParamType>(
    param: T,
    extension: T extends HumanNameArrayParamType ? IElement[] : IElement,
  ): this;
  setUse(value: NameUseType): this;
  setText(value: string): this;
  setFamily(value: string): this;
  addGiven(value: string): this;
  setMultipleGiven(value: string[]): this;
  addPrefix(value: string): this;
  setMultiplePrefix(value: string[]): this;
  addSuffix(value: string): this;
  setMultipleSuffix(value: string[]): this;
  setPeriod(value: IPeriod): this;
}

export class HumanNameBuilder extends ElementBuilder implements IHumanNameBuilder {
  private readonly humanName: HumanName;

  constructor() {
    super();

    this.humanName = new HumanName();
  }

  addParamExtension<T extends HumanNameParamType>(
    param: T,
    extension: T extends HumanNameArrayParamType ? IElement[] : IElement,
  ): this {
    const includes = ['given', 'prefix', 'suffix'];
    if (includes.includes(param)) {
      const localMultipleParam = param as HumanNameArrayParamType;
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
    return this.humanName;
  }
}
