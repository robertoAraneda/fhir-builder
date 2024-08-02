FHIR Builder Library

## Install
```shell
npm i fhirbuilder
```

## Use
### Create context
```ts
import { CreateContext } from 'fhirbuilder';

const r4Context = new CreateContext().forR4();
```
From `r4Context` Object you can access to all FHIR Datatypes, Resources models and Validators

### Using models

In this example we will use and Address model datatype
```ts
  const { Address } = new CreateContext().forR4();

  //you can create a new Instance

  const address = new Address({
    use: 'home',
    type: 'postal',
    text: 'test',
    line: ['line1', 'line2'],
  })
  console.log(address)
// print
/* Address {
      use: 'home',
        type: 'postal',
        text: 'test',
        line: ['line1', 'line2'],
    }
 */
```

### Using builders

For complex object you can use a builders

```ts
    const { Address } = new CreateContext().forR4();

    const address = Address.builder()
      .setId('123')
      .addLine('123 Main St')
      .setType('both')
      .setUse('old')
      .setCity('Anytown')
      .addParamExtension('district', {
        extension: [
          {
            url: 'district',
            valueString: 'district',
          },
        ],
      })
      .build();
    
    console.log(address)

    //print
  /* {
      _district: {
        extension: [
          {
            url: 'district',
            valueString: 'district',
          },
        ],
      },
      city: 'Anytown',
      id: '123',
      line: ['123 Main St'],
      type: 'both',
      use: 'old',
    }
  */
```
### Using Validators

```ts
    const { Validator } = new CreateContext().forR4();

    // expose error string if validator throws an error, otherwise error will be null. 
    const { error } = Validator.Address(item);
```



