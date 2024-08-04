import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IElement,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
  IPeriod,
  IQuantity,
  IReference,
} from 'fhirtypes/dist/r4';
import { ElementBuilder } from './element.builder';
import { IExtensionBuilder } from '../../interfaces';
import { BuildType, ExtensionParamType } from '../../types';
import { Extension } from '../../models';

export class ExtensionBuilder extends ElementBuilder implements IExtensionBuilder {
  private readonly extension: IExtension;

  constructor() {
    super();
    this.extension = {} as IExtension;
  }

  addParamExtension<T extends ExtensionParamType>(param: T, extension: IElement): BuildType {
    this.extension[`_${param}`] = extension;
    return {
      build: this.build.bind(this),
    };
  }

  setUrl(url: string): this {
    this.extension.url = url;
    return this;
  }

  setValueAddress(valueAddress: IAddress): BuildType {
    this.extension.valueAddress = valueAddress;
    return {
      build: this.build.bind(this),
    };
  }

  setValueAttachment(valueAttachment: IAttachment): BuildType {
    this.extension.valueAttachment = valueAttachment;
    return {
      build: this.build.bind(this),
    };
  }

  setValueBoolean(valueBoolean: boolean): BuildType {
    this.extension.valueBoolean = valueBoolean;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCanonical(valueCanonical: string): BuildType {
    this.extension.valueCanonical = valueCanonical;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCode(valueCode: string): BuildType {
    this.extension.valueCode = valueCode;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): BuildType {
    this.extension.valueCodeableConcept = valueCodeableConcept;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCoding(valueCoding: ICoding): BuildType {
    this.extension.valueCoding = valueCoding;
    return {
      build: this.build.bind(this),
    };
  }

  setValueContactPoint(valueContactPoint: IContactPoint): BuildType {
    this.extension.valueContactPoint = valueContactPoint;
    return {
      build: this.build.bind(this),
    };
  }

  setValueDate(valueDate: string): BuildType {
    this.extension.valueDate = valueDate;
    return {
      build: this.build.bind(this),
    };
  }

  setValueDateTime(valueDateTime: string): BuildType {
    this.extension.valueDateTime = valueDateTime;
    return {
      build: this.build.bind(this),
    };
  }

  setValueDecimal(valueDecimal: number): BuildType {
    this.extension.valueDecimal = valueDecimal;
    return {
      build: this.build.bind(this),
    };
  }

  setValueId(valueId: string): BuildType {
    this.extension.valueId = valueId;
    return {
      build: this.build.bind(this),
    };
  }

  setValueIdentifier(valueIdentifier: IIdentifier): BuildType {
    this.extension.valueIdentifier = valueIdentifier;
    return {
      build: this.build.bind(this),
    };
  }

  setValueInstant(valueInstant: string): BuildType {
    this.extension.valueInstant = valueInstant;
    return {
      build: this.build.bind(this),
    };
  }

  setValueInteger(valueInteger: number): BuildType {
    this.extension.valueInteger = valueInteger;
    return {
      build: this.build.bind(this),
    };
  }

  setValueMarkdown(valueMarkdown: string): BuildType {
    this.extension.valueMarkdown = valueMarkdown;
    return {
      build: this.build.bind(this),
    };
  }

  setValueOid(valueOid: string): BuildType {
    this.extension.valueOid = valueOid;
    return {
      build: this.build.bind(this),
    };
  }

  setValuePeriod(valuePeriod: IPeriod): BuildType {
    this.extension.valuePeriod = valuePeriod;
    return {
      build: this.build.bind(this),
    };
  }

  setValuePositiveInt(valuePositiveInt: number): BuildType {
    this.extension.valuePositiveInt = valuePositiveInt;
    return {
      build: this.build.bind(this),
    };
  }

  setValueQuantity(valueQuantity: IQuantity): BuildType {
    this.extension.valueQuantity = valueQuantity;
    return {
      build: this.build.bind(this),
    };
  }

  setValueReference(valueReference: IReference): BuildType {
    this.extension.valueReference = valueReference;
    return {
      build: this.build.bind(this),
    };
  }

  setValueString(valueString: string): BuildType {
    this.extension.valueString = valueString;
    return {
      build: this.build.bind(this),
    };
  }

  setValueTime(valueTime: string): BuildType {
    this.extension.valueTime = valueTime;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUnsignedInt(valueUnsignedInt: number): BuildType {
    this.extension.valueUnsignedInt = valueUnsignedInt;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUri(valueUri: string): BuildType {
    this.extension.valueUri = valueUri;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUrl(valueUrl: string): BuildType {
    this.extension.valueUrl = valueUrl;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUuid(valueUuid: string): BuildType {
    this.extension.valueUuid = valueUuid;
    return {
      build: this.build.bind(this),
    };
  }

  setValueHumanName(valueHumanName: IHumanName): BuildType {
    this.extension.valueHumanName = valueHumanName;
    return {
      build: this.build.bind(this),
    };
  }

  setValueMeta(valueMeta: IMeta): BuildType {
    this.extension.valueMeta = valueMeta;
    return {
      build: this.build.bind(this),
    };
  }

  build(): Extension {
    Object.assign(this.extension, { ...super.entity() });
    return new Extension(this.extension);
  }
}
