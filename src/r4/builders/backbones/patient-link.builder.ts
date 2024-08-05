import { IElement, IReference, LinkTypeType } from 'fhirtypes/dist/r4';
import { BackboneElementBuilder } from '../../../core/r4/builders/base';
import { PatientLink } from '../../models';
import { IElementBuilder } from '../../../core/r4/interfaces/element-builder.interface';
import { IBackboneElementBuilder } from '../../../core/r4/interfaces/backbone-element-builder.interface';
import { IBuildable } from '../../../core/r4/interfaces';

interface IPatientLinkBuilder extends IBuildable<PatientLink>, IBackboneElementBuilder, IElementBuilder {
  addParamExtension(param: 'type', extension: IElement): this;
  setOther(other: IReference): this;
  setType(type: LinkTypeType): this;
}

export class PatientLinkBuilder extends BackboneElementBuilder implements IPatientLinkBuilder {
  private readonly patientLink: PatientLink;

  constructor() {
    super();
    this.patientLink = new PatientLink();
  }

  addParamExtension(param: 'type', extension: IElement): this {
    this.patientLink[`_${param}`] = extension;
    return this;
  }

  setOther(other: IReference): this {
    this.patientLink.other = other;
    return this;
  }

  setType(type: LinkTypeType): this {
    this.patientLink.type = type;
    return this;
  }

  build(): PatientLink {
    Object.assign(this.patientLink, { ...super.entity() });
    return this.patientLink;
  }
}
