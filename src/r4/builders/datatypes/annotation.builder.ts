import { IBuildable } from '../base/IBuildable';
import { Annotation } from '../../models/datatypes/annotation.model';
import { IElement, IExtension, IReference } from 'fhirtypes/dist/r4';
import { IElementBuilder } from '../base/IElementBuilder';
import { ElementBuilder } from '../base/ElementBuilder';

interface IAnnotationBuilder extends IElementBuilder, IBuildable<Annotation> {
  addParamExtension(param: 'time' | 'text', extension: IElement): this;
  setAuthorReference(authorReference: IReference): this;
  setAuthorString(authorString: string): this;
  setTime(time: string): this;
  setText(text: string): this;
}

export class AnnotationBuilder extends ElementBuilder implements IAnnotationBuilder {
  private readonly annotation: Annotation;

  constructor() {
    super();
    this.annotation = new Annotation();
  }

  setId(id: string): this {
    this.annotation.id = id;
    return this;
  }

  setAuthorReference(authorReference: IReference): this {
    this.annotation.authorReference = authorReference;
    return this;
  }

  setAuthorString(authorString: string): this {
    this.annotation.authorString = authorString;
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

  addExtension(extension: IExtension): this {
    this.annotation.extension = this.annotation.extension || [];
    this.annotation.extension.push(extension);
    return this;
  }

  addParamExtension(param: 'time' | 'text', extension: IElement): this {
    this.annotation[`_${param}`] = extension;
    return this;
  }

  build(): Annotation {
    return this.annotation;
  }
}
