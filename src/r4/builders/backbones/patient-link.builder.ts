import { IElement, IPatientLink, IReference, LinkTypeType } from 'fhirtypes/dist/r4';
import { BackboneElementBuilder } from '../base';
import { IPatientLinkBuilder } from '../../interfaces';
import { PatientLink } from '../../models';

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
