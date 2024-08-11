import { InternalDataTypeValidator, InternalDatatypeValidatorType } from './datatype.validator';
import { InternalPrimitiveValidator, InternalPrimitiveValidatorType } from './internalPrimitiveValidator';
import { InternalResourceValidatorType, InternalResourceValidator } from './resource.validator';
import { InternalBackboneValidatorType, InternalBackboneValidator } from './backbone.validator';
import { DatatypeType, ResourceType, BackboneElementType } from 'fhirtypes/dist/r4/types';

export type ValidatorType = InternalDatatypeValidatorType &
  InternalPrimitiveValidatorType &
  InternalResourceValidatorType &
  InternalBackboneValidatorType;

type primitiveType =
  | 'base64Binary'
  | 'boolean'
  | 'canonical'
  | 'code'
  | 'date'
  | 'dateTime'
  | 'decimal'
  | 'id'
  | 'instant'
  | 'integer'
  | 'integer64'
  | 'markdown'
  | 'oid'
  | 'positiveInt'
  | 'string'
  | 'time'
  | 'unsignedInt'
  | 'uri'
  | 'url'
  | 'uuid'
  | 'Extension' // TODO - this is a placeholder for now
  | 'Meta' // TODO - this is a placeholder for now
  | 'Resource' // TODO - this is a placeholder for now
  | 'Element' // TODO - this is a placeholder for now
  | 'Narrative' // TODO - this is a placeholder for now
  | 'Quantity'; // TODO - this is a placeholder for now

export type fhirR4Types =
  | primitiveType
  | DatatypeType
  | ResourceType
  | BackboneElementType
  // TODO - this is a placeholder for now
  | 'EpisodeOfCareStatusHistory'
  | 'EpisodeOfCareDiagnosis';

export const InternalValidator: Record<string, any> = {
  ...InternalDataTypeValidator,
  ...InternalPrimitiveValidator,
  ...InternalResourceValidator,
  ...InternalBackboneValidator,
};
