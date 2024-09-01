import { AttributeDefinition } from '../../r4/validators/base/definitions';

type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K;
}[keyof T];

function getNonFunctionKeys<T extends object>(obj: T): NonFunctionKeys<T>[] {
  return Object.keys(obj).filter((key) => typeof obj[key as keyof T] !== 'function') as NonFunctionKeys<T>[];
}

/**
 * @description Asserts that the model fields match the attributes of the model
 * @param expectedAttributes - the expected attributes of the model
 * @param instance - the instance of the model
 * @constructor AssertModelFieldsMatchAttributes
 * @throws {Error} if the model fields do not match the attributes of the model
 */
export function AssertModelFieldsMatchAttributes<T extends object>(
  expectedAttributes: readonly AttributeDefinition<T>[],
  instance: T,
): void {
  const expectedFieldNames = expectedAttributes.map((attribute) => attribute.name) as string[];

  const actualFieldNames = getNonFunctionKeys(instance) as string[];

  const unmatchedFields = actualFieldNames.filter((field) => !expectedFieldNames.includes(field));

  if (unmatchedFields.length > 0) {
    throw new Error(
      `The instance of ${instance.constructor.name} is missing expected fields: ${unmatchedFields.join(', ')}`,
    );
  }
}
