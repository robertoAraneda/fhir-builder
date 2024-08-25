import { IBuildable } from '../base/buildable.interface';
import { Timing } from '../../models';
import { ICodeableConcept, IElement, IRepeat, ITiming } from 'fhirtypes/dist/r4';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { BackboneBuilder } from '../base/backbone.builder';

type PrimitiveExtensionFields = keyof Pick<ITiming, UnderscoreKeys<ITiming>>;

interface ITimingBuilder extends IBuildable<Timing> {
  setRepeat(repeat: IRepeat): this;
  setCode(code: ICodeableConcept): this;
  addEvent(event: string): this;
}

export class TimingBuilder extends BackboneBuilder implements ITimingBuilder {
  private readonly timing: Timing;

  constructor() {
    super();
    this.timing = new Timing();
  }

  build(): Timing {
    return Object.assign(this.timing, super.build());
  }

  setRepeat(repeat: IRepeat): this {
    this.timing.repeat = repeat;
    return this;
  }

  setCode(code: ICodeableConcept): this {
    this.timing.code = code;
    return this;
  }

  addEvent(event: string): this {
    this.timing.event = this.timing.event || [];
    this.timing.event.push(event);
    return this;
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.timing[param] = this.timing[param] || [];
    this.timing[param]?.push(extension);
    return this;
  }
}
