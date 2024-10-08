import { Element } from '../base/Element';
import { DaysOfWeekType, EventTimingType, UnitsOfTimeType } from 'fhirtypes/dist/r4/types';
import { ConformanceValidator } from '../../../core/r4/validators/base';
import { RepeatBuilder } from '../../builders';
import { IValidatable } from '../base/IValidatable';
import { ISerializable } from '../base/ISerializable';
import { IElement, IPeriod, IRange, IRepeat } from 'fhirtypes/dist/r4';
import { IDuration } from 'fhirtypes/dist/r4/datatypes';

export class Repeat extends Element implements IRepeat, IValidatable, ISerializable {
  /**
   * @description A duration for the length of the timing schedule.
   */
  boundsDuration?: IDuration;
  /**
   * @description A set of ordered Quantity values defined by a low and high limit of possible length of the timing schedule.
   */
  boundsRange?: IRange;
  /**
   * @description A time period defined by a start and end date/time of the timing schedule.
   */
  boundsPeriod?: IPeriod;
  /**
   * @description A total count of the desired number of repetitions across the duration of the entire timing specification.
   */
  count?: number;
  /**
   * @description If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.
   */
  countMax?: number;
  /**
   * @description How long this thing happens for when it happens.
   */
  duration?: number;
  /**
   * @description If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length.
   */
  durationMax?: number;
  /**
   * @description The units of time for the period in UCUM units.
   * @description s | min | h | d | wk | mo | a - unit of time (UCUM)
   * @see <a href="https://hl7.org/fhir/R4/valueset-units-of-time.html">UnitsOfTime</a>
   */
  durationUnit?: UnitsOfTimeType;
  /**
   * @description The number of times to repeat the action within the specified period.
   */
  frequency?: number;
  /**
   * @description If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
   */
  frequencyMax?: number;
  /**
   * @description Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period.
   */
  period?: number;
  /**
   * @description If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
   */
  periodMax?: number;
  /**
   * @description The units of time for the period in UCUM units.
   * @description s | min | h | d | wk | mo | a - unit of time (UCUM)
   * @see <a href="https://hl7.org/fhir/R4/valueset-units-of-time.html">UnitsOfTime</a>
   */
  periodUnit?: UnitsOfTimeType;
  /**
   * @description If one or more days of week is provided, then the action happens only on the specified day(s).
   * @description mon | tue | wed | thu | fri | sat | sun
   * @see <a href="https://hl7.org/fhir/R4/valueset-days-of-week.html">DaysOfWeek</a>
   */
  dayOfWeek?: DaysOfWeekType[];
  /**
   * @description Specified time of day for action to take place.
   */
  timeOfDay?: string[];
  /**
   * @description An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.
   * @see <a href="https://hl7.org/fhir/R4/valueset-event-timing.html">EventTiming</a>
   */
  when?: EventTimingType[];
  /**
   * @description The number of minutes from the event.
   */
  offset?: number;
  /**
   * @description Extension for count.
   */
  _count?: IElement;
  /**
   * @description Extension for countMax.
   */
  _countMax?: IElement;
  /**
   * @description Extension for duration.
   */
  _duration?: IElement;
  /**
   * @description Extension for durationUnit.
   */
  _durationUnit?: IElement;
  /**
   * @description Extension for durationMax.
   */
  _durationMax?: IElement;
  /**
   * @description Extension for frecuency.
   */
  _frequency?: IElement;
  /**
   * @description Extension for frequencyMax.
   */
  _frequencyMax?: IElement;
  /**
   * @description Extension for period.
   */
  _period?: IElement;
  /**
   * @description Extension for periodMax.
   */
  _periodMax?: IElement;
  /**
   * @description Extension for periodUnit.
   */
  _periodUnit?: IElement;
  /**
   * @description Extension for dayOfWeek.
   */
  _dayOfWeek?: IElement[];
  /**
   * @description Extension for timeOfDay.
   */
  _timeOfDay?: IElement[];
  /**
   * @description Extension for when.
   */
  _when?: IElement[];
  /**
   * @description Extension for offset.
   */
  _offset?: IElement;

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Repeat${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Repeat${JSON.stringify(this.toJson())}`;
  }

  validate() {
    return ConformanceValidator('Repeat', this);
  }

  constructor(args?: IRepeat) {
    super();
    if (args) Object.assign(this, args);
  }

  protected builderInstance(): RepeatBuilder {
    return new RepeatBuilder();
  }

  serialize(): string {
    return JSON.stringify(this.toJson());
  }
}
