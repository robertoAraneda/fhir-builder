export class ConstraintException extends Error {
  constructor(path: string, msg: string) {
    const message = `ConstraintException: [${path}] ${msg}`;
    super(message);
  }
}
