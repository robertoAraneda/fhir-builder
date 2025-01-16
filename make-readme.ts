import { readdirSync, writeFileSync } from 'fs';
import { basename, join } from 'path';

/**
 * Generates a markdown table dynamically from an array of resources.
 * @param {string[]} resources - An array of resource names.
 * @returns {string} - The generated markdown table as a string.
 */
function generateMarkdownTable(title: string, resources: string[]): string {
  // Header row of the table
  let table = '#### ' + title + '\n';

  // Create a single row with comma-separated resources
  const resourceLinks = resources
    .map((resource) => {
      const url = `https://www.hl7.org/fhir/r4/${resource.toLowerCase()}.html`;
      return `[${resource}](${url})`;
    })
    .join(', ');

  table += `${resourceLinks}\n\n`;

  return table;
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

  const resources = files.map((file) => basename(file, '.ts'));
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

  const readmeContent = `# FHIR builder, models and validators

<h1 align="center" style="border-bottom: none;">FHIR builder, models and validators</h1>
<h3 align="center">R5 is comming :P</h3>
<p align="center">
  <img alt="GitHub Release" src="https://img.shields.io/github/v/release/robertoAraneda/fhir-builder">
  <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/robertoAraneda/fhir-builder/publish.yml">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dw/fhirbuilder">
</p>

## Available Resources

Resources available in this package

${foundationalTable}

${baseTable}

${clinicalTable}

${financialTable}

${specializedTable}

## Install

\`\`\`shell
npm i fhirbuilder
# for fhirtypes
npm i fhirtypes
\`\`\`

## Use

### Using models

In this example we will use and Address model datatype

\`\`\`ts
const address = new Address({
  use: 'home',
  type: 'postal',
  text: 'test',
  line: ['line1', 'line2'],
});
console.log(address);
\`\`\`

Output

\`\`\`json
{
  "use": "home",
  "type": "postal",
  "text": "test",
  "line": ["line1", "line2"]
}
\`\`\`

### Using builders

For complex object you can use a builders

\`\`\`ts
const patient = new PatientBuilder()
  .setId('123')
  .setActive(true)
  .addName(
    new HumanName({
      family: 'Doe',
      given: ['John'],
    }),
  )
  .setGender(AdministrativeGenderEnum.MALE)
  .addAddress(
    new Address({
      use: 'home',
      line: ['123 Main St'],
      city: 'Somewhere',
      state: 'CA',
      postalCode: '12345',
      country: 'USA',
    }),
  )
  .build();
\`\`\`

Output

\`\`\`json
{
  "id": "123",
  "resourceType": "Patient",
  "active": true,
  "name": [
    {
      "family": "Doe",
      "given": ["John"]
    }
  ],
  "gender": "male",
  "address": [
    {
      "use": "home",
      "line": ["123 Main St"],
      "city": "Somewhere",
      "state": "CA",
      "postalCode": "12345",
      "country": "USA"
    }
  ]
}
\`\`\`

### Using Validators

\`\`\`ts
const identifier = new Identifier({
  assigner: {
    reference: 'Acme Healthcare', // ❌ invalid reference
  },
});

const patient = new Patient({
  id: '123',
  active: true,
  identifier: [identifier],
});

const result = patient.validate();

console.log(result);
\`\`\`

Output error

\`\`\`json
{
  "isValid": false,
  "operationOutcome": {
    "issue": [
      {
        "code": "invalid",
        "details": {
          "text": "Path: Patient.identifier[0].assigner.reference. Value: Acme Healthcare"
        },
        "diagnostics": "Invalid reference format. Reference must be in the format 'ResourceType/ResourceId'.",
        "severity": "error"
      }
    ]
  }
}
\`\`\`

# Examples

This document provides examples of how to use the \`Builders\` class to create \`Practitioner\` instances with different levels of detail, based on the FHIR specification.

## Practitioner

A simple practitioner with basic information, such as name, contact details, and one qualification.

\`\`\`typescript
const practitionerExample1 = new PractitionerBuilder()
  .addIdentifier({ system: 'https://example.org', value: '12345' })
  .setActive(true)
  .addName({ use: 'official', family: 'Doe', given: ['John'] })
  .addTelecom({ system: 'phone', value: '+123456789', use: 'work' })
  .addAddress({ use: 'home', line: ['123 Main St'], city: 'Metropolis', postalCode: '12345' })
  .setGender(AdministrativeGenderType.MALE)
  .setBirthDate('1980-01-01')
  .addPhoto({ contentType: 'image/jpeg', url: 'https://example.org/photos/practitioner123.jpg' })
  .addQualification({
    identifier: [{ system: 'https://example.org/licenses', value: 'MD12345' }],
    code: { text: 'Medical Doctor' },
  })
  .addCommunication({ text: 'English' })
  .build();

console.log(practitionerExample1);
\`\`\`

A practitioner with multiple identifiers, names, contact points, and addresses. This practitioner is also bilingual and has multiple qualifications.

\`\`\`typescript
// Creating HumanName instances
const officialName = new HumanName({
  use: 'official',
  family: 'Doe',
  given: ['John'],
});

// Creating ContactPoint instances
const workPhone = new ContactPoint({
  system: 'phone',
  value: '+123456789',
  use: 'work',
});

const practitionerExample2 = new PractitionerBuilder()
  .addIdentifier({ system: 'https://examplehospital.org', value: '67890' })
  .addIdentifier({ system: 'https://nationalprovider.org', value: '123-456-7890' })
  .setActive(true)
  .addName(officialName) // Using the HumanName instance
  .addName({ use: 'nickname', text: 'Dr. Jane' })
  .addTelecom(workPhone) // Using the ContactPoint instance
  .addTelecom({ system: 'phone', value: '+0987654321', use: 'mobile' })
  .addAddress({ use: 'home', line: ['456 Oak Lane'], city: 'Gotham', postalCode: '54321' })
  .addAddress({ use: 'work', line: ['789 Elm Street'], city: 'Metropolis', postalCode: '67890' })
  .setGender(AdministrativeGenderEnum.FEMALE)
  .setBirthDate('1975-05-15')
  .addPhoto({ contentType: 'image/png', url: 'https://example.org/photos/practitioner456.png' })
  .addQualification({
    identifier: [{ system: 'https://example.org/licenses', value: 'PHD56789' }],
    code: { text: 'Psychologist' },
    period: { start: '2005-06-01' },
  })
  .addCommunication({ text: 'English' })
  .addCommunication({ text: 'Spanish' })
  .build();

console.log(practitionerExample2);
\`\`\`

`;

  writeFileSync('README.md', readmeContent);

  console.log('README.md has been created.');
}

createReadmeFile();
