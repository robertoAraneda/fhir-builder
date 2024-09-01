import { IBuildable } from '../base/IBuildable';
import { Duration } from '../../models';
import { IElement, QuantityComparatorType } from 'fhirtypes/dist/r4';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { ElementBuilder } from '../base/ElementBuilder';

type PrimitiveExtensionFields = keyof Pick<Duration, UnderscoreKeys<Duration>>;

interface IDurationBuilder extends IBuildable<Duration> {
  setCode(value: string): this;
  setSystem(value: string): this;
  setUnit(value: string): this;
  setValue(value: number): this;
  setComparator(value: QuantityComparatorType): this;
}

export class DurationBuilder extends ElementBuilder implements IDurationBuilder {
  private readonly duration: Duration;

  constructor() {
    super();
    this.duration = new Duration();
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.duration[param] = extension;
    return this;
  }

  build(): Duration {
    return Object.assign(this.duration, super.build());
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
