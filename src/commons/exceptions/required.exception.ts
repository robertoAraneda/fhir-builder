export class RequiredException extends Error {
  constructor(path: string, field: string) {
    const message = `RequiredFieldException. Field: '${field}'. Path: ${path}`;
    super(message);
  }
}
