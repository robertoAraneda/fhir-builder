import { ContactPointSystemType, ContactPointUseType, IElement, IExtension, IPeriod } from 'fhirtypes/dist/r4';
import { ContactPoint } from '../../models';
import { IElementBuilder } from '../base/element-builder.interface';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<ContactPoint, UnderscoreKeys<ContactPoint>>;

interface IContactPointBuilder extends IElementBuilder, IBuildable<ContactPoint> {
  setSystem(value: ContactPointSystemType): this;
  setValue(value: string): this;
  setUse(value: ContactPointUseType): this;
  setRank(value: number): this;
  setPeriod(value: IPeriod): this;
}

export class ContactPointBuilder implements IContactPointBuilder {
  private readonly contactPoint: ContactPoint;

  constructor() {
    this.contactPoint = new ContactPoint();
  }

  setId(id: string): this {
    this.contactPoint.id = id;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.contactPoint.extension = this.contactPoint.extension || [];
    this.contactPoint.extension.push(extension);
    return this;
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
    return this.contactPoint;
  }
}
