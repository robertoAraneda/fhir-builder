import { IElementBuilder } from '../base/element-builder.interface';
import { IBuildable } from '../base/buildable.interface';
import { Duration } from '../../models';
import { IElement, IExtension, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<Duration, UnderscoreKeys<Duration>>;

interface IDurationBuilder extends IElementBuilder, IBuildable<Duration> {
  setCode(value: string): this;
  setSystem(value: string): this;
  setUnit(value: string): this;
  setValue(value: number): this;
  setComparator(value: QuantityComparatorType): this;
}

export class DurationBuilder implements IDurationBuilder {
  private readonly duration: Duration;

  constructor() {
    this.duration = new Duration();
  }

  setId(id: string): this {
    this.duration.id = id;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.duration.extension = this.duration.extension || [];
    this.duration.extension.push(extension);
    return this;
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.duration[param] = extension;
    return this;
  }

  build(): Duration {
    return this.duration;
  }

  setCode(value: string): this {
    this.duration.code = value;
    return this;
  }

  setSystem(value: string): this {
    this.duration.system = value;
    return this;
  }

  setUnit(value: string): this {
    this.duration.unit = value;
    return this;
  }

  setValue(value: number): this {
    this.duration.value = value;
    return this;
  }

  setComparator(value: QuantityComparatorType): this {
    this.duration.comparator = value;
    return this;
  }
}
