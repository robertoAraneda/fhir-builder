import { Element } from './element.model';
import { IAnnotation, IElement, IReference } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { AnnotationBuilder } from '../../builders/datatypes/annotation.builder';

export class Annotation extends Element implements IAnnotation {
  /**
   * @description The individual responsible for the annotation.
   */
  authorReference?: IReference;
  /**
   * @description The individual responsible for the annotation.
   */
  authorString?: string;
  /**
   * @description Indicates when the annotation was made.
   */
  time?: string;
  /**
   * @description The annotation - text content (as markdown).
   */
  text: string;
  /**
   * @description Extension for time.
   */
  _time?: IElement;
  /**
   * @description Extension for text
   */
  _text?: IElement;

  toJson(): any {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Annotation${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Annotation${JSON.stringify(this.toJson())}`;
  }

  validate(): { error: string | null } {
    return ConformanceValidator(this, 'Annotation');
  }

  static builder(): AnnotationBuilder {
    return new AnnotationBuilder();
  }

  constructor(args?: IAnnotation) {
    super();
    if (args) Object.assign(this, args);
  }
}
