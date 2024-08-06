import { IElement, IExtension, IReference, LinkTypeType } from 'fhirtypes/dist/r4';
import { PatientLink } from '../../models';

interface IPatientLinkBuilder {
  // Element properties
  setId(id: string): this;
  addExtension(extension: IExtension): this;
  setMultipleExtension(extension: IExtension[]): this;

  // BackboneElement properties
  addModifierExtension(modifierExtension: IExtension): this;
  setMultipleModifierExtension(modifierExtension: IExtension[]): this;

  // PatientLink properties
  addParamExtension(param: 'type', extension: IElement): this;
  setOther(other: IReference): this;
  setType(type: LinkTypeType): this;
}

export class PatientLinkBuilder implements IPatientLinkBuilder {
  private readonly patientLink: PatientLink;

  constructor() {
    this.patientLink = new PatientLink();
  }

  setId(id: string): this {
    this.patientLink.id = id;
    return this;
  }

  setMultipleExtension(extension: IExtension[]): this {
    this.patientLink.extension = extension;
    return this;
  }

  addExtension(extension: IExtension): this {
    this.patientLink.extension = this.patientLink.extension || [];
    this.patientLink.extension.push(extension);
    return this;
  }

  setMultipleModifierExtension(modifierExtension: IExtension[]): this {
    this.patientLink.modifierExtension = modifierExtension;
    return this;
  }

  addModifierExtension(modifierExtension: IExtension): this {
    this.patientLink.modifierExtension = this.patientLink.modifierExtension || [];
    this.patientLink.modifierExtension.push(modifierExtension);
    return this;
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
    return this.patientLink;
  }
}
