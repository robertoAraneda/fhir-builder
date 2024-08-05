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
import { ElementBuilder } from '../../../core/r4/builders/base/element.builder';
import { BuildType } from '../../../core/r4/types';
import { Extension } from '../../models';
import { IBuildable } from '../../../core/r4/interfaces';
import { IElementBuilder } from '../../../core/r4/interfaces/element-builder.interface';

interface IExtensionBuilder extends IBuildable<Extension>, IElementBuilder {
  addParamExtension(param: 'url', extension: IElement): BuildType;
  setUrl(url: string): this;
  setValueId(valueId: string): BuildType;
  setValueAddress(valueAddress: IAddress): BuildType;
  setValueAttachment(valueAttachment: IAttachment): BuildType;
  setValueBoolean(valueBoolean: boolean): BuildType;
  setValueCanonical(valueCanonical: string): BuildType;
  setValueCode(valueCode: string): BuildType;
  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): BuildType;
  setValueCoding(valueCoding: ICoding): BuildType;
  setValueContactPoint(valueContactPoint: IContactPoint): BuildType;
  setValueDate(valueDate: string): BuildType;
  setValueDateTime(valueDateTime: string): BuildType;
  setValueDecimal(valueDecimal: number): BuildType;
  setValueIdentifier(valueIdentifier: IIdentifier): BuildType;
  setValueInstant(valueInstant: string): BuildType;
  setValueInteger(valueInteger: number): BuildType;
  setValueMarkdown(valueMarkdown: string): BuildType;
  setValueString(valueString: string): BuildType;
  setValueTime(valueTime: string): BuildType;
  setValueUnsignedInt(valueUnsignedInt: number): BuildType;
  setValueUri(valueUri: string): BuildType;
  setValueUrl(valueUrl: string): BuildType;
  setValueUuid(valueUuid: string): BuildType;
  setValueOid(valueOid: string): BuildType;
  setValuePeriod(valuePeriod: IPeriod): BuildType;
  setValuePositiveInt(valuePositiveInt: number): BuildType;
  setValueQuantity(valueQuantity: IQuantity): BuildType;
  setValueReference(valueReference: IReference): BuildType;
  setValueMeta(valueMeta: IMeta): BuildType;
  setValueHumanName(valueHumanName: IHumanName): BuildType;
}

export class ExtensionBuilder extends ElementBuilder implements IExtensionBuilder {
  private readonly extension: Extension;

  constructor() {
    super();
    this.extension = new Extension();
  }

  addParamExtension<T extends 'url'>(param: T, extension: IElement): BuildType {
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
    return this.extension;
  }
}
