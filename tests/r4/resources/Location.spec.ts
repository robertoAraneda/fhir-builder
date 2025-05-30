import { Location } from '../../../src/r4';

describe('Location Examples FHIR R4', () => {
  it('should create a Wing within a hospital', () => {
    const location = new Location({
      resourceType: 'Location',
      id: '1',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Burgers UMC, South Wing, second floor</div>',
      },
      identifier: [
        {
          value: 'B1-S.F2',
        },
      ],
      status: 'active',
      name: 'South Wing, second floor',
      alias: ['BU MC, SW, F2', 'Burgers University Medical Center, South Wing, second floor'],
      description: 'Second floor of the Old South Wing, formerly in use by Psychiatry',
      mode: 'instance',
      telecom: [
        {
          system: 'phone',
          value: '2328',
          use: 'work',
        },
        {
          system: 'fax',
          value: '2329',
          use: 'work',
        },
        {
          system: 'email',
          value: 'second wing admissions',
        },
        {
          system: 'url',
          value: 'http://sampleorg.com/southwing',
          use: 'work',
        },
      ],
      address: {
        use: 'work',
        line: ['Galapagosweg 91, Building A'],
        city: 'Den Burg',
        postalCode: '9105 PZ',
        country: 'NLD',
      },
      physicalType: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
            code: 'wi',
            display: 'Wing',
          },
        ],
      },
      position: {
        longitude: -83.6945691,
        latitude: 42.25475478,
        altitude: 0,
      },
      managingOrganization: {
        reference: 'Organization/f001',
      },
      endpoint: [
        {
          reference: 'Endpoint/example',
        },
      ],
    });

    const { isValid, operationOutcome } = location.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should create a Operation room within hospital', () => {
    const location = new Location({
      resourceType: 'Location',
      id: '2',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Burgers UMC, South Wing, second floor, Neuro Radiology Operation Room 1</div>',
      },
      identifier: [
        {
          value: 'B1-S.F2.1.00',
        },
      ],
      status: 'suspended',
      operationalStatus: {
        system: 'http://terminology.hl7.org/CodeSystem/v2-0116',
        code: 'H',
        display: 'Housekeeping',
      },
      name: 'South Wing Neuro OR 1',
      alias: ['South Wing OR 5', 'Main Wing OR 2'],
      description: 'Old South Wing, Neuro Radiology Operation Room 1 on second floor',
      mode: 'instance',
      type: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'RNEU',
              display: 'Neuroradiology unit',
            },
          ],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '2329',
        },
      ],
      physicalType: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
            code: 'ro',
            display: 'Room',
          },
        ],
      },
      managingOrganization: {
        reference: 'Organization/f001',
      },
      partOf: {
        reference: 'Location/1',
      },
    });

    const { isValid, operationOutcome } = location.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should create a Ambulance provided by Burgers Healthcare', () => {
    const location = new Location({
      resourceType: 'Location',
      id: 'amb',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Mobile Clinic</div>',
      },
      status: 'active',
      name: 'BUMC Ambulance',
      description: 'Ambulance provided by Burgers University Medical Center',
      mode: 'kind',
      type: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'AMB',
              display: 'Ambulance',
            },
          ],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '2329',
          use: 'mobile',
        },
      ],
      physicalType: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
            code: 've',
            display: 'Vehicle',
          },
        ],
      },
      managingOrganization: {
        reference: 'Organization/f001',
      },
    });

    const { isValid, operationOutcome } = location.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it("should create a Patient's Home which can be used for remote encounters", () => {
    const location = new Location({
      resourceType: 'Location',
      id: 'ph',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Patient\'s Home</div>',
      },
      status: 'active',
      name: "Patient's Home",
      description: "Patient's Home",
      mode: 'kind',
      type: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'PTRES',
              display: "Patient's Residence",
            },
          ],
        },
      ],
      physicalType: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
            code: 'ho',
            display: 'House',
          },
        ],
      },
      managingOrganization: {
        reference: 'Organization/f001',
      },
    });

    const { isValid, operationOutcome } = location.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should create a UK Pharmacy Jurisdiction', () => {
    const location = new Location({
      resourceType: 'Location',
      id: 'ukp',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">UK Pharmacies</div>',
      },
      status: 'active',
      name: 'UK Pharmacies',
      description: 'All Pharmacies in the United Kingdom covered by the National Pharmacy Association',
      mode: 'kind',
      type: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'PHARM',
              display: 'Pharmacy',
            },
          ],
        },
      ],
      physicalType: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
            code: 'jdn',
            display: 'Jurisdiction',
          },
        ],
      },
    });

    const { isValid, operationOutcome } = location.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should create a General location examples', () => {
    const location = new Location({
      resourceType: 'Location',
      id: '3',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">USSS Enterprise-D Sickbay</div>',
      },
      status: 'active',
      name: 'USSS Enterprise-D Sickbay',
      mode: 'instance',
      partOf: {
        reference: 'Location/2',
        display: 'USS Enterprise',
      },
    });

    const { isValid, operationOutcome } = location.validate();
    expect(isValid).toBeTruthy();
    expect(operationOutcome.issue).toHaveLength(0);
  });
});
