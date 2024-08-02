import { CodeableConceptBuilder } from '../builders/datatypes/codeable-concept.builder';
import { CodeableConcept } from '../models';
import { BuildableInterface } from './buildable.interface';
import { ElementBuilderInterface } from './element-builder.interface';
import { ICoding, IElement } from 'fhirtypes/dist/r4';

export interface CodeableConceptBuilderInterface extends BuildableInterface<CodeableConcept>, ElementBuilderInterface {
  addCodeableConceptParamExtension: (param: 'text', extension: IElement) => this;

  addCoding: (coding: ICoding) => CodeableConceptBuilder;

  setMultipleCoding: (coding: ICoding[]) => this;

  setText: (text: string) => CodeableConceptBuilder;
}
