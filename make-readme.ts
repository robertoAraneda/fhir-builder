import { readdirSync, writeFileSync } from 'fs';
import { basename, join } from 'path';

/**
 * Generates a modern markdown section with bullet separators from an array of resources.
 * @param {string} title - The section title.
 * @param {string[]} resources - An array of resource names.
 * @returns {string} - The generated markdown section as a string.
 */
function generateMarkdownTable(title: string, resources: string[]): string {
  // Header row of the section
  let section = `### ${title}\n`;

  // Create a single row with bullet-separated resources
  const resourceLinks = resources
    .map((resource) => {
      const url = `https://www.hl7.org/fhir/r4/${resource.toLowerCase()}.html`;
      return `[${resource}](${url})`;
    })
    .join(' • ');

  section += `${resourceLinks}\n\n`;

  return section;
}

function createReadmeFile(): void {
  const foundationResources = [
    'CapabilityStatement',
    'StructureDefinition',
    'ImplementationGuide',
    'SearchParameter',
    'MessageDefinition',
    'OperationDefinition',
    'CompartmentDefinition',
    'StructureMap',
    'GraphDefinition',
    'ExampleScenario',
    'CodeSystem',
    'ValueSet',
    'ConceptMap',
    'NamingSystem',
    'TerminologyCapabilities',
    'Provenance',
    'AuditEvent',
    'Consent',
    'Composition',
    'DocumentManifest',
    'DocumentReference',
    'CatalogEntry',
    'Basic',
    'Binary',
    'Bundle',
    'Linkage',
    'MessageHeader',
    'OperationOutcome',
    'Parameters',
    'Subscription',
  ];

  const baseResources = [
    'Patient',
    'Practitioner',
    'PractitionerRole',
    'RelatedPerson',
    'Person',
    'Group',
    'Organization',
    'OrganizationAffiliation',
    'HealthcareService',
    'Endpoint',
    'Location',
    'Substance',
    'BiologicallyDerivedProduct',
    'Device',
    'DeviceMetric',
    'Task',
    'Appointment',
    'AppointmentResponse',
    'Schedule',
    'Slot',
    'VerificationResult',
    'Encounter',
    'EpisodeOfCare',
    'Flag',
    'List',
    'Library',
  ];

  const clinicalResources = [
    'AllergyIntolerance',
    'AdverseEvent',
    'Condition',
    'Procedure',
    'FamilyMemberHistory',
    'ClinicalImpression',
    'DetectedIssue',
    'Observation',
    'Media',
    'DiagnosticReport',
    'Specimen',
    'BodyStructure',
    'ImagingStudy',
    'QuestionnaireResponse',
    'MolecularSequence',
    'MedicationRequest',
    'MedicationAdministration',
    'MedicationDispense',
    'MedicationStatement',
    'Medication',
    'MedicationKnowledge',
    'Immunization',
    'ImmunizationEvaluation',
    'ImmunizationRecommendation',
    'CarePlan',
    'CareTeam',
    'Goal',
    'ServiceRequest',
    'NutritionOrder',
    'VisionPrescription',
    'RiskAssessment',
    'RequestGroup',
    'Communication',
    'CommunicationRequest',
    'DeviceRequest',
    'DeviceUseStatement',
    'GuidanceResponse',
    'SupplyRequest',
    'SupplyDelivery',
  ];

  const financialResources = [
    'Coverage',
    'CoverageEligibilityRequest',
    'CoverageEligibilityResponse',
    'EnrollmentRequest',
    'EnrollmentResponse',
    'Claim',
    'ClaimResponse',
    'Invoice',
    'PaymentNotice',
    'PaymentReconciliation',
    'Account',
    'ChargeItem',
    'ChargeItemDefinition',
    'Contract',
    'ExplanationOfBenefit',
    'InsurancePlan',
  ];

  const specializedResources = [
    'ResearchStudy',
    'ResearchSubject',
    'ActivityDefinition',
    'DeviceDefinition',
    'EventDefinition',
    'ObservationDefinition',
    'PlanDefinition',
    'Questionnaire',
    'SpecimenDefinition',
    'ResearchDefinition',
    'ResearchElementDefinition',
    'Evidence',
    'EvidenceVariable',
    'EffectEvidenceSynthesis',
    'RiskEvidenceSynthesis',
    'Measure',
    'MeasureReport',
    'TestScript',
    'TestReport',
    'MedicinalProduct',
    'MedicinalProductAuthorization',
    'MedicinalProductContraindication',
    'MedicinalProductIndication',
    'MedicinalProductIngredient',
    'MedicinalProductInteraction',
    'MedicinalProductManufactured',
    'MedicinalProductPackaged',
    'MedicinalProductPharmaceutical',
    'MedicinalProductUndesirableEffect',
    'SubstanceNucleicAcid',
    'SubstancePolymer',
    'SubstanceProtein',
    'SubstanceReferenceInformation',
    'SubstanceSpecification',
    'SubstanceSourceMaterial',
  ];

  const files = readdirSync(join(__dirname, `src/r4/models/resources`));

  const resources = files.map((file) => basename(file, '.ts')).filter((resource) => resource !== 'index');
  console.log(resources);

  const foundationResourcesFound = foundationResources.filter((resource) => resources.includes(resource));
  const baseResourcesFound = baseResources.filter((resource) => resources.includes(resource));
  const clinicalResourcesFound = clinicalResources.filter((resource) => resources.includes(resource));
  const financialResourcesFound = financialResources.filter((resource) => resources.includes(resource));
  const specializedResourcesFound = specializedResources.filter((resource) => resources.includes(resource));

  const foundationalTable = generateMarkdownTable('Foundation', foundationResourcesFound);
  const baseTable = generateMarkdownTable('Base', baseResourcesFound);
  const clinicalTable = generateMarkdownTable('Clinical', clinicalResourcesFound);
  const financialTable = generateMarkdownTable('Financial', financialResourcesFound);
  const specializedTable = generateMarkdownTable('Specialized', specializedResourcesFound);

  const readmeContent = `# FHIR Builder

<div align="center">

# 🏥 FHIR Builder

### TypeScript-first FHIR R4 resource builder with fluent API and built-in validation

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![FHIR R4](https://img.shields.io/badge/FHIR-R4-blue?style=for-the-badge)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-green?style=for-the-badge)

</div>

<p align="center">
  <img alt="GitHub Release" src="https://img.shields.io/github/v/release/robertoAraneda/fhir-builder">
  <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/robertoAraneda/fhir-builder/publish.yml">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dw/fhirbuilder">
  <img alt="License" src="https://img.shields.io/npm/l/fhirbuilder">
  <img alt="Bundle Size" src="https://img.shields.io/bundlephobia/minzip/fhirbuilder">
</p>

<div align="center">

**🚀 R5 support is coming!**

*Build robust healthcare applications with confidence*

</div>

---

## ✨ Why FHIR Builder?

FHIR Builder is a comprehensive TypeScript library that simplifies working with FHIR R4 resources. Whether you're building EHRs, healthcare APIs, or clinical data processing systems, FHIR Builder provides the tools you need to work with FHIR resources efficiently and safely.

### 🎯 **Key Features**

| Feature | Description |
|---------|-------------|
| 🏗️ **Fluent Builder Pattern** | Intuitive method chaining for complex resource construction |
| 🔧 **Full TypeScript Support** | Complete type safety with IntelliSense and compile-time checks |
| ✅ **Built-in Validation** | FHIR R4 conformance validation with detailed error reporting |
| 🔄 **JSON Serialization** | Seamless conversion between objects and JSON with multiple formats |
| 🎨 **Extension Support** | Handle FHIR primitive extensions with ease |
| 📦 **Zero Dependencies** | Lightweight and focused purely on FHIR operations |
| 🧪 **Production Ready** | Used in production healthcare systems worldwide |

---

## 🚀 Quick Start

### Installation

\`\`\`bash
# Core library
npm install fhirbuilder

# Optional: Enhanced TypeScript definitions
npm install fhirtypes
\`\`\`

### Your First FHIR Resource

\`\`\`typescript
import { PatientBuilder, HumanName } from 'fhirbuilder';

// Build a patient using the fluent API
const patient = new PatientBuilder()
  .setId('patient-001')
  .setActive(true)
  .addName(new HumanName({
    use: 'official',
    family: 'Smith',
    given: ['John', 'David']
  }))
  .setGender('male')
  .setBirthDate('1985-03-15')
  .build();

// Validate the resource
const validation = patient.validate();
if (validation.isValid) {
  console.log('✅ Patient is valid!');
  console.log(patient.toPrettyString());
} else {
  console.error('❌ Validation failed:', validation.operationOutcome);
}
\`\`\`

---

## 📋 Available Resources

Resources currently available in this package:

${foundationalTable}${baseTable}${clinicalTable}${financialTable}${specializedTable}---

## 🛠️ Core Concepts

### Resource Construction Patterns

FHIR Builder supports three main patterns for creating resources:

#### 1. Direct Instantiation
\`\`\`typescript
import { Patient } from 'fhirbuilder';

const patient = new Patient({
  resourceType: 'Patient',
  id: 'example',
  active: true,
  name: [{ 
    family: 'Doe', 
    given: ['Jane'] 
  }]
});
\`\`\`

#### 2. Fluent Builder API
\`\`\`typescript
import { PatientBuilder } from 'fhirbuilder';

const patient = new PatientBuilder()
  .setId('example')
  .setActive(true)
  .addName({ family: 'Doe', given: ['Jane'] })
  .build();
\`\`\`

#### 3. Builder from JSON
\`\`\`typescript
import { PatientBuilder } from 'fhirbuilder';

const existingData = { /* JSON data */ };
const patient = new PatientBuilder()
  .fromJSON(existingData)
  .addTelecom({ system: 'email', value: 'jane@example.com' })
  .build();
\`\`\`

---

## 🏗️ Advanced Builder Patterns

### Complex Resource Construction

\`\`\`typescript
import { LocationBuilder } from 'fhirbuilder';

const hospital = new LocationBuilder()
  .setId('main-hospital')
  .setStatus('active')
  .setName('General Hospital Downtown')
  .setDescription('Main campus with full emergency services')
  .addAlias('Downtown Hospital')
  .addAlias('Main Campus')
  .setMode('instance')
  .addType({
    coding: [{
      system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
      code: 'HOSP',
      display: 'Hospital'
    }]
  })
  .setAddress({
    use: 'work',
    line: ['123 Healthcare Blvd', 'Medical District'],
    city: 'Healthcare City',
    state: 'HC',
    postalCode: '12345',
    country: 'US'
  })
  .addTelecom({
    system: 'phone',
    value: '+1-555-HOSPITAL',
    use: 'work'
  })
  .addTelecom({
    system: 'email',
    value: 'info@generalhospital.org',
    use: 'work'
  })
  .setPosition({
    longitude: -74.0059,
    latitude: 40.7128
  })
  .addHoursOfOperation({
    daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri'],
    openingTime: '07:00',
    closingTime: '19:00'
  })
  .addHoursOfOperation({
    daysOfWeek: ['sat', 'sun'],
    openingTime: '08:00',
    closingTime: '17:00'
  })
  .setAvailabilityExceptions('Emergency services available 24/7')
  .build();
\`\`\`

### Working with Primitive Extensions

\`\`\`typescript
import { PatientBuilder } from 'fhirbuilder';

const patient = new PatientBuilder()
  .setGender('male')
  .addPrimitiveExtension('_gender', {
    extension: [{
      url: 'http://example.org/fhir/StructureDefinition/patient-genderIdentity',
      valueCodeableConcept: {
        coding: [{
          system: 'http://snomed.info/sct',
          code: '446151000124109',
          display: 'Identifies as male gender'
        }]
      }
    }]
  })
  .build();
\`\`\`

---

## ✅ Validation & Error Handling

### Comprehensive Validation

\`\`\`typescript
import { Patient, Identifier } from 'fhirbuilder';

// Create a resource with validation issues
const patient = new Patient({
  id: 'test-patient',
  active: true,
  identifier: [
    new Identifier({
      system: 'http://example.org/patients',
      value: 'PAT123',
      assigner: {
        reference: 'Invalid Reference Format' // ❌ Missing ResourceType/ID format
      }
    })
  ]
});

// Validate and handle errors
const validation = patient.validate();

if (!validation.isValid) {
  console.log('❌ Validation failed with the following issues:');
  
  validation.operationOutcome.issue?.forEach((issue, index) => {
    console.log(\`\${index + 1}. [\${issue.severity?.toUpperCase()}] \${issue.diagnostics}\`);
    console.log(\`   Path: \${issue.details?.text}\`);
  });
} else {
  console.log('✅ Resource is valid and ready for use!');
}
\`\`\`

**Example Validation Output:**
\`\`\`
❌ Validation failed with the following issues:
1. [ERROR] Invalid reference format. Reference must be in the format 'ResourceType/ResourceId'.
   Path: Patient.identifier[0].assigner.reference. Value: Invalid Reference Format
\`\`\`

---

## 🔄 Serialization & Utilities

### Multiple Output Formats

\`\`\`typescript
import { Patient } from 'fhirbuilder';

const patient = new Patient({
  resourceType: 'Patient',
  id: 'example',
  active: true,
  name: [{ family: 'Doe', given: ['John'] }]
});

// Different output formats
const jsonObject = patient.toJson();           // Plain JavaScript object
const compactJson = patient.toString();        // Minified JSON string
const prettyJson = patient.toPrettyString();   // Formatted JSON with indentation
const serialized = patient.serialize();        // Serialized string for transport

console.log('📦 JSON Object:', jsonObject);
console.log('🗜️ Compact:', compactJson);
console.log('🎨 Pretty:', prettyJson);
console.log('📡 Serialized:', serialized);
\`\`\`

---

## 🔗 Working with References

### Resource Relationships

\`\`\`typescript
import { PatientBuilder, PractitionerBuilder, EncounterBuilder } from 'fhirbuilder';

// Create related resources
const practitioner = new PractitionerBuilder()
  .setId('dr-smith')
  .addName({ family: 'Smith', given: ['Sarah'], prefix: ['Dr.'] })
  .build();

const patient = new PatientBuilder()
  .setId('patient-001')
  .addName({ family: 'Johnson', given: ['Mike'] })
  .build();

// Create an encounter linking them
const encounter = new EncounterBuilder()
  .setId('encounter-001')
  .setStatus('finished')
  .setClass({
    system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
    code: 'AMB',
    display: 'ambulatory'
  })
  .setSubject({
    reference: \`Patient/\${patient.id}\`,
    display: 'Mike Johnson'
  })
  .addParticipant({
    individual: {
      reference: \`Practitioner/\${practitioner.id}\`,
      display: 'Dr. Sarah Smith'
    }
  })
  .build();
\`\`\`

---

## 🎯 Builder API Reference

### Common Patterns

All builders follow consistent naming conventions:

| Method Pattern | Purpose | Example |
|----------------|---------|---------|
| \`set*\` | Set single values (overwrites existing) | \`.setId('123')\` |
| \`add*\` | Add to arrays (appends) | \`.addName(humanName)\` |
| \`addPrimitiveExtension\` | Add FHIR extensions | \`.addPrimitiveExtension('_status', ext)\` |
| \`fromJSON\` | Initialize from JSON | \`.fromJSON(jsonData)\` |
| \`build\` | Create the final resource | \`.build()\` |

### LocationBuilder Methods

\`\`\`typescript
interface ILocationBuilder {
  // Core properties
  addIdentifier(value: IIdentifier): this;
  setStatus(value: 'active' | 'suspended' | 'inactive'): this;
  setOperationalStatus(value: ICoding): this;
  setName(value: string): this;
  addAlias(value: string): this;
  setDescription(value: string): this;
  setMode(value: 'instance' | 'kind'): this;
  
  // Contact and address
  addType(value: ICodeableConcept): this;
  addTelecom(value: IContactPoint): this;
  setAddress(value: IAddress): this;
  setPhysicalType(value: ICodeableConcept): this;
  
  // Geographic and organizational
  setPosition(value: ILocationPosition): this;
  setManagingOrganization(value: IReference): this;
  setPartOf(value: IReference): this;
  
  // Operational details
  addHoursOfOperation(value: ILocationHoursOfOperation): this;
  setAvailabilityExceptions(value: string): this;
  addEndpoint(value: IReference): this;
}
\`\`\`

---

## 🧪 Testing & Development

### Unit Testing with FHIR Builder

\`\`\`typescript
import { PatientBuilder } from 'fhirbuilder';

describe('Patient Creation', () => {
  test('should create valid patient with required fields', () => {
    const patient = new PatientBuilder()
      .setId('test-patient')
      .setActive(true)
      .addName({ family: 'Test', given: ['Patient'] })
      .build();
    
    const validation = patient.validate();
    expect(validation.isValid).toBe(true);
    expect(patient.resourceType).toBe('Patient');
    expect(patient.id).toBe('test-patient');
  });
  
  test('should detect validation errors', () => {
    const patient = new PatientBuilder()
      .setId('test-patient')
      .addIdentifier({
        assigner: {
          reference: 'Invalid Format' // This should fail validation
        }
      })
      .build();
    
    const validation = patient.validate();
    expect(validation.isValid).toBe(false);
    expect(validation.operationOutcome.issue).toBeDefined();
  });
});
\`\`\`

---

## 🌐 Real-World Examples

### Healthcare Workflow: Patient Registration

\`\`\`typescript
import { 
  PatientBuilder, 
  OrganizationBuilder, 
  EncounterBuilder 
} from 'fhirbuilder';

// Create healthcare organization
const hospital = new OrganizationBuilder()
  .setId('mercy-general')
  .setActive(true)
  .setName('Mercy General Hospital')
  .addType({
    coding: [{
      system: 'http://terminology.hl7.org/CodeSystem/organization-type',
      code: 'prov',
      display: 'Healthcare Provider'
    }]
  })
  .build();

// Register new patient
const newPatient = new PatientBuilder()
  .setActive(true)
  .addIdentifier({
    use: 'usual',
    system: 'http://mercy-general.org/patients',
    value: 'MRN-789456',
    assigner: {
      reference: \`Organization/\${hospital.id}\`,
      display: hospital.name
    }
  })
  .addName({
    use: 'official',
    family: 'Williams',
    given: ['Emma', 'Grace']
  })
  .addName({
    use: 'nickname',
    given: ['Emmy']
  })
  .setGender('female')
  .setBirthDate('1992-08-15')
  .addTelecom({
    system: 'phone',
    value: '+1-555-0123',
    use: 'mobile'
  })
  .addTelecom({
    system: 'email',
    value: 'emma.williams@email.com',
    use: 'home'
  })
  .addAddress({
    use: 'home',
    line: ['456 Oak Avenue', 'Apt 2B'],
    city: 'Springfield',
    state: 'IL',
    postalCode: '62701',
    country: 'US'
  })
  .build();

// Create admission encounter
const admission = new EncounterBuilder()
  .setStatus('in-progress')
  .setClass({
    system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
    code: 'IMP',
    display: 'inpatient encounter'
  })
  .setSubject({
    reference: \`Patient/\${newPatient.id}\`,
    display: 'Emma Grace Williams'
  })
  .setServiceProvider({
    reference: \`Organization/\${hospital.id}\`,
    display: hospital.name
  })
  .build();

// Validate all resources
const resources = [hospital, newPatient, admission];
resources.forEach(resource => {
  const validation = resource.validate();
  if (validation.isValid) {
    console.log(\`✅ \${resource.resourceType} is valid\`);
  } else {
    console.error(\`❌ \${resource.resourceType} validation failed\`);
  }
});
\`\`\`

---

## 📚 Additional Resources

### Learning Materials

- **[FHIR R4 Specification](https://www.hl7.org/fhir/r4/)** - Official FHIR documentation
- **[FHIR Builder Examples](https://github.com/robertoAraneda/fhir-builder/tree/main/examples)** - Comprehensive code examples
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - Learn TypeScript basics

### Related Projects

- **[fhirtypes](https://www.npmjs.com/package/fhirtypes)** - TypeScript definitions for FHIR
- **[HAPI FHIR](https://hapifhir.io/)** - Java FHIR implementation
- **[FHIR.js](https://github.com/FHIR/fhir.js)** - JavaScript FHIR client

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started

\`\`\`bash
# Clone the repository
git clone https://github.com/robertoAraneda/fhir-builder.git

# Install dependencies
cd fhir-builder
npm install

# Run tests
npm test

# Build the project
npm run build
\`\`\`

### Contribution Guidelines

1. **Fork** the repository
2. **Create** a feature branch (\`git checkout -b feature/amazing-feature\`)
3. **Commit** your changes (\`git commit -m 'Add amazing feature'\`)
4. **Push** to the branch (\`git push origin feature/amazing-feature\`)
5. **Open** a Pull Request

### Development Standards

- ✅ **TypeScript** for all new code
- ✅ **Tests** for new features and bug fixes
- ✅ **JSDoc** comments for public APIs
- ✅ **FHIR R4** compliance for all resources

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Community

<div align="center">

### Get Help

[![GitHub Issues](https://img.shields.io/badge/Issues-GitHub-red?style=for-the-badge&logo=github)](https://github.com/robertoAraneda/fhir-builder/issues)
[![Discussions](https://img.shields.io/badge/Discussions-GitHub-blue?style=for-the-badge&logo=github)](https://github.com/robertoAraneda/fhir-builder/discussions)
[![Documentation](https://img.shields.io/badge/Docs-Wiki-green?style=for-the-badge&logo=gitbook)](https://github.com/robertoAraneda/fhir-builder/wiki)

### Connect

[![Email](https://img.shields.io/badge/Email-Contact-orange?style=for-the-badge&logo=gmail)](mailto:roberto.araneda.espinoza@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/roberto-araneda)

</div>

---

<div align="center">

**Built with ❤️ for the healthcare community**

*Empowering developers to build better healthcare software*

**⭐ Star this repo if it helped you!**

</div>`;

  writeFileSync('README.md', readmeContent);

  console.log('🎉 Modern README.md has been generated successfully!');
  console.log('📊 Features added:');
  console.log('  ✅ Professional styling with badges and emojis');
  console.log('  ✅ Comprehensive examples and use cases');
  console.log('  ✅ Advanced builder patterns documentation');
  console.log('  ✅ Real-world healthcare workflow examples');
  console.log('  ✅ Testing guidelines and best practices');
  console.log('  ✅ Contributing guidelines');
  console.log('  ✅ Modern layout with proper sections');
}

createReadmeFile();
