import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IDuration,
  IElement,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
  ISignature,
} from 'fhirtypes/dist/r4';
import { ExtensionBuilder } from '../../builders';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from './element.model';

export class Extension extends Element implements IExtension {
  url: string;

  valueAddress?: IAddress;
  valueAttachment?: IAttachment;
  valueBase64Binary?: string;
  valueBoolean?: boolean;
  valueCanonical?: string;
  valueCode?: string;
  valueCodeableConcept?: ICodeableConcept;
  valueCoding?: ICoding;
  valueContactPoint?: IContactPoint;
  valueDate?: string;
  valueDateTime?: string;
  valueDecimal?: number;
  valueId?: string;
  valueIdentifier?: IIdentifier;
  valueInstant?: string;
  valueInteger?: number;
  valueMarkdown?: string;
  valueOid?: string;
  valuePeriod?: IPeriod;
  valuePositiveInt?: number;
  valueQuantity?: IQuantity;
  valueString?: string;
  valueTime?: string;
  valueUnsignedInt?: number;
  valueUri?: string;
  valueUrl?: string;
  valueUuid?: string;
  valueDuration?: IDuration;
  valueHumanName?: IHumanName;
  valueMeta?: IMeta;
  valueReference?: IReference;
  valueRange?: IRange;
  valueSignature?: ISignature;

  // Extensions for url
  _url?: IElement;

  toJson(): Extension {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Extension${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Extension${JSON.stringify(this.toJson())}`;
  }

  validate(): { error: string | null } {
    const { error } = ConformanceValidator(this, 'Extension');
    return { error };
  }

  static builder(): ExtensionBuilder {
    return new ExtensionBuilder();
  }

  constructor(args?: IExtension) {
    super();
    Object.assign(this, args);
  }
}
