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

- [Patient](https://www.hl7.org/fhir/r4/patient.html)
- [ServiceRequest](https://www.hl7.org/fhir/r4/servicerequest.html)
- [Bundle](https://www.hl7.org/fhir/r4/bundle.html)
- [Organization](https://www.hl7.org/fhir/r4/organization.html)
- [Coverage](https://www.hl7.org/fhir/r4/coverage.html)
- [Procedure](https://www.hl7.org/fhir/r4/procedure.html)
- [EpisodeOfCare](https://www.hl7.org/fhir/r4/episodeofcare.html)
- [Observation](https://www.hl7.org/fhir/r4/observation.html)
- [AllergyIntolerance](https://www.hl7.org/fhir/r4/allerfyintolerance.html)

## Install

```shell
npm i fhirbuilder
# for fhirtypes
npm i fhirtypes
```

## Use

### Create context

```ts
import { contextR4 } from 'fhirbuilder';

const r4Context = contextR4();
```

From `r4Context` Object you can access to all FHIR Datatypes, Resources models and Validators

### Using models

In this example we will use and Address model datatype

```ts
import { contextR4 } from 'fhirbuilder';
const { Address } = contextR4();

//you can create a new Instance

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
import { contextR4 } from 'fhirbuilder';
import { AdministrativeGenderEnum } from 'fhirtypes/dist/r4/enums';
const { Patient, HumanName, Address, PatientBuilder } = contextR4();

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
const { Patient } = contextR4();

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
