import { Element, ISerializable, IValidatable } from '../base';
import { IContactDetail } from 'fhirtypes/dist/r4';
import { IElement } from 'fhirtypes/dist/r4/base';
import { IContactPoint } from 'fhirtypes/dist/r4/datatypes/IContactPoint';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
 * @name ContactDetail
 * @description Specifies contact information for a person or organization.
 * @see <a href="https://www.hl7.org/fhir/R4/metadatatypes.html#ContactDetail">ContactDetail</a>
 * @version R4
 * @extends {Element}
 */
export class ContactDetail extends Element implements IContactDetail, IValidatable, ISerializable {
  /**
   * @description The name of an individual to contact.
   */
  name?: string;
  /**
   * @description Extensions for name
   */
  _name?: IElement;
  /**
   * @description The contact details for the individual (if a name was provided) or the organization.
   */
  telecom?: IContactPoint[];

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `ContactDetail${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `ContactDetail${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator('ContactDetail', this);
  }

  constructor(args?: IContactDetail) {
    super();
    Object.assign(this, args);
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
