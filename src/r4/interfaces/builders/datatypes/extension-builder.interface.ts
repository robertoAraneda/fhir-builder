import { IBuildable } from '../base/buildable.interface';
import { Extension } from '../../../models/datatypes/extension.model';
import { IElementBuilder } from './element-builder.interface';
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
import { ExtensionBuilder } from '../../../builders/datatypes/extension.builder';

export type Build = { build: () => Extension };

export type ExtensionParamType =
  | 'valueId'
  | 'valueBoolean'
  | 'valueCanonical'
  | 'valueCode'
  | 'valueDate'
  | 'valueDateTime'
  | 'valueDecimal'
  | 'valueInstant'
  | 'valueInteger'
  | 'valueMarkdown'
  | 'valueOid'
  | 'valuePositiveInt'
  | 'valueString'
  | 'valueTime'
  | 'valueUnsignedInt'
  | 'valueUri'
  | 'valueUrl'
  | 'valueUuid';

export interface IExtensionBuilder extends IBuildable<Extension>, IElementBuilder {
  addParamExtension<T extends ExtensionParamType>(param: T, extension: IElement): Build;
  setUrl(url: string): ExtensionBuilder;
  setValueId(valueId: string): Build;
  setValueAddress(valueAddress: IAddress): Build;
  setValueAttachment(valueAttachment: IAttachment): Build;
  setValueBoolean(valueBoolean: boolean): Build;
  setValueCanonical(valueCanonical: string): Build;
  setValueCode(valueCode: string): Build;
  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): Build;
  setValueCoding(valueCoding: ICoding): Build;
  setValueContactPoint(valueContactPoint: IContactPoint): Build;
  setValueDate(valueDate: string): Build;
  setValueDateTime(valueDateTime: string): Build;
  setValueDecimal(valueDecimal: number): Build;
  setValueIdentifier(valueIdentifier: IIdentifier): Build;
  setValueInstant(valueInstant: string): Build;
  setValueInteger(valueInteger: number): Build;
  setValueMarkdown(valueMarkdown: string): Build;
  setValueString(valueString: string): Build;
  setValueTime(valueTime: string): Build;
  setValueUnsignedInt(valueUnsignedInt: number): Build;
  setValueUri(valueUri: string): Build;
  setValueUrl(valueUrl: string): Build;
  setValueUuid(valueUuid: string): Build;
  setValueOid(valueOid: string): Build;
  setValuePeriod(valuePeriod: IPeriod): Build;
  setValuePositiveInt(valuePositiveInt: number): Build;
  setValueQuantity(valueQuantity: IQuantity): Build;
  setValueReference(valueReference: IReference): Build;
  setValueMeta(valueMeta: IMeta): Build;
  setValueHumanName(valueHumanName: IHumanName): Build;
}
