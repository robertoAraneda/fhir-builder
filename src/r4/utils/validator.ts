import InvalidFieldException from "../../commons/exceptions/InvalidFieldException";
import RequiredException from "../../commons/exceptions/RequiredException";
import { AttributeDefinition } from "./resources";
import { Validator } from "./validator-definitions";

export const globalValidator = <T extends {
  [key: string]: any;
}>(
  data: T, 
  definitions: ReadonlyArray<AttributeDefinition<T>>, 
  path: string
): void => {

  definitions.forEach((definition) => {
    // Check if has additional fields except for Resource
    if(definition.type !== "Resource"){
      const properties = Object.keys(data);
      console.log(properties);
      const additionalFields = properties.filter((property) => !definitions.find((definition) => definition.name === property));
      console.log(additionalFields);

      if(additionalFields.length > 0){
        console.log("Throwing error")
        throw new InvalidFieldException(path, additionalFields.join(', '), data);
      }
    }

    // Check if the field is required
    if (definition.isRequired && !hasValue(data[definition.name])) {
      throw new RequiredException(path, String(definition.name), data);
    }

    // Check if the field is a valid enum value
    if (definition.enumValues && data[definition.name] && !definition.isArray) {
      const enumString = data[definition.name] as string;
  
      if (!definition.enumValues.includes(enumString)) {
        throw new Error(`Field must be one of [${definition.enumValues.join(', ')}] in ${path}.${String(definition.name)}`);
      }
    }

    // check if the field is an array
    if (definition.isArray && data[definition.name] && !Array.isArray(data[definition.name])) {
      throw new Error(`Field ${String(definition.name)} must be an array in ${path}`);
    }

    if(data[definition.name]){
      const validator = Validator[definition.type] as (data: any, path: string) => void;
      if (validator) {
        const dataToValidate = data[definition.name];
        validator(dataToValidate, `${path}.${String(definition.name)}`);
      }
    }



    if (definition.isArray && data[definition.name] && Array.isArray(data[definition.name])) {
      globalValidator<T>(
        data[definition.name] as T, 
        definitions, 
        `${path}.${String(definition.name)}`,
      );
    }
  })
}

function hasValue(value: any): boolean {
  return value !== null && value !== undefined && value !== '';
}
