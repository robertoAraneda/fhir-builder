import { OperationOutcomeIssueException } from '../../../commons/exceptions/operation-outcome.exception';
import { IOperationOutcomeIssue } from 'fhirtypes/dist/r4';

export const Base64BinaryValidator = (value: string, path: string, errors: IOperationOutcomeIssue[]) => {
  // regex for /^(\s*([0-9a-zA-Z\+\=]){4}\s*)+$/
  const regex = /^(\s*([0-9a-zA-Z+=]){4}\s*)+$/;
  if (!regex.test(value)) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invalid',
        diagnostics: `Invalid base64Binary.`,
        details: {
          text: `Path: ${path}. Value: ${value}`,
        },
      }),
    );
  }
};

export const BooleanValidator = (value: string, path: string) => {
  // regex for ^true|false$
  const regex = /^true|false$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid boolean: ${value} at path: ${path}`);
  }
};

export const CanonicalValidator = (value: string, path: string) => {
  // regex for ^\\S*$
  const regex = /^\S*$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid canonical: ${value} at path: ${path}`);
  }
};

export const CodeValidator = (value: string, path: string) => {
  // regex for ^[^\\s]+(\\s[^\\s]+)*$
  const regex = /^[^\s]+(\s[^\s]+)*$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid code: ${value} at path: ${path}`);
  }
};

export const DateValidator = (value: string, path: string) => {
  // regex for ^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$
  const regex = /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid date: ${value} at path: ${path}`);
  }
};

export const DateTimeValidator = (value: string, path: string, errors: any[]) => {
  // regex for ^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$
  const regex =
    /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/;
  if (!regex.test(value)) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invalid',
        diagnostics: `Invalid dateTime.`,
        details: {
          text: `Path: ${path}. Value: ${value}`,
        },
      }),
    );
    // throw new Error(`Invalid dateTime: ${value} at path: ${path}`);
  }
};

export const DecimalValidator = (value: number, path: string) => {
  // regex for ^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$
  const regex = /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?$/;
  if (!regex.test(value.toString())) {
    throw new Error(`Invalid decimal: ${value} at path: ${path}`);
  }
};

export const IdValidator = (value: string, path: string) => {
  // regex for ^[A-Za-z0-9\\-\\.]{1,64}$
  const regex = /^[A-Za-z0-9\-.]{1,64}$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid id: ${value} at path: ${path}`);
  }
};

export const InstantValidator = (value: string, path: string, errors: IOperationOutcomeIssue[]) => {
  // regex for ^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$
  const regex =
    /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/;
  if (!regex.test(value)) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invalid',
        diagnostics: `Invalid instant.`,
        details: {
          text: `Path: ${path}. Value: ${value}`,
        },
      }),
    );
    //throw new Error(`Invalid instant: ${value} at path: ${path}`);
  }
};

export const IntegerValidator = (value: number, path: string) => {
  // regex for ^-?([0]|([1-9][0-9]*))$
  const regex = /^-?([0]|([1-9][0-9]*))$/;
  if (!regex.test(value.toString())) {
    throw new Error(`Invalid integer: ${value} at path: ${path}`);
  }

  const minValue = -2147483648;
  const maxValue = 2147483647;
  if (value < minValue || value > maxValue) {
    throw new Error(`Invalid integer: ${value} at path: ${path}`);
  }
};

export const Integer64Validator = (value: number, path: string) => {
  // regex for ^-?([0]|([1-9][0-9]*))$
  const regex = /^-?(0|([1-9][0-9]*))$/;
  if (!regex.test(value.toString())) {
    throw new Error(`Invalid integer64: ${value} at path: ${path}`);
  }

  const minValue = -9223372036854775808n;
  const maxValue = 9223372036854775807n;
  if (value < minValue || value > maxValue) {
    throw new Error(`Invalid integer64: ${value} at path: ${path}`);
  }
};

export const MarkdownValidator = (value: string, path: string) => {
  // regex for ^[ \\r\\n\\t\\S]+$
  const regex = /^[ \r\n\t\S]+$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid markdown: ${value} at path: ${path}`);
  }
};

export const OidValidator = (value: string, path: string) => {
  // regex for ^urn:oid:[0-2](\\.(0|[1-9][0-9]*))+$
  const regex = /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid oid: ${value} at path: ${path}`);
  }
};

export const StringValidator = (value: any, path: string) => {
  // regex for ^[ \\r\\n\\t\\S]+$
  const regex = /^[ \r\n\t\S]+$/;

  if (!regex.test(value)) {
    throw new Error(`Invalid string: ${value} at path: ${path}`);
  }
};

export const PositiveIntValidator = (value: number, path: string) => {
  // regex for ^[1-9][0-9]*$
  const regex = /^[1-9][0-9]*$/;
  if (!regex.test(value.toString())) {
    throw new Error(`Invalid positiveInt: ${value} at path: ${path}`);
  }

  const minValue = 1;
  const maxValue = 2147483647;
  if (value < minValue || value > maxValue) {
    throw new Error(`Invalid positiveInt: ${value} at path: ${path}`);
  }
};

export const TimeValidator = (value: string, path: string, errors: IOperationOutcomeIssue[]) => {
  // regex for ^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?$
  const regex = /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/;
  if (!regex.test(value)) {
    errors.push(
      new OperationOutcomeIssueException({
        severity: 'error',
        code: 'invalid',
        diagnostics: `Invalid time`,
        details: {
          text: `Path: ${path}. Value: ${value}`,
        },
      }),
    );
  }
};

export const UnsignedIntValidator = (value: number, path: string) => {
  // regex for ^[0]|([1-9][0-9]*)$
  const regex = /^[0]|([1-9][0-9]*)$/;
  if (!regex.test(value.toString())) {
    throw new Error(`Invalid unsignedInt: ${value} at path: ${path}`);
  }

  const minValue = 0;
  const maxValue = 2147483647;

  if (value < minValue || value > maxValue) {
    throw new Error(`Invalid unsignedInt: ${value} at path: ${path}`);
  }
};

export const UriValidator = (value: string, path: string) => {
  // regex for ^\\S*$
  const regex = /^\S*$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid uri: ${value} at path: ${path}`);
  }
};

export const UrlValidator = (value: string, path: string) => {
  // regex for ^\\S*$
  const regex = /^\S*$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid url: ${value} at path: ${path}`);
  }
};

export const UuidValidator = (value: string, path: string) => {
  // regex for ^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
  const regex = /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid uuid: ${value} at path: ${path}`);
  }
};

export const InternalPrimitiveValidator = {
  base64Binary: Base64BinaryValidator,
  boolean: BooleanValidator,
  canonical: CanonicalValidator,
  code: CodeValidator,
  date: DateValidator,
  dateTime: DateTimeValidator,
  decimal: DecimalValidator,
  id: IdValidator,
  instant: InstantValidator,
  integer: IntegerValidator,
  integer64: Integer64Validator,
  markdown: MarkdownValidator,
  oid: OidValidator,
  positiveInt: PositiveIntValidator,
  string: StringValidator,
  time: TimeValidator,
  unsignedInt: UnsignedIntValidator,
  uri: UriValidator,
  url: UrlValidator,
  uuid: UuidValidator,
};
// const XhtmlValidator = (value: string, path: string) => {};
