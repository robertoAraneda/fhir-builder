export class ConstraintException extends Error {
  constructor(path: string, msg: string) {
    const message = `ConstraintException. ${msg}. Path: ${path}`;
    super(message);
  }
}
