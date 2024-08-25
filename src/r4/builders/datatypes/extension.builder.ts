import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IElement,
  IHumanName,
  IIdentifier,
  IMeta,
  IPeriod,
  IQuantity,
  IReference,
} from 'fhirtypes/dist/r4';
import { Extension } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { ElementBuilder } from '../base/element.builder';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

interface TypeMap {
  valueId: string;
  valueAddress: IAddress;
  valueAttachment: IAttachment;
  valueBoolean: boolean;
  valueCanonical: string;
  valueCode: string;
  valueCodeableConcept: ICodeableConcept;
  valueCoding: ICoding;
  valueContactPoint: IContactPoint;
  valueDate: string;
  valueDateTime: string;
  valueDecimal: number;
  valueIdentifier: IIdentifier;
  valueInstant: string;
  valueInteger: number;
  valueMarkdown: string;
  valueString: string;
  valueTime: string;
  valueUnsignedInt: number;
  valueUri: string;
  valueUrl: string;
  valueUuid: string;
  valueOid: string;
  valuePeriod: IPeriod;
  valuePositiveInt: number;
  valueQuantity: IQuantity;
  valueReference: IReference;
  valueMeta: IMeta;
  valueHumanName: IHumanName;
}

type ExtensionValue<T extends keyof TypeMap> = TypeMap[T];
type PrimitiveExtensionFields = keyof Pick<Extension, UnderscoreKeys<Extension>>;

interface IExtensionBuilder extends IBuildable<Extension> {
  setUrl(url: string): this;
  setValue<T extends keyof TypeMap>(type: T, value: ExtensionValue<T>): this;
}

export class ExtensionBuilder extends ElementBuilder implements IExtensionBuilder {
  private readonly extension: Extension;

  constructor() {
    super();
    this.extension = new Extension();
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.extension[param] = extension;
    return this;
  }

  setUrl(url: string): this {
    this.extension.url = url;
    return this;
  }

  build(): Extension {
    return Object.assign(this.extension, super.build());
  }

  setValue<T extends keyof TypeMap>(type: T, value: ExtensionValue<T>): this {
    this.extension[`${type}`] = value as never;
    return this;
  }
}
