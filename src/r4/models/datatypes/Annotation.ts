import { Element } from '../base/Element';
import { IAnnotation, IElement, IReference } from 'fhirtypes/dist/r4';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { AnnotationBuilder } from '../../builders/datatypes/AnnotationBuilder';
import { IValidatable } from '../base/IValidatable';
import { ISerializable } from '../base/ISerializable';

export class Annotation extends Element implements IAnnotation, IValidatable, ISerializable {
  protected builderInstance(): AnnotationBuilder {
    return new AnnotationBuilder();
  }
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

  serialize(): string {
    return JSON.stringify(this.toJson());
  }

  toPrettyString(): string {
    return `Annotation${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Annotation${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator('Annotation', this);
  }

  constructor(args?: IAnnotation) {
    super();
    if (args) Object.assign(this, args);
  }
}
