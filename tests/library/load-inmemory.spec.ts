import { generateValidators } from '../../src/core/r4/utils/load-inmemory.util';

type ElementStructure = {
  name: string;
  type: string;
  isRequired: boolean;
  isArray: boolean;
  referenceTypes?: string[];
};

function validateJsonStructure(json: any, structure: ElementStructure[]): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  const structureMap = new Map<string, ElementStructure>();

  // Create a map from the structure for easy lookup
  structure.forEach((element) => {
    structureMap.set(element.name, element);
  });

  // Validate each key in the JSON
  validateObject(json, structureMap, '', errors);

  return { isValid: errors.length === 0, errors };
}

function validateObject(json: any, structureMap: Map<string, ElementStructure>, path: string, errors: string[]) {
  for (const key in json) {
    const fullPath = path ? `${path}.${key}` : key;

    const element = structureMap.get(fullPath);

    if (!element) {
      errors.push(`Unexpected property: ${fullPath}`);
      continue;
    }

    const value = json[key];

    if (element.isArray) {
      if (!Array.isArray(value)) {
        errors.push(`Property ${fullPath} should be an array.`);
        continue;
      }

      // find all elements that start with the current path
      const elements = Array.from(structureMap.keys()).filter(
        (element) => element.startsWith(fullPath) && element.includes('.'),
      );

      value.forEach((item: any, index: number) => {
        elements.forEach((element) => {
          const elementPath = element.split('.').slice(1).join('.');
          const elementValue = getNestedValue(item, elementPath);

          if (elementValue) {
            const elementStructure = structureMap.get(element);
            if (!elementStructure) {
              errors.push(`Unexpected property: ${element}`);
              return;
            }
            validateElement(elementValue, elementStructure, element, errors);
          }
        });
      });
    } else {
      validateElement(value, element, fullPath, errors);
    }
  }
}

function validateElement(value: any, element: ElementStructure, path: string, errors: string[]) {
  if (typeof value !== getTypeString(element.type)) {
    errors.push(`Property ${path} should be of type ${element.type}.`);
  }

  if (element.referenceTypes && element.referenceTypes.length > 0) {
    const referenceType = value.reference; // Assuming the reference is represented by the 'reference' property
    if (!element.referenceTypes.includes(referenceType)) {
      errors.push(`Invalid reference type for property ${path}. Expected one of: ${element.referenceTypes.join(', ')}`);
    }
  }

  //validate required properties
  if (element.isRequired && (value === undefined || value === null)) {
    errors.push(`Missing required property: ${path}`);
  }
}

function getTypeString(type: string): string {
  switch (type) {
    case 'string':
    case 'code':
    case 'uri':
    case 'id':
    case 'canonical':
    case 'dateTime':
    case 'date':
    case 'time':
    case 'instant':
    case 'oid':
    case 'url':
    case 'uuid':
      return 'string';
    case 'boolean':
      return 'boolean';
    case 'integer':
    case 'positiveInt':
    case 'unsignedInt':
    case 'decimal':
      return 'number';
    case 'Reference':
      return 'object';
    default:
      return 'object'; // Default to object for complex types
  }
}

function getNestedValue(obj: any, path: string): any {
  const segments = path.split('.');
  let current = obj;

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const arrayMatch = segment.match(/([a-zA-Z_$][0-9a-zA-Z_$]*)\[(\d+)\]/);

    if (arrayMatch) {
      const [, arrayName, index] = arrayMatch;
      current = current[arrayName];

      if (Array.isArray(current)) {
        current = current[parseInt(index, 10)];
      } else {
        return undefined;
      }
    } else {
      current = current[segment];
    }

    if (current === undefined) {
      return undefined;
    }
  }

  return current;
}

describe('Load InMemory', () => {
  it('should load in memory', () => {
    const validators = generateValidators();

    const structure = validators.get('Task');
    expect(structure).toBeDefined();

    const incomingJson = {
      id: '123',
      meta: { versionId: '1', lastUpdated: '2021-04-12T12:34:56Z' },
      implicitRules: 'some-uri',
      language: 'en',
      text: { status: 'generated', div: '<div>Some narrative</div>' },
      status: 'completed',
      intent: 'order',
      input: [
        {
          valueBoolean: true,
        },
      ],
    };

    // const result = validateJsonStructure(incomingJson, structure);
  });
});
