export class ReferenceException extends Error {
  constructor(value: string, resources: any[] | string | null = '', path: string = 'Reference.reference') {
    if (!value) throw new Error('ReferenceException: value is required');

    let message = `ReferenceException: [value=${value}]. Reference must be in the format {ResourceType}/{id}. Path: ${path}`;

    if (resources && typeof resources === 'string' && resources === 'all') {
      message = `ReferenceException: [value=${value}]. ResourceType can be any FHIR resource type. Path: ${path}`;
    }

    if (resources && Array.isArray(resources) && resources.length > 0) {
      message = `ReferenceException: [value=${value}]. ResourceType must be one of the following: [${resources.join(
        ', ',
      )}]. Path: ${path}`;
    }
    super(message);
  }
}
