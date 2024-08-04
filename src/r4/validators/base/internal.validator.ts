import { InternalDataTypeValidator, InternalDatatypeValidatorType } from './datatype.validator';
import { InternalPrimitiveValidator, InternalPrimitiveValidatorType } from './internalPrimitiveValidator';
import { InternalResourceValidatorType, InternalResourceValidator } from './resource.validator';
import { InternalBackboneValidatorType, InternalBackboneValidator } from './backbone.validator';

export type ValidatorType = InternalDatatypeValidatorType &
  InternalPrimitiveValidatorType &
  InternalResourceValidatorType &
  InternalBackboneValidatorType;

export const InternalValidator: { [Property in keyof ValidatorType]: ValidatorType[Property] } = {
  ...InternalDataTypeValidator,
  ...InternalPrimitiveValidator,
  ...InternalResourceValidator,
  ...InternalBackboneValidator,
};
