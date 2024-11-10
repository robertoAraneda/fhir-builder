<h1 align="center" style="border-bottom: none;">FHIR builder, models and validators</h1>
<h3 align="center">R5 is comming :P</h3>
<p align="center">
<!--
  <a href="https://github.com/semantic-release/semantic-release/actions/workflows/test.yml">
    <img alt="Build states" src="https://github.com/semantic-release/semantic-release/actions/workflows/test.yml/badge.svg">
  </a>
  -->

  <img alt="GitHub Release" src="https://img.shields.io/github/v/release/robertoAraneda/fhir-builder">
<img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/robertoAraneda/fhir-builder/publish.yml">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dw/fhirbuilder">
</p>

## Available Resources

Resources available in this package

| Resource                                                                  | Resource                                                      | Resource                                                          |
| ------------------------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------- |
| [EpisodeOfCare](https://www.hl7.org/fhir/r4/episodeofcare.html)           | [Organization](https://www.hl7.org/fhir/r4/organization.html) | [Patient](https://www.hl7.org/fhir/r4/patient.html)               |
| [Observation](https://www.hl7.org/fhir/r4/observation.html)               | [Coverage](https://www.hl7.org/fhir/r4/coverage.html)         | [ServiceRequest](https://www.hl7.org/fhir/r4/servicerequest.html) |
| [AllergyIntolerance](https://www.hl7.org/fhir/r4/allerfyintolerance.html) | [Procedure](https://www.hl7.org/fhir/r4/procedure.html)       | [Bundle](https://www.hl7.org/fhir/r4/bundle.html)                 |

## Install

```shell
npm i fhirbuilder
# for fhirtypes
npm i fhirtypes
```

## Use

### Using models

In this example we will use and Address model datatype

```ts
const address = new Address({
  use: 'home',
  type: 'postal',
  text: 'test',
  line: ['line1', 'line2'],
});
console.log(address);
```

Output

```json
{
  "use": "home",
  "type": "postal",
  "text": "test",
  "line": ["line1", "line2"]
}
```

### Using builders

For complex object you can use a builders

```ts
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
```

Output

```json
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
```

### Using Validators

```ts
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
```

Output error

```json
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
```

# Examples

This document provides examples of how to use the `Builders` class to create `Practitioner` instances with different levels of detail, based on the FHIR specification.

## Practitioner

A simple practitioner with basic information, such as name, contact details, and one qualification.

```typescript
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
```

A practitioner with multiple identifiers, names, contact points, and addresses. This practitioner is also bilingual and has multiple qualifications.

```typescript
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
```
