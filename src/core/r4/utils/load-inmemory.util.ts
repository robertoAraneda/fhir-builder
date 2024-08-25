import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

/**
 * Parses a YAML file and returns the corresponding JSON object.
 * @param {string} filePath - Relative path to the YAML file.
 * @returns {Object} The parsed JSON object.
 */
function parseYamlFile(filePath: string) {
  const absolutePath = path.resolve(__dirname, '..', filePath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  return YAML.parse(fileContent);
}

/**
 * @property {string} directory - Directory from which to load resources.
 * @property {function(string): boolean} fileFilter - Function to filter the files by name.
 * @property {function(Object): string} keyBuilder - Function to generate a unique key for each resource.
 */
interface LoadResourcesConfig {
  directory: string;
  fileFilter: (fileName: string) => boolean;
  keyBuilder: (json: any) => string;
}

/**
 * Loads resources from a specified directory, filters them based on the given criteria,
 * and maps them using a provided key builder function.
 * @param {LoadResourcesConfig} config - Configuration object for loading resources.
 * @returns {Map<string, Object>} A map containing the loaded resources, keyed by the generated key.
 */
function loadResourcesFromDirectory(config: LoadResourcesConfig): Map<string, object> {
  const { directory, fileFilter, keyBuilder } = config;
  const dirPath = path.resolve(__dirname, '..', directory);
  const files = fs.readdirSync(dirPath).filter(fileFilter);
  const resourceMap = new Map();

  files.forEach((fileName) => {
    const json = parseYamlFile(path.join(directory, fileName));
    resourceMap.set(keyBuilder(json), json);
  });

  return resourceMap;
}

/**
 * Loads value sets into memory by filtering files and mapping them using their URL and version.
 * @returns {Map<string, Object>} A map containing the loaded value sets.
 */
function loadInMemoryValueSets(): Map<string, object> {
  return loadResourcesFromDirectory({
    directory: 'valuesets',
    fileFilter: (fileName) => fileName.includes('Valueset-'),
    keyBuilder: (json) => `${json.url}|${json.version}`,
  });
}

/**
 * Loads code systems into memory by filtering files and mapping them using their URL.
 * @returns {Map<string, Object>} A map containing the loaded code systems.
 */
function loadInMemoryCodeSystems(): Map<string, object> {
  return loadResourcesFromDirectory({
    directory: 'codesystems',
    fileFilter: (fileName) => fileName.includes('Codesystem-'),
    keyBuilder: (json) => `${json.url}`,
  });
}

/**
 * Loads profiles into memory by filtering files and mapping them using their resource type and ID.
 * @returns {Map<string, Object>} A map containing the loaded profiles.
 */
function loadInMemoryProfiles() {
  return loadResourcesFromDirectory({
    directory: 'profiles',
    fileFilter: (fileName) => fileName.includes('profile'),
    keyBuilder: (json) => `${json.resourceType}|${json.id}`,
  });
}

/**
 * Utility function to load value sets, code systems, and profiles into memory.
 * @returns {{ valueSetMap: Map<string, object>, codeSystemMap: Map<string, object>, resourceMap: Map<string, object> }}
 * An object containing maps for value sets, code systems, and profiles.
 */
function LoadInMemoryUtil(): {
  valueSetMap: Map<string, object>;
  codeSystemMap: Map<string, object>;
  resourceMap: Map<string, object>;
} {
  const valueSetMap = loadInMemoryValueSets();
  const codeSystemMap = loadInMemoryCodeSystems();
  const resourceMap = loadInMemoryProfiles();
  return { valueSetMap, codeSystemMap, resourceMap };
}

/**
 * Generates validators for the loaded resources.
 * @returns {Map<string, any>} A map containing validators keyed by resource ID.
 */
export function generateValidators(): Map<string, any> {
  const { valueSetMap, codeSystemMap, resourceMap } = LoadInMemoryUtil();
  const validators = new Map();
  for (const [key, value] of resourceMap.entries()) {
    const [, id] = key.split('|');
    const resourceValidator = new ResourceValidator(value, valueSetMap, codeSystemMap);
    const structure = resourceValidator.generateStructure();
    validators.set(id, structure);
  }
  return validators;
}

/**
 * Generates the structure of the resource.
 * @returns {Array<Object>} An array of elements representing the resource structure.
 */
class ResourceValidator {
  private resource: any;
  private valueSetMap: Map<string, any>;
  private codeSystemMap: Map<string, any>;

  constructor(resource: any, valueSetMap: Map<string, any>, codeSystemMap: Map<string, any>) {
    this.resource = resource;
    this.valueSetMap = valueSetMap;
    this.codeSystemMap = codeSystemMap;
  }

  /**
   * Generates the structure of the resource.
   * @returns {Array<Object>} An array of elements representing the resource structure.
   */
  generateStructure(): Array<object> {
    const elements = this.resource.snapshot.element.concat(
      ...this.resource.snapshot.element.map((element: any) => this.createElementStructureForValueX(element)),
    );

    return elements.map((element: any) => this.createElementStructure(element)).filter((el: any) => el !== null);
  }

  private createElementStructureForValueX(element: any) {
    const [base, mainAttr, subAttr] = element.id.split('.');
    const innerAttr = `${mainAttr}.${subAttr}`;
    const elements: any[] = [];
    const innerElements: any[] = [];
    if (mainAttr?.includes('[x]')) {
      const types = element.type.map((type: any) => type.code);
      types.forEach((type: string) => {
        const newElement = { ...element };
        newElement.id = `${base}.${mainAttr.replace('[x]', '')}${type.charAt(0).toUpperCase() + type.slice(1)}`;
        newElement.type = [{ code: type }];
        newElement.min = 0;
        elements.push(newElement);
      });
    }

    if (innerAttr?.includes('[x]')) {
      const types = element.type.map((type: any) => type.code);

      types.forEach((type: string) => {
        const newElement = { ...element };
        newElement.id = `${base}.${innerAttr.replace('[x]', '')}${type.charAt(0).toUpperCase() + type.slice(1)}`;
        newElement.type = [{ code: type }];
        newElement.min = 0;
        innerElements.push(newElement);
      });
    }
    return elements.concat(innerElements);
  }

  /**
   * Creates the structure for a single element.
   * @param {Object} element - The element to structure.
   * @returns {Object|null} The structured element, or null if the element is not valid.
   */
  private createElementStructure(element: any): object | null {
    const [, mainAttr, subAttr] = element.id.split('.');

    if (!mainAttr) {
      return null;
    }

    if (element.id.includes('[x]')) {
      return null;
    }

    const isRequired = element.min === 1;
    const isArray = element.max === '*';
    const isBlocked = element.max === '0';
    const type = this.determineElementType(element);

    const references = this.getReferenceTypes(element);
    const enumValues = this.getEnumValues(element);

    if (isBlocked) {
      return null;
    }

    return {
      name: subAttr ? `${mainAttr}.${subAttr}` : mainAttr,
      type: type,
      isRequired: isRequired,
      isArray: isArray,
      referenceTypes: references.length > 0 ? references : undefined,
      enumValues: enumValues.length > 0 ? enumValues : undefined,
    };
  }

  /**
   * Determines the element type.
   * @param {string} base - The base element name.
   * @param {string} attr - The attribute name.
   * @param {Object} element - The element being processed.
   * @returns {string} The determined element type.
   */
  private determineElementType(element: any): string {
    const [base, mainAttr, subAttr] = element.id.split('.');
    const innerAttr = `${mainAttr}.${subAttr}`;
    let type = element.type[0].code;
    if (type === 'BackboneElement') {
      type = `${base}${mainAttr.charAt(0).toUpperCase() + mainAttr.slice(1)}`;
    } else if (innerAttr.includes('id')) {
      type = 'string';
    }
    return type;
  }

  /**
   * Retrieves reference types for an element.
   * @param {Object} element - The element being processed.
   * @returns {Array<string>} An array of reference types.
   */
  private getReferenceTypes(element: any): Array<string> {
    if (element.type[0]?.targetProfile && element.type[0].code === 'Reference') {
      return element.type[0]?.targetProfile?.map((profile: string) => profile.split('/').pop());
    }
    return [];
  }

  /**
   * Retrieves enumeration values for an element.
   * @param {Object} element - The element being processed.
   * @returns {Array<string>} An array of enumeration values.
   */
  private getEnumValues(element: any): Array<string> {
    if (element?.binding?.strength && element.type[0].code === 'code' && element.binding.strength === 'required') {
      const url = element.binding.valueSet;
      const valueSet = this.valueSetMap.get(url);
      if (valueSet) {
        const system = valueSet.compose.include[0].system;
        const codeSystem = this.codeSystemMap.get(system);
        if (codeSystem) {
          return codeSystem.concept.map((concept: any) => concept.code);
        }
      }
    }
    return [];
  }
}
