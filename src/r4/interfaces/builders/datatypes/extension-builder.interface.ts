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
import { Extension } from '../../../models';
import { IBuildable } from '../base';
import { IElementBuilder } from './element-builder.interface';
import { BuildType, ExtensionParamType } from '../../../types';

export interface IExtensionBuilder extends IBuildable<Extension>, IElementBuilder {
  addParamExtension(param: ExtensionParamType, extension: IElement): BuildType;
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
