import { InternalDataTypeValidator } from './datatype.validator';
import { InternalPrimitiveValidator } from './internalPrimitiveValidator';
import { InternalResourceValidator } from './resource.validator';
import { InternalBackboneValidator } from './backbone.validator';
import type { DatatypeType, ResourceType, BackboneElementType } from 'fhirtypes/dist/r4/types';

export type fhirR4Types =
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
