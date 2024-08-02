import {
  ContactPointBuilderInterface,
  ContactPointParamExtensionType,
} from '../../interfaces/contact-point-builder.interface';
import { ElementBuilder } from './element.builder';
import { ContactPointSystemType, ContactPointUseType, IContactPoint, IElement, IPeriod } from 'fhirtypes/dist/r4';
import { ContactPoint } from '../../models';

export class ContactPointBuilder extends ElementBuilder implements ContactPointBuilderInterface {
  private readonly contactPoint: IContactPoint;

  constructor() {
    super();

    this.contactPoint = {} as IContactPoint;
  }

  /**
   * @description Add a param extension to the contactPoint
   * @param param
   * @param extension
   * @returns ContactPointBuilder The builder
   */
  addParamExtension<T extends ContactPointParamExtensionType>(param: T, extension: IElement): this {
    this.contactPoint[`_${param}`] = extension;

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
    Object.assign(this.contactPoint, { ...super.entity() });
    return new ContactPoint(this.contactPoint);
  }
}
