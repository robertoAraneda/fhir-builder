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
  IRange,
  IReference,
  ISignature,
} from 'fhirtypes/dist/r4';
import { ExtensionBuilder } from '../../builders';

import { ConformanceValidator } from '../../../core/r4/validators/base';
import { Element } from '../base/element.model';
import { IValidatable } from '../base/validatable.interface';
import { ISerializable } from '../base/serializable.interface';
import { IDuration } from 'fhirtypes/dist/r4/datatypes';

export class Extension extends Element implements IExtension, IValidatable, ISerializable {
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

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Extension${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Extension${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator(this, 'Extension');
  }

  constructor(args?: IExtension) {
    super();
    Object.assign(this, args);
  }

  protected builderInstance(): ExtensionBuilder {
    return new ExtensionBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
