import * as datatypes from "./models"
import * as builders from "./builders"

export class ContextR4 {
  public static readonly VERSION = '4.0.1';

  constructor() {
    console.log('ContextR4 class');
  }

  public static getVersion(): string {
    return ContextR4.VERSION;
  }

  public static getFhirVersion(): string {
    return '4.0.1';
  }

  public getDataTypes() {
      return datatypes;
  }

  public getBuilders() {
      return builders
  }

  public static getValidatiors() {
      return {};
  }
}