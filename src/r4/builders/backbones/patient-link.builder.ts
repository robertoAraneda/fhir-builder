import { BackboneElementBuilder } from '../base/backbone-element.builder';
import { IPatientLinkBuilder } from '../../interfaces/builders/backbones/patient-link-builder.interface';
import { IElement, IPatientLink, IReference, LinkTypeType } from 'fhirtypes/dist/r4';
import { PatientLink } from '../../models/backbones/patient-link.model';

export class PatientLinkBuilder extends BackboneElementBuilder implements IPatientLinkBuilder {
  private readonly patientLink: IPatientLink;

  constructor() {
    super();
    this.patientLink = {} as IPatientLink;
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
    return new PatientLink(this.patientLink);
  }
}
