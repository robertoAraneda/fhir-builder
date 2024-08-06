FHIR Builder Library

## Install
```shell
npm i fhirbuilder
```

## Use
### Create context
```ts
import { contextR4 } from 'fhirbuilder';

const r4Context = contextR4()
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
  })
  console.log(address)
```
Output
```json
    {
      "use": "home",
      "type": "postal",
      "text": "test",
      "line": [
        "line1",
        "line2"
      ]
    }
```

### Using builders

For complex object you can use a builders

```ts
    import { contextR4 } from 'fhirbuilder';
    import { AdministrativeGenderEnum } from "fhirtypes/dist/r4/enums";
    const { Patient, HumanName, Address } = contextR4();

    const patient = Patient.builder()
      .setId("123")
      .setActive(true)
      .addName(new HumanName({
        family: "Doe",
        given: ["John"]
      }))
      .setGender(AdministrativeGenderEnum.MALE)
      .addAddress(new Address({
        use: "home",
        line: ["123 Main St"],
        city: "Somewhere",
        state: "CA",
        postalCode: "12345",
        country: "USA"
      }))
      .build()
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
          "given": [
            "John"
          ]
        }
      ],
      "gender": "male",
      "address": [
        {
          "use": "home",
          "line": [
            "123 Main St"
          ],
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
        reference: "Acme Healthcare", // ❌ invalid reference
      },
    }) 

    const patient = new Patient({
      id: "123",
      active: true,
      identifier: [identifier]
    })

    const { error } = patient.validate()

    console.log(errors)
```
Output error
```json
    { 
        "error": "ReferenceException",
        "message": "ResourceType must be one of the following: 'Organization'",
        "path": "identifier[0].assigner.reference",
        "value": "Acme Healthcare"
    }
```



