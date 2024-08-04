import { Extension } from '../../models/datatypes/extension.model';
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
import {
  Build,
  ExtensionParamType,
  IExtensionBuilder,
} from '../../interfaces/builders/datatypes/extension-builder.interface';

export class ExtensionBuilder extends ElementBuilder implements IExtensionBuilder {
  private readonly extension: IExtension;

  constructor() {
    super();
    this.extension = {} as IExtension;
  }

  addParamExtension<T extends ExtensionParamType>(param: T, extension: IElement): Build {
    this.extension[`_${param}`] = extension;
    return {
      build: this.build.bind(this),
    };
  }

  setUrl(url: string): ExtensionBuilder {
    this.extension.url = url;
    return this;
  }

  setValueAddress(valueAddress: IAddress): Build {
    this.extension.valueAddress = valueAddress;
    return {
      build: this.build.bind(this),
    };
  }

  setValueAttachment(valueAttachment: IAttachment): Build {
    this.extension.valueAttachment = valueAttachment;
    return {
      build: this.build.bind(this),
    };
  }

  setValueBoolean(valueBoolean: boolean): Build {
    this.extension.valueBoolean = valueBoolean;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCanonical(valueCanonical: string): Build {
    this.extension.valueCanonical = valueCanonical;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCode(valueCode: string): Build {
    this.extension.valueCode = valueCode;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): Build {
    this.extension.valueCodeableConcept = valueCodeableConcept;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCoding(valueCoding: ICoding): { build: () => Extension } {
    this.extension.valueCoding = valueCoding;
    return {
      build: this.build.bind(this),
    };
  }

  setValueContactPoint(valueContactPoint: IContactPoint): Build {
    this.extension.valueContactPoint = valueContactPoint;
    return {
      build: this.build.bind(this),
    };
  }

  setValueDate(valueDate: string): Build {
    this.extension.valueDate = valueDate;
    return {
      build: this.build.bind(this),
    };
  }

  setValueDateTime(valueDateTime: string): Build {
    this.extension.valueDateTime = valueDateTime;
    return {
      build: this.build.bind(this),
    };
  }

  setValueDecimal(valueDecimal: number): Build {
    this.extension.valueDecimal = valueDecimal;
    return {
      build: this.build.bind(this),
    };
  }

  setValueId(valueId: string): Build {
    this.extension.valueId = valueId;
    return {
      build: this.build.bind(this),
    };
  }

  setValueIdentifier(valueIdentifier: IIdentifier): Build {
    this.extension.valueIdentifier = valueIdentifier;
    return {
      build: this.build.bind(this),
    };
  }

  setValueInstant(valueInstant: string): Build {
    this.extension.valueInstant = valueInstant;
    return {
      build: this.build.bind(this),
    };
  }

  setValueInteger(valueInteger: number): Build {
    this.extension.valueInteger = valueInteger;
    return {
      build: this.build.bind(this),
    };
  }

  setValueMarkdown(valueMarkdown: string): Build {
    this.extension.valueMarkdown = valueMarkdown;
    return {
      build: this.build.bind(this),
    };
  }

  setValueOid(valueOid: string): Build {
    this.extension.valueOid = valueOid;
    return {
      build: this.build.bind(this),
    };
  }

  setValuePeriod(valuePeriod: IPeriod): Build {
    this.extension.valuePeriod = valuePeriod;
    return {
      build: this.build.bind(this),
    };
  }

  setValuePositiveInt(valuePositiveInt: number): Build {
    this.extension.valuePositiveInt = valuePositiveInt;
    return {
      build: this.build.bind(this),
    };
  }

  setValueQuantity(valueQuantity: IQuantity): Build {
    this.extension.valueQuantity = valueQuantity;
    return {
      build: this.build.bind(this),
    };
  }

  setValueReference(valueReference: IReference): Build {
    this.extension.valueReference = valueReference;
    return {
      build: this.build.bind(this),
    };
  }

  setValueString(valueString: string): Build {
    this.extension.valueString = valueString;
    return {
      build: this.build.bind(this),
    };
  }

  setValueTime(valueTime: string): Build {
    this.extension.valueTime = valueTime;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUnsignedInt(valueUnsignedInt: number): Build {
    this.extension.valueUnsignedInt = valueUnsignedInt;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUri(valueUri: string): Build {
    this.extension.valueUri = valueUri;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUrl(valueUrl: string): Build {
    this.extension.valueUrl = valueUrl;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUuid(valueUuid: string): Build {
    this.extension.valueUuid = valueUuid;
    return {
      build: this.build.bind(this),
    };
  }

  setValueHumanName(valueHumanName: IHumanName): Build {
    this.extension.valueHumanName = valueHumanName;
    return {
      build: this.build.bind(this),
    };
  }

  setValueMeta(valueMeta: IMeta): Build {
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
