import { IBuildable } from '../base/buildable.interface';
import { Annotation } from '../../models';
import { IAnnotation, IElement, IReference } from 'fhirtypes/dist/r4';
import { ElementBuilder } from '../base/element.builder';
import { UnderscoreKeys } from '../base/resource-type-map.interface';

type PrimitiveExtensionFields = keyof Pick<IAnnotation, UnderscoreKeys<IAnnotation>>;
type ExtractAuthor<T> = Extract<{ [K in keyof T]: K extends `author${string}` ? K : never }[keyof T], keyof T>;
type ExtractAuthorType = keyof Pick<IAnnotation, ExtractAuthor<IAnnotation>>;

interface IAnnotationBuilder extends IBuildable<Annotation> {
  setAuthor<T extends ExtractAuthorType>(type: T, value: T extends 'authorReference' ? IReference : string): this;
  setTime(time: string): this;
  setText(text: string): this;
}

export class AnnotationBuilder extends ElementBuilder implements IAnnotationBuilder {
  private readonly annotation: Annotation;

  constructor() {
    super();
    this.annotation = new Annotation();
  }

  setAuthor<T extends ExtractAuthorType>(type: T, value: T extends 'authorReference' ? IReference : string): this {
    if (type === 'authorReference') {
      this.annotation.authorReference = value as IReference;
    }
    if (type === 'authorString') {
      this.annotation.authorString = value as string;
    }
    return this;
  }

  setTime(time: string): this {
    this.annotation.time = time;
    return this;
  }

  setText(text: string): this {
    this.annotation.text = text;
    return this;
  }

  /**
   * @description Add a primitive extension to the element
   * @param param
   * @param extension
   */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.annotation[param] = extension;
    return this;
  }

  build(): Annotation {
    return Object.assign(this.annotation, super.build());
  }
}
