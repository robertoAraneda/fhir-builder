export class InvalidFieldException extends Error {
  constructor(entity: string, field: string, incommingData: any) {
    const message = `InvalidFieldException: Fields [${field}] are not allowed in ${entity}.`;
    super(message);
  }
}
