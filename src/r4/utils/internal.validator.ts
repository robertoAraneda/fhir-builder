import { DatatypeValidatorType, InternalDataTypeValidator } from './datatype.validator';
import { PrimitiveValidator, PrimitiveValidatorType } from './primitive.validator';

export type ResourceValidatorType = {};

export type ValidatorType = DatatypeValidatorType & PrimitiveValidatorType;

export const InternalValidator: ValidatorType = {
  ...InternalDataTypeValidator,
  ...PrimitiveValidator,
};
