import { IElementBuilder } from '../base/element-builder.interface';
import { IBuildable } from '../base/buildable.interface';
import { Repeat } from '../../models';
import { IDuration, IElement, IPeriod, IRange } from 'fhirtypes/dist/r4';
import { DaysOfWeekType, EventTimingType, UnitsOfTimeType } from 'fhirtypes/dist/r4/types';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

interface TypeMap {
  boundsDuration: IDuration;
  boundsRange: IRange;
  boundsPeriod: IPeriod;
}

type BoundValue<T extends keyof TypeMap> = TypeMap[T];
type PrimitiveExtensionFields = keyof Pick<Repeat, UnderscoreKeys<Repeat>>;

interface IRepeatBuilder extends IElementBuilder, IBuildable<Repeat> {
  setBounds<T extends keyof TypeMap>(type: T, bounds: BoundValue<T>): this;
  setCount(count: number): this;
  setCountMax(countMax: number): this;
  setDuration(duration: number): this;
  setDurationMax(durationMax: number): this;
  setDurationUnit(durationUnit: UnitsOfTimeType): this;
  setFrequency(frequency: number): this;
  setFrequencyMax(frequencyMax: number): this;
  setPeriod(period: number): this;
  setPeriodMax(periodMax: number): this;
  setPeriodUnit(periodUnit: UnitsOfTimeType): this;
  addDayOfWeek(dayOfWeek: DaysOfWeekType): this;
  addTimeOfDay(timeOfDay: string): this;
  addWhen(when: EventTimingType): this;
  setOffset(offset: number): this;
}

export class RepeatBuilder implements IRepeatBuilder {
  private readonly repeat: Repeat;

  constructor() {
    this.repeat = new Repeat();
  }

  build(): Repeat {
    return this.repeat;
  }

  setId(id: string): this {
    this.repeat.id = id;
    return this;
  }

  addExtension(extension: any): this {
    this.repeat.extension = this.repeat.extension || [];
    this.repeat.extension.push(extension);
    return this;
  }

  setBounds<T extends keyof TypeMap>(type: T, bounds: BoundValue<T>): this {
    this.repeat[type] = bounds;
    return this;
  }

  setCount(count: number): this {
    this.repeat.count = count;
    return this;
  }

  setCountMax(countMax: number): this {
    this.repeat.countMax = countMax;
    return this;
  }

  setDuration(duration: number): this {
    this.repeat.duration = duration;
    return this;
  }

  setDurationMax(durationMax: number): this {
    this.repeat.durationMax = durationMax;
    return this;
  }

  setDurationUnit(durationUnit: UnitsOfTimeType): this {
    this.repeat.durationUnit = durationUnit;
    return this;
  }

  setFrequency(frequency: number): this {
    this.repeat.frequency = frequency;
    return this;
  }

  setFrequencyMax(frequencyMax: number): this {
    this.repeat.frequencyMax = frequencyMax;
    return this;
  }

  setPeriod(period: number): this {
    this.repeat.period = period;
    return this;
  }

  setPeriodMax(periodMax: number): this {
    this.repeat.periodMax = periodMax;
    return this;
  }

  setPeriodUnit(periodUnit: UnitsOfTimeType): this {
    this.repeat.periodUnit = periodUnit;
    return this;
  }

  addDayOfWeek(dayOfWeek: DaysOfWeekType): this {
    this.repeat.dayOfWeek = this.repeat.dayOfWeek || [];
    this.repeat.dayOfWeek.push(dayOfWeek);
    return this;
  }

  addTimeOfDay(timeOfDay: string): this {
    this.repeat.timeOfDay = this.repeat.timeOfDay || [];
    this.repeat.timeOfDay.push(timeOfDay);
    return this;
  }

  addWhen(when: EventTimingType): this {
    this.repeat.when = this.repeat.when || [];
    this.repeat.when.push(when);
    return this;
  }

  setOffset(offset: number): this {
    this.repeat.offset = offset;
    return this;
  }

  addPrimitiveExtension<T extends PrimitiveExtensionFields>(
    param: T,
    extension: T extends Extract<PrimitiveExtensionFields, '_when' | '_dayOfWeek' | '_timeOfDay'>
      ? IElement[]
      : IElement,
  ): this {
    if (param === '_when' || param === '_dayOfWeek' || param === '_timeOfDay') {
      this.repeat[param] = extension as IElement[];
    } else {
      const internalParam = param as Exclude<PrimitiveExtensionFields, '_when' | '_dayOfWeek' | '_timeOfDay'>;
      this.repeat[internalParam] = extension as IElement;
    }

    return this;
  }
}
