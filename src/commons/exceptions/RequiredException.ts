export default class RequiredException extends Error {
  constructor(entity: string, field: string, incommingData: any) {
    const message = `RequiredFieldException: Field [${field}] is required in ${entity}.\nReceived: ${JSON.stringify(incommingData, null, 2)}`;
    super(message);
  }
}
