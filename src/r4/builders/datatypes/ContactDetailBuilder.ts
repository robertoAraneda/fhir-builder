import { ContactDetail } from '../../models/datatypes/ContactDetail';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { IContactPoint, IElement } from 'fhirtypes/dist/r4';
import { ElementBuilder, IBuildable } from '../base';

type PrimitiveExtensionFields = keyof Pick<ContactDetail, UnderscoreKeys<ContactDetail>>;

interface IContactDetailBuilder extends IBuildable<ContactDetail> {
  setName(value: string): this;
  addTelecom(value: IContactPoint): this;
}

export class ContactDetailBuilder extends ElementBuilder implements IContactDetailBuilder {
  private readonly contactDetail: ContactDetail;

  constructor() {
    super();
    this.contactDetail = new ContactDetail();
  }

  /**
   * @description Add a param extension to the contactDetail
   * @param param
   * @param extension
   * @returns ContactDetailBuilder The builder
   */

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.contactDetail[param] = extension;

    return this;
  }

  /**
   * @description Set the name property of the contactDetail
   * @param value
   * @returns ContactDetailBuilder The builder
   */
  setName(value: string): this {
    this.contactDetail.name = value;

    return this;
  }

  /**
   * @description Set the telecom property of the contactDetail
   * @param value
   * @returns ContactDetailBuilder The builder
   */
  addTelecom(value: IContactPoint): this {
    this.contactDetail.telecom = this.contactDetail.telecom || [];
    this.contactDetail.telecom.push(value);

    return this;
  }

  build(): ContactDetail {
    return this.contactDetail;
  }
}
