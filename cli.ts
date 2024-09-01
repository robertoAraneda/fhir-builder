import fs, { readdirSync, writeFileSync } from 'fs';
import path, { basename, join } from 'path';
import { exec } from 'node:child_process';

const args = process.argv.slice(2);

const filePath = args[0];

// get content from ./coverage.json
const resourceFile = path.join(__dirname, filePath);

console.log('Reading file from ', resourceFile);

const resource = JSON.parse(fs.readFileSync(resourceFile, 'utf8'));

const globalsKeys = Object.keys(resource.definitions);
console.log('Definitions found: ', globalsKeys.join(', '));

function getRef(ref: string): string {
  if (!ref) return '';
  return ref.split('/').pop() || '';
}

function toCamelCase(input: string): string {
  if (!input) return '';
  return input.includes('_')
    ? input
        .split('_')
        .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
        .join('')
    : input;
}

interface ModelField {
  name: string;
  type: string;
  isArray: boolean;
  isRequired: boolean;
  enumValues?: readonly string[];
  referenceTypes?: readonly string[];
}

function getOriginalType(globalKey: string, resource: any, key: string): string {
  return getRef(
    resource.definitions[globalKey].properties[key].items?.$ref || resource.definitions[globalKey].properties[key].$ref,
  );
}

function getType(globalKey: string, resource: any, key: string): string {
  if (resource.definitions[globalKey].properties[key].type === 'array') {
    if (resource.definitions[globalKey].properties[key].items.$ref) {
      return toCamelCase(getRef(resource.definitions[globalKey].properties[key].items.$ref));
    } else if (resource.definitions[globalKey].properties[key].items.enum) {
      return 'string';
    } else {
      return '';
    }
  } else if (resource.definitions[globalKey].properties[key].$ref) {
    return toCamelCase(getRef(resource.definitions[globalKey].properties[key].$ref));
  } else {
    if (resource.definitions[globalKey].properties[key].enum) {
      return 'string';
    }
    return resource.definitions[globalKey].properties[key].type;
  }
}

function getEnumReference(globalKey: string, resource: any, key: string): string[] {
  return resource.definitions[globalKey].properties[key].enum;
}

function getEnumCodes(globalKey: string, resource: any, key: string): string[] {
  return resource.definitions[globalKey].properties[key].enum;
}

function createModelFields(keys: string[], globalKey: string, resource: any): ModelField[] {
  return keys.map((key) => ({
    name: key,
    type: getType(globalKey, resource, key),
    isArray: resource.definitions[globalKey].properties[key].type === 'array',
    isRequired: resource.definitions[globalKey].required
      ? (resource.definitions[globalKey].required.includes(key) as boolean)
      : false,
    referenceTypes:
      getOriginalType(globalKey, resource, key) === 'Reference'
        ? getEnumReference(globalKey, resource, key)
        : undefined,
    enumValues:
      getOriginalType(globalKey, resource, key) === 'code' ? getEnumCodes(globalKey, resource, key) : undefined,
  }));
}

function createClassValidator(modelFields: ModelField[], globalKey: string, resource: any): string {
  const modelName = globalKey.replace('_', '');
  const hasUnderscore = globalKey.includes('_');
  return `
import { ${hasUnderscore ? 'createBackboneDefinition' : 'createResourceDefinition'} } from '../base/definitions';
import { I${modelName}, IOperationOutcomeIssue } from 'fhirtypes/dist/r4';
import { ModelValidator } from '../base';
import { AssertModelFieldsMatchAttributes } from '../../../commons/utils';
import { ${modelName} } from '../../../../r4/models';

/**
  * @description The model fields for the ${modelName} model
  */
const modelFields = ${hasUnderscore ? 'createBackboneDefinition' : 'createResourceDefinition'}<I${modelName}>(${JSON.stringify(modelFields)});

/**
  * @description Validates the ${modelName} model
  * @param dataToValidate - the ${modelName} model to validate
  * @param path - the path to the model
  * @param errors - the errors array
  */
export function ${modelName}Validator<T extends I${modelName}>(dataToValidate: T, path = '${modelName}', errors: IOperationOutcomeIssue[] = []): void {

  // Ensure that the model fields match the attributes of the model
  AssertModelFieldsMatchAttributes(modelFields, new ${modelName}());

  // Validate the model and add any errors to the errors array
  ModelValidator<T>({
    dataToValidate,
    modelDefinition: modelFields,
    path,
    errors,
  });
}
`;
}

function createClassModel(modelFields: ModelField[], globalKey: string, resource: any, inheritance: string): string {
  const modelName = globalKey.replace('_', '');
  const hasUnderscore = globalKey.includes('_');
  return `
import { ${Array.from(
    new Set(
      modelFields
        .filter((field) => {
          if (field.type === 'Resource') {
            return true;
          } else {
            return !Object.keys(parseType).includes(field.type);
          }
        })
        .map((field) => `I${toCamelCase(field.type)}`),
    ),
  ).join(', ')} } from 'fhirtypes/dist/r4';
import { I${modelName}, IOperationOutcome } from 'fhirtypes/dist/r4';
import { ${inheritance}, IValidatable, ISerializable  } from '../base';
import { ConformanceValidator } from '../../../core/r4/validators/base';

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for ${modelName} ${!hasUnderscore ? 'Resource' : 'BackboneElement'}
  ${!hasUnderscore ? '* @property {string} resourceType' : undefined}
  * ${modelFields
    .map((field) => {
      return `@property {${parseType[field.type!] || `I${toCamelCase(field.type)}`}${field.isArray ? '[]' : ''}} ${field.name}`;
    })
    .join('\n  * ')}
  * @author Roberto Araneda Espinoza
  */
export class ${modelName} extends ${inheritance} implements I${modelName}, IValidatable, ISerializable {
  ${
    !hasUnderscore
      ? `
  /**
    * @description The type of resource
    */
  resourceType? = '${modelName}';`
      : ''
  } 
  ${modelFields
    .map((field) => {
      return `
  /**
   * @description ${resource.definitions[globalKey].properties[field.name].description}
   */
  ${field.name}${field.isRequired ? '' : '?'}: ${parseType[field.type!] || `I${toCamelCase(field.type)}`}${field.isArray ? '[]' : ''};
  `;
    })
    .join('')}
  /**
   * @description Returns a JSON representation of the model
    * @returns {Record<string, any>}
   */
  toJson(): Record<string, any>  {
    return JSON.parse(JSON.stringify(this));
  }
  
  /**
    * @description Returns a string representation of the model
    * @returns {string}
    */
  toString(): string {
    return \`${modelName}\${JSON.stringify(this.toJson())}\`;
  }
  
  /**
    * @description Returns a pretty string representation of the model
    * @returns {string} 
    */
  toPrettyString(): string {
    return \`${modelName}\${JSON.stringify(this.toJson(), null, 2)}\`;
  }
  
  /**
    * @description Returns a serialized string representation of the model
    * @returns {string}
    */
  serialize(): string {
    return JSON.stringify(this.toJson());
  }
  
  /**
    * @description Validates the model
    * @returns {isValid: boolean, operationOutcome: IOperationOutcome}
    */
  validate(): { isValid: boolean; operationOutcome: IOperationOutcome } {
    return ConformanceValidator('${modelName}', this);
  }
  
  constructor(args?: I${modelName}) {
    super();
    if (args) Object.assign(this, args);
  }   
}
`;
}

function createFunctionPrimitiveExtension(
  hasElementStartingWithUnderscore: boolean,
  hasElementStartingWithUnderscoreAndArray: boolean,
  modelName: string,
  elementStartingWithUnderscoreAndArray: string[],
): string {
  if (hasElementStartingWithUnderscore) {
    if (hasElementStartingWithUnderscoreAndArray) {
      return `
  /**
    * @description Adds a primitive extension to the element
    * @param param - the field to add the extension to
    * @param extension - the extension to add
    * @returns {this}
    * @example addPrimitiveExtension('_value', { value: 'test' })  
    */
  addPrimitiveExtension<T extends PrimitiveExtensionFields>(
    param: T,
    extension: IElement,
  ): this {
    const arrayParam = [${elementStartingWithUnderscoreAndArray.map((element) => `'${element}'`)}];
    if (arrayParam.includes(param)) {
       this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)}[param] = this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)}[param] || [];
      (this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)}[param] as IElement[]).push(extension as IElement);

      return this;
    }

    const localParam = param as Exclude<PrimitiveExtensionFields, UnderscoreArrayElements>;
    this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)}[localParam] = extension as IElement;
    return this;
  }
      `;
    } else {
      return `
  /**
    * @description Adds a primitive extension to the element
    * @param param - the field to add the extension to
    * @param extension - the extension to add
    * @returns {this}
    * @example addPrimitiveExtension('_value', { value: 'test' })  
    */
  addPrimitiveExtension(param: PrimitiveExtensionFields, extension: IElement): this {
    this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)}[param] = extension;
    return this;
  }`;
    }
  } else {
    return '';
  }
}

function createClassBuilder(modelFields: ModelField[], globalKey: string, resource: any, inheritance: string): string {
  const hasElementStartingWithUnderscore = modelFields.some((field) => field.name.startsWith('_'));
  const elementStartingWithUnderscoreAndArray = modelFields
    .filter((field) => field.name.startsWith('_') && field.isArray && field.type === 'Element')
    .map((field) => field.name);

  const hasUnderscore = globalKey.includes('_');

  const hasElementStartingWithUnderscoreAndArray = elementStartingWithUnderscoreAndArray.length > 0;
  const modelName = globalKey.replace('_', '');
  return `
import { ${Array.from(
    new Set(
      modelFields
        .filter((field) => {
          if (field.type === 'Resource') {
            return true;
          } else {
            return !Object.keys(parseType).includes(field.type);
          }
        })
        .map((field) => `I${toCamelCase(field.type)}`),
    ),
  ).join(', ')} } from 'fhirtypes/dist/r4';
import { ${modelName} } from '../../models';
import { ${inheritance.replace('Element', '')}Builder, IBuildable } from '../base';
${hasElementStartingWithUnderscore || hasElementStartingWithUnderscoreAndArray ? 'import {' : ''} ${hasElementStartingWithUnderscore ? 'ExtractUnderscoreKeys' : ''} ${hasElementStartingWithUnderscore && hasElementStartingWithUnderscoreAndArray ? ',' : ''} ${hasElementStartingWithUnderscoreAndArray ? 'ExtractUnderscoreArrayKeys' : ''} ${hasElementStartingWithUnderscore || hasElementStartingWithUnderscoreAndArray ? "} from '../../../core/commons/utils';" : ''}
${
  hasElementStartingWithUnderscore
    ? `
// Extract the keys that start with an underscore
type PrimitiveExtensionFields = ExtractUnderscoreKeys<${modelName}>;`
    : ''
};
${
  hasElementStartingWithUnderscoreAndArray
    ? `
// Extract the keys that are arrays and start with an underscore
type UnderscoreArrayElements = ExtractUnderscoreArrayKeys<${modelName}>`
    : ''
}
/**
  * @description Interface for chaining the building of a ${modelName}
  * @interface I${modelName}Builder
  * @extends {IBuildable<${modelName}>}
  */
interface I${modelName}Builder extends IBuildable<${modelName}> {
  ${modelFields
    .filter((field) => !field.name.startsWith('_'))
    .map((field) => {
      const functionNamePrefix = field.isArray ? 'add' : 'set';
      const functionName = `${functionNamePrefix}${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`;
      return `${functionName}(value: ${parseType[field.type!] || 'I' + toCamelCase(field.type)}): this;`;
    })
    .join('')}
}

/**
  * @version R4 (v4.0.1)
  * @summary FHIR® Specification by HL7®
  * @description Class for building a ${modelName}
  * @class ${modelName}Builder
  * @extends {${inheritance.replace('Element', '')}Builder}
  * @implements {I${modelName}Builder}
  * @author Roberto Araneda Espinoza  
  */
export class ${modelName}Builder extends ${inheritance.replace('Element', '')}Builder implements I${modelName}Builder {
  private readonly ${modelName?.charAt(0).toLowerCase() + modelName.slice(1)}: ${modelName};

  constructor() {
    super();
    this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)} = new ${modelName}();
  }
  
  ${
    !hasUnderscore
      ? `
  /**
    * @description Sets the resource type to ${modelName}
    * @param json - the json to parse
    * @returns {this}
    */
  fromJSON(json: unknown): this {
    const incomingData = typeof json === 'string' ? JSON.parse(json) : json;
    Object.assign(this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)}, incomingData);
    return this;
  }
  `
      : ''
  }
  
  ${createFunctionPrimitiveExtension(hasElementStartingWithUnderscore, hasElementStartingWithUnderscoreAndArray, modelName, elementStartingWithUnderscoreAndArray)}
  
  /**
    * @description Builds the model
    * @returns {${modelName}}
    */
  build(): ${modelName} {
    return Object.assign(this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)}, super.build());
  }

  ${modelFields
    .filter((field) => !field.name.startsWith('_'))
    .map((field) => {
      const functionNamePrefix = field.isArray ? 'add' : 'set';
      const functionName = `${functionNamePrefix}${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`;

      if (field.isArray) {
        return `
  /**
    * @description Adds a value to the ${field.name} array
    * @description ${resource.definitions[globalKey].properties[field.name].description}
    * @param value - the value to add
    * @returns {this}
    */
  ${functionName}(value: ${parseType[field.type!] || 'I' + toCamelCase(field.type)}): this {
    this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)}.${field.name} = this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)}.${field.name} || [];
    this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)}.${field.name}.push(value);
    return this;
  }`;
      }

      return `
  /**
    * @description Sets the ${field.name} value
    * @description ${resource.definitions[globalKey].properties[field.name].description}
    * @param value - the value to set
    * @returns {this}
    */
  ${functionName}(value: ${parseType[field.type!] || 'I' + toCamelCase(field.type)}): this {
    this.${modelName.charAt(0).toLowerCase() + modelName.slice(1)}.${field.name} = value;
    return this;
  }
  `;
    })
    .join('')}
}
`;
}

const parseType: Record<string, string> = {
  code: 'string',
  uri: 'string',
  positiveInt: 'number',
  unsignedInt: 'number',
  string: 'string',
  markdown: 'string',
  id: 'string',
  oid: 'string',
  url: 'string',
  canonical: 'string',
  base64Binary: 'string',
  dateTime: 'string',
  date: 'string',
  time: 'string',
  instant: 'string',
  decimal: 'number',
  integer: 'number',
  boolean: 'boolean',
  number: 'number',
  'xhtml-fragment': 'string',
  Resource: 'IResource & Record<string, any>',
};

for (const globalKey of globalsKeys) {
  if (globalKey.includes('_')) {
    const omittedKeys = ['id', 'extension', 'modifierExtension'];
    const removeUnderscore = globalKey.replace('_', '');

    const keys = Object.keys(resource.definitions[globalKey].properties).filter((key) => !omittedKeys.includes(key));

    const modelFields = createModelFields(keys, globalKey, resource);

    // create file with this content
    const modelFieldsFile = path.join(__dirname, `src/core/r4/validators/backbones/${removeUnderscore}Validator.ts`);

    //create a validator
    fs.writeFileSync(modelFieldsFile, createClassValidator(modelFields, globalKey, resource));
    console.log('Created validator for ', removeUnderscore);

    // create a model
    const modelFile = path.join(__dirname, `src/r4/models/backbones/${removeUnderscore}.ts`);
    fs.writeFileSync(modelFile, createClassModel(modelFields, globalKey, resource, 'BackboneElement'));
    console.log('Created model for ', removeUnderscore);

    // create builder
    const builderFile = path.join(__dirname, `src/r4/builders/backbones/${removeUnderscore}Builder.ts`);
    fs.writeFileSync(builderFile, createClassBuilder(modelFields, globalKey, resource, 'BackboneElement'));
    console.log('Created builder for ', removeUnderscore);
  } else {
    const omittedKeys = [
      'resourceType',
      'id',
      'meta',
      'implicitRules',
      'language',
      'text',
      'contained',
      'extension',
      'modifierExtension',
      '_implicitRules',
      '_language',
    ];

    if (Object.keys(resource.definitions[globalKey].properties).includes('resourceType')) {
      const keys = Object.keys(resource.definitions[globalKey].properties).filter((key) => !omittedKeys.includes(key));

      const modelFields = createModelFields(keys, globalKey, resource);

      // create file with this content
      const modelFieldsFile = path.join(__dirname, `src/core/r4/validators/resources/${globalKey}Validator.ts`);
      const entity = getRef(resource.$ref) || 'Entity';

      //create a validator
      fs.writeFileSync(modelFieldsFile, createClassValidator(modelFields, globalKey, resource));
      console.log('Created validator for ', globalKey);

      // create a model
      const modelFile = path.join(__dirname, `src/r4/models/resources/${globalKey}.ts`);
      fs.writeFileSync(modelFile, createClassModel(modelFields, globalKey, resource, 'DomainResource'));
      console.log('Created model for ', globalKey);

      // create builder
      const builderFile = path.join(__dirname, `src/r4/builders/resources/${globalKey}Builder.ts`);
      fs.writeFileSync(builderFile, createClassBuilder(modelFields, globalKey, resource, 'DomainResource'));
      console.log('Created builder for ', globalKey);
    } else {
      const keys = Object.keys(resource.definitions[globalKey].properties).filter((key) => !omittedKeys.includes(key));

      const modelFields = createModelFields(keys, globalKey, resource);

      // create file with this content
      const modelFieldsFile = path.join(__dirname, `src/core/r4/validators/datatypes/${globalKey}Validator.ts`);
      const entity = getRef(resource.$ref) || 'Entity';

      //create a validator
      fs.writeFileSync(modelFieldsFile, createClassValidator(modelFields, globalKey, resource));
      console.log('Created validator for ', globalKey);

      // create a model
      const modelFile = path.join(__dirname, `src/r4/models/datatypes/${globalKey}.ts`);
      fs.writeFileSync(modelFile, createClassModel(modelFields, globalKey, resource, 'Element'));
      console.log('Created model for ', globalKey);

      // create builder
      const builderFile = path.join(__dirname, `src/r4/builders/datatypes/${globalKey}Builder.ts`);
      fs.writeFileSync(builderFile, createClassBuilder(modelFields, globalKey, resource, 'Element'));
      console.log('Created builder for ', globalKey);
    }
  }

  const modelFolders = ['backbones', 'resources', 'datatypes'];

  for (const folder of modelFolders) {
    const files = readdirSync(join(__dirname, `src/r4/models/${folder}`));
    const exports = files
      .filter((file) => file !== 'index.ts')
      .map((file) => {
        const moduleName = basename(file, '.ts');

        const name = moduleName.replace('.model', '');

        const camelCaseName = name.replace(/[-.](.)/g, (_, g1) => g1.toUpperCase());
        const PascalCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);

        return `export { ${PascalCaseName.replace('Model', '')} } from './${moduleName}';`;
      })
      .join('\n');

    const indexPath = join(__dirname, `src/r4/models/${folder}/index.ts`);
    writeFileSync(indexPath, exports);
  }

  console.log('Generated exports for models');

  // builders
  const builderFolders = ['backbones', 'resources', 'datatypes'];

  for (const folder of builderFolders) {
    const files = readdirSync(join(__dirname, `src/r4/builders/${folder}`));
    const exports = files
      .filter((file) => file !== 'index.ts')
      .map((file) => {
        const moduleName = basename(file, '.ts');
        const camelCaseName = moduleName.replace(/[-.](.)/g, (_, g1) => g1.toUpperCase());
        const PascalCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);

        return `export { ${PascalCaseName} } from './${moduleName}';`;
      })
      .join('\n');

    const indexPath = join(__dirname, `src/r4/builders/${folder}/index.ts`);
    writeFileSync(indexPath, exports);
  }

  console.log('Generated exports for builders');

  // validators
  const validatorFolders = ['backbones', 'resources', 'datatypes'];

  for (const folder of validatorFolders) {
    const files = readdirSync(join(__dirname, `src/core/r4/validators/${folder}`));
    const exports = files
      .filter((file) => file !== 'index.ts')
      .map((file) => {
        const moduleName = basename(file, '.ts');

        const camelCaseName = moduleName.replace(/[-.](.)/g, (_, g1) => g1.toUpperCase());
        const PascalCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
        console.log('Generated: ', PascalCaseName);

        return `export { ${PascalCaseName} } from './${moduleName}';`;
      })
      .join('\n');

    const indexPath = join(__dirname, `src/core/r4/validators/${folder}/index.ts`);
    writeFileSync(indexPath, exports);
  }

  console.log('Generated exports for validators');
  exec('npm run format', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

export { resource };

/*

ts-node cli.ts ./ajv/procedure.json && \
ts-node cli.ts ./ajv/allergyintolerance.json && \
ts-node cli.ts ./ajv/bundle.json && \
ts-node cli.ts ./ajv/careteam.json && \
ts-node cli.ts ./ajv/coverage.json && \
ts-node cli.ts ./ajv/episodeofcare.json && \
ts-node cli.ts ./ajv/observation.json && \
ts-node cli.ts ./ajv/patient.json && \
ts-node cli.ts ./ajv/servicerequest.json
 */
