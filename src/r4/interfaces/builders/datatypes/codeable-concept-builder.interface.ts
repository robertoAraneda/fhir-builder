import { ICoding, IElement } from 'fhirtypes/dist/r4';
import { IElementBuilder } from './element-builder.interface';
import { CodeableConcept } from '../../../models';
import { IBuildable } from '../base';

export interface ICodeableConceptBuilder extends IBuildable<CodeableConcept>, IElementBuilder {
  addCodeableConceptParamExtension(param: 'text', extension: IElement): this;
  addCoding(coding: ICoding): this;
  setMultipleCoding(coding: ICoding[]): this;
  setText(text: string): this;
}
