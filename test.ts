import { fhirR4 } from './lib';
import { AdministrativeGenderEnum } from 'fhirtypes/dist/r4/enums';

const { Patient, Validator, HumanName, Address } = fhirR4();

const hn = new HumanName({
  family: 'Doe',
  given: ['John'],
  prefix: ['Mr'],
  suffix: ['Jr'],
  text: 'John Doe Jr',
});

const address = new Address({
  use: 'home',
  type: 'postal',
  text: '123 Main St Edited',
  line: ['123 Main St'],
  city: 'Springfield',
});

const patient = Patient.builder()
  .setGender(AdministrativeGenderEnum.FEMALE)
  .setBirthDate('2020-01-01')
  .setActive(true)
  .addAddress(address)
  .addAddress({
    use: 'home',
    type: 'postal',
    text: '123 Main St',
    line: ['123 Main St'],
    city: 'Springfield',
  })
  .addName(hn)
  .build();

console.log(patient.toJson());
