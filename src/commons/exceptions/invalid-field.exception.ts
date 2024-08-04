export class InvalidFieldException extends Error {
  constructor(path: string, field: string[]) {
    const message = `InvalidFieldException. Field(s): '${field.join(', ')}'. Path: ${path}.`;
    super(message);
  }
}
