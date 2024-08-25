import { IElement, IPatientLink, IReference, LinkTypeType } from 'fhirtypes/dist/r4';
import { PatientLink } from '../../models';
import { IBuildable } from '../base/buildable.interface';
import { UnderscoreKeys } from '../base/resource-type-map.interface';
import { BackboneBuilder } from '../base/backbone.builder';

type PrimitiveExtensionFields = keyof Pick<IPatientLink, UnderscoreKeys<IPatientLink>>;

interface IPatientLinkBuilder extends IBuildable<PatientLink> {
  setOther(other: IReference): this;
  setType(type: LinkTypeType): this;
}

export class PatientLinkBuilder extends BackboneBuilder implements IPatientLinkBuilder {
  private readonly patientLink: PatientLink;

  constructor() {
    super();
    this.patientLink = new PatientLink();
  }

  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.patientLink[param] = extension;
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
    return Object.assign(this.patientLink, super.build());
  }
}
