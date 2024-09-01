import { DatatypesValidator } from './DatatypesValidator';
import { PrimitivesValidator } from './PrimitivesValidator';
import { InternalResourceValidator } from './ResourcesValidator';
import { BackbonesValidator } from './BackbonesValidator';
import type { DatatypeType, ResourceType, BackboneElementType } from 'fhirtypes/dist/r4/types';

export type fhirR4Types =
  | DatatypeType
  | ResourceType
  | BackboneElementType
  // TODO - this is a placeholder for now
  | 'EpisodeOfCareStatusHistory'
  | 'EpisodeOfCareDiagnosis'
  | 'Repeat'
  | 'CoverageClass'
  | 'CoverageCostToBeneficiary'
  | 'CoverageException';

export const InternalValidator: Record<string, any> = {
  ...DatatypesValidator,
  ...PrimitivesValidator,
  ...InternalResourceValidator,
  ...BackbonesValidator,
};
