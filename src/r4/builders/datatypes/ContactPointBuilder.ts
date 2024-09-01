import { ContactPointSystemType, ContactPointUseType, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { ContactPoint } from '../../models';
import { IBuildable } from '../base/IBuildable';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { ElementBuilder } from '../base/ElementBuilder';

type PrimitiveExtensionFields = keyof Pick<ContactPoint, UnderscoreKeys<ContactPoint>>;

interface IContactPointBuilder extends IBuildable<ContactPoint> {
  setSystem(value: ContactPointSystemType): this;
  setValue(value: string): this;
  setUse(value: ContactPointUseType): this;
  setRank(value: number): this;
  setPeriod(value: IPeriod): this;
}

export class ContactPointBuilder extends ElementBuilder implements IContactPointBuilder {
  private readonly contactPoint: ContactPoint;

  constructor() {
    super();
    this.contactPoint = new ContactPoint();
  }

  /**
   * @description Add a param extension to the contactPoint
   * @param param
   * @param extension
   * @returns ContactPointBuilder The builder
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.contactPoint[param] = extension;

    return this;
  }

  /**
   * @description Set the system property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setSystem(value: ContactPointSystemType): this {
    this.contactPoint.system = value;

    return this;
  }

  /**
   * @description Set the value property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setValue(value: string): this {
    this.contactPoint.value = value;

    return this;
  }

  /**
   * @description Set the use property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setUse(value: ContactPointUseType): this {
    this.contactPoint.use = value;

    return this;
  }

  /**
   * @description Set the rank property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setRank(value: number): this {
    if (value < 1) throw new Error('Rank must 1 or up');
    this.contactPoint.rank = value;

    return this;
  }

  /**
   * @description Set the period property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setPeriod(value: IPeriod): this {
    this.contactPoint.period = value;

    return this;
  }

  /**
   * @description Build a ContactPoint
   */
  build(): ContactPoint {
    return Object.assign(this.contactPoint, super.build());
  }
}
