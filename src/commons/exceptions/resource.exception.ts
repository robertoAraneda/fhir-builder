export class ResourceException extends Error {
  constructor(entity: string, errors?: any[] | null) {
    const _error = errors
      ?.map((error) => {
        const { keyword, message: msg, params, constraint } = error;

        if (keyword === 'pattern') {
          return msg;
        }

        if (keyword === 'required') {
          return msg;
        }

        if (keyword === 'type') {
          return msg;
        }

        if (keyword === 'const') {
          return msg;
        }

        if (keyword === 'oneOf') {
          return msg;
        }

        if (keyword === 'enum') {
          return msg;
        }

        if (keyword === 'additionalProperties') {
          return `${msg}: [${params.additionalProperty}]`;
        }

        if (constraint) {
          return `${constraint.description} (${constraint.id})`;
        }
      })
      .join(', ');

    const message = `Invalid Resource: ${entity}: ${_error}`;
    super(message);
  }
}
