import { IElement, IPeriod } from 'fhirtypes/dist/r4';
import { PeriodValidator } from '../../validators/datatypes/period.validator';
import { Element } from './element.model';
import { PeriodBuilder } from '../../builders';
import { IGenericObject } from '../../interfaces';
import { AddressValidator } from '../../validators/datatypes/address.validator';
import { CodeableConceptValidator } from '../../validators/datatypes/codeable-concept.validator';
import { IdentifierValidator } from '../../validators/datatypes/identifier.validator';

/**
 * @description Time range defined by start and end date/time.
 * @implements {IPeriod}
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {string} start - Starting time with inclusive boundary
 * @property {string} end - End time with inclusive boundary, if not ongoing
 * @property {IElement} _start - Extension of start
 * @property {IElement} _end - Extension of end
 * @see {@link https://www.hl7.org/fhir/datatypes.html#Period Period}
 * @author Roberto Araneda
 */
export class Period extends Element implements IPeriod {
  /**
   * @description Starting time with inclusive boundary
   * @description A date, date-time or partial date (e.g. just year or year + month) as used in human communication. The format is YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz
   * @description The time "24:00" is not allowed.
   * @example 2018, 1973-06, 1905-08-23, 2015-02-07T13:28:17-05:00 or 2017-01-01T00:00:00.000Z
   */
  start?: string;

  /**
   * @description End time with inclusive boundary, if not ongoing
   * @description A date, date-time or partial date (e.g. just year or year + month) as used in human communication. The format is YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz
   * @example 2018, 1973-06, 1905-08-23, 2015-02-07T13:28:17-05:00 or 2017-01-01T00:00:00.000Z
   */
  end?: string;

  /**
   * @description Extension of start
   */
  _start?: IElement;

  /**
   * @description Extension of end
   */
  _end?: IElement;

  toJson(): Period {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Period${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Period${JSON.stringify(this.toJson())}`;
  }

  isValid(): { error: string | null } {
    try {
      PeriodValidator(this);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  static builder(): PeriodBuilder {
    return new PeriodBuilder();
  }

  static validate(args: IGenericObject): { error: string | null } {
    try {
      PeriodValidator(args);
      return { error: null };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  constructor(args: IPeriod) {
    super();
    Object.assign(this, args);
  }
}
