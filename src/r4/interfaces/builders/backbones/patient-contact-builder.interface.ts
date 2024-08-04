import {
  AdministrativeGenderType,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IPeriod,
  IReference,
} from 'fhirtypes/dist/r4';
import { IElementBuilder } from '../datatypes';
import { IBackboneElementBuilder, IBuildable } from '../base';
import { PatientContact } from '../../../models';

export interface IPatientContactBuilder extends IBuildable<PatientContact>, IBackboneElementBuilder, IElementBuilder {
  addParamExtension(param: 'gender', element: IElement): this;

  addRelationship(relationship: ICodeableConcept): this;

  setMultipleRelationship(relationship: ICodeableConcept[]): this;

  setName(name: IHumanName): this;

  addTelecom(telecom: IContactPoint): this;

  setMultipleTelecom(telecom: IContactPoint[]): this;

  setGender(gender: AdministrativeGenderType): this;

  setOrganization(organization: IReference): this;

  setPeriod(period: IPeriod): this;
}
