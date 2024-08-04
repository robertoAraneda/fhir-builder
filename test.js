"use strict";
exports.__esModule = true;
var lib_1 = require("./lib");
var enums_1 = require("fhirtypes/dist/r4/enums");
var _a = (0, lib_1.fhirR4)(), Patient = _a.Patient, Validator = _a.Validator, HumanName = _a.HumanName, Address = _a.Address;
var hn = new HumanName({
    family: 'Doe',
    given: ['John'],
    prefix: ['Mr'],
    suffix: ['Jr'],
    text: 'John Doe Jr'
});
var address = new Address({
    use: 'home',
    type: 'postal',
    text: '123 Main St Edited',
    line: ['123 Main St'],
    city: 'Springfield'
});
var patient = Patient.builder()
    .setGender(enums_1.AdministrativeGenderEnum.FEMALE)
    .setBirthDate('2020-01-01')
    .setActive(true)
    .addAddress(address)
    .addAddress({
    use: 'home',
    type: 'postal',
    text: '123 Main St',
    line: ['123 Main St'],
    city: 'Springfield'
})
    .addName(hn)
    .build();
console.log(patient.toJson());
