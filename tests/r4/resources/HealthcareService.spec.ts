import { HealthcareService } from '../../../src/r4/models/resources/HealthcareService';
import {
  IIdentifier,
  IReference,
  ICodeableConcept,
  IAttachment,
  IContactPoint,
  IHealthcareServiceEligibility,
  IHealthcareServiceAvailableTime,
  IHealthcareServiceNotAvailable,
  IElement,
  IOperationOutcomeIssue,
  IHealthcareService,
} from 'fhirtypes/dist/r4';
import { HealthcareServiceBuilder } from '../../../src/r4/builders';
import { HealthcareServiceValidator } from '../../../src/core/r4/validators/resources';

describe('HealthcareService', () => {
  it('should create a HealthcareService with default values', () => {
    const healthcareService = new HealthcareService();
    expect(healthcareService.resourceType).toBe('HealthcareService');
    expect(healthcareService.identifier).toBeUndefined();
    expect(healthcareService.active).toBeUndefined();
    expect(healthcareService._active).toBeUndefined();
    expect(healthcareService.providedBy).toBeUndefined();
    expect(healthcareService.category).toBeUndefined();
    expect(healthcareService.type).toBeUndefined();
    expect(healthcareService.specialty).toBeUndefined();
    expect(healthcareService.location).toBeUndefined();
    expect(healthcareService.name).toBeUndefined();
    expect(healthcareService._name).toBeUndefined();
    expect(healthcareService.comment).toBeUndefined();
    expect(healthcareService._comment).toBeUndefined();
    expect(healthcareService.extraDetails).toBeUndefined();
    expect(healthcareService._extraDetails).toBeUndefined();
    expect(healthcareService.photo).toBeUndefined();
    expect(healthcareService.telecom).toBeUndefined();
    expect(healthcareService.coverageArea).toBeUndefined();
    expect(healthcareService.serviceProvisionCode).toBeUndefined();
    expect(healthcareService.eligibility).toBeUndefined();
    expect(healthcareService.program).toBeUndefined();
    expect(healthcareService.characteristic).toBeUndefined();
    expect(healthcareService.communication).toBeUndefined();
    expect(healthcareService.referralMethod).toBeUndefined();
    expect(healthcareService.appointmentRequired).toBeUndefined();
    expect(healthcareService._appointmentRequired).toBeUndefined();
    expect(healthcareService.availableTime).toBeUndefined();
    expect(healthcareService.notAvailable).toBeUndefined();
    expect(healthcareService.availabilityExceptions).toBeUndefined();
    expect(healthcareService._availabilityExceptions).toBeUndefined();
    expect(healthcareService.endpoint).toBeUndefined();
  });

  it('should create a HealthcareService with provided values', () => {
    const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
    const active = true;
    const providedBy: IReference = { reference: 'Organization/1' };
    const category: ICodeableConcept[] = [{ text: 'Primary Care' }];
    const type: ICodeableConcept[] = [{ text: 'General Practice' }];
    const specialty: ICodeableConcept[] = [{ text: 'Family Medicine' }];
    const location: IReference[] = [{ reference: 'Location/1' }];
    const name = 'Healthcare Service Name';
    const comment = 'This is a comment';
    const extraDetails = 'Extra details about the service';
    const photo: IAttachment = { url: 'http://example.com/photo.jpg' };
    const telecom: IContactPoint[] = [{ system: 'phone', value: '123-456-7890' }];
    const coverageArea: IReference[] = [{ reference: 'Location/2' }];
    const serviceProvisionCode: ICodeableConcept[] = [{ text: 'Service Provision Code' }];
    const eligibility: IHealthcareServiceEligibility[] = [
      { code: { text: 'Eligibility Code' }, comment: 'Eligibility Comment' },
    ];
    const program: ICodeableConcept[] = [{ text: 'Program' }];
    const characteristic: ICodeableConcept[] = [{ text: 'Characteristic' }];
    const communication: ICodeableConcept[] = [{ text: 'English' }];
    const referralMethod: ICodeableConcept[] = [{ text: 'Referral Method' }];
    const appointmentRequired = true;
    const availableTime: IHealthcareServiceAvailableTime[] = [{ daysOfWeek: ['mon'], allDay: true }];
    const notAvailable: IHealthcareServiceNotAvailable[] = [{ description: 'Not available on holidays' }];
    const availabilityExceptions = 'Public holidays';
    const endpoint: IReference[] = [{ reference: 'Endpoint/1' }];

    const healthcareService = new HealthcareService({
      identifier: [identifier],
      active,
      providedBy,
      category,
      type,
      specialty,
      location,
      name,
      comment,
      extraDetails,
      photo,
      telecom,
      coverageArea,
      serviceProvisionCode,
      eligibility,
      program,
      characteristic,
      communication,
      referralMethod,
      appointmentRequired,
      availableTime,
      notAvailable,
      availabilityExceptions,
      endpoint,
    });

    expect(healthcareService.identifier).toContain(identifier);
    expect(healthcareService.active).toBe(active);
    expect(healthcareService.providedBy).toBe(providedBy);
    expect(healthcareService.category).toContain(category[0]);
    expect(healthcareService.type).toContain(type[0]);
    expect(healthcareService.specialty).toContain(specialty[0]);
    expect(healthcareService.location).toContain(location[0]);
    expect(healthcareService.name).toBe(name);
    expect(healthcareService.comment).toBe(comment);
    expect(healthcareService.extraDetails).toBe(extraDetails);
    expect(healthcareService.photo).toBe(photo);
    expect(healthcareService.telecom).toContain(telecom[0]);
    expect(healthcareService.coverageArea).toContain(coverageArea[0]);
    expect(healthcareService.serviceProvisionCode).toContain(serviceProvisionCode[0]);
    expect(healthcareService.eligibility).toContain(eligibility[0]);
    expect(healthcareService.program).toContain(program[0]);
    expect(healthcareService.characteristic).toContain(characteristic[0]);
    expect(healthcareService.communication).toContain(communication[0]);
    expect(healthcareService.referralMethod).toContain(referralMethod[0]);
    expect(healthcareService.appointmentRequired).toBe(appointmentRequired);
    expect(healthcareService.availableTime).toContain(availableTime[0]);
    expect(healthcareService.notAvailable).toContain(notAvailable[0]);
    expect(healthcareService.availabilityExceptions).toBe(availabilityExceptions);
    expect(healthcareService.endpoint).toContain(endpoint[0]);
  });

  it('should serialize to JSON correctly', () => {
    const name = 'Healthcare Service Name';
    const healthcareService = new HealthcareService({ name });
    const json = healthcareService.toJson();
    expect(json.name).toBe(name);
  });

  it('should return a pretty string representation of the model', () => {
    const name = 'Healthcare Service Name';
    const healthcareService = new HealthcareService({ name });
    const prettyString = healthcareService.toPrettyString();
    expect(prettyString).toContain(`"name": "${name}"`);
  });

  it('should validate a valid HealthcareService model', () => {
    const validHealthcareService = new HealthcareService({ name: 'Valid Service' });
    const { isValid, operationOutcome } = validHealthcareService.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });

  it('should invalidate a HealthcareService model with invalid data', () => {
    const invalidHealthcareService = new HealthcareService({ name: '' });
    const { isValid, operationOutcome } = invalidHealthcareService.validate();
    expect(isValid).toBe(false);
    expect(operationOutcome.issue).not.toHaveLength(0);
  });

  it('should handle empty JSON input', () => {
    const json = '{}';
    const healthcareService = new HealthcareService(JSON.parse(json));
    expect(healthcareService.resourceType).toBe('HealthcareService');
    expect(healthcareService.identifier).toBeUndefined();
    expect(healthcareService.active).toBeUndefined();
    expect(healthcareService._active).toBeUndefined();
    expect(healthcareService.providedBy).toBeUndefined();
    expect(healthcareService.category).toBeUndefined();
    expect(healthcareService.type).toBeUndefined();
    expect(healthcareService.specialty).toBeUndefined();
    expect(healthcareService.location).toBeUndefined();
    expect(healthcareService.name).toBeUndefined();
    expect(healthcareService._name).toBeUndefined();
    expect(healthcareService.comment).toBeUndefined();
    expect(healthcareService._comment).toBeUndefined();
    expect(healthcareService.extraDetails).toBeUndefined();
    expect(healthcareService._extraDetails).toBeUndefined();
    expect(healthcareService.photo).toBeUndefined();
    expect(healthcareService.telecom).toBeUndefined();
    expect(healthcareService.coverageArea).toBeUndefined();
    expect(healthcareService.serviceProvisionCode).toBeUndefined();
    expect(healthcareService.eligibility).toBeUndefined();
    expect(healthcareService.program).toBeUndefined();
    expect(healthcareService.characteristic).toBeUndefined();
    expect(healthcareService.communication).toBeUndefined();
    expect(healthcareService.referralMethod).toBeUndefined();
    expect(healthcareService.appointmentRequired).toBeUndefined();
    expect(healthcareService._appointmentRequired).toBeUndefined();
    expect(healthcareService.availableTime).toBeUndefined();
    expect(healthcareService.notAvailable).toBeUndefined();
    expect(healthcareService.availabilityExceptions).toBeUndefined();
    expect(healthcareService._availabilityExceptions).toBeUndefined();
    expect(healthcareService.endpoint).toBeUndefined();
  });
});

describe('HealthcareServiceBuilder', () => {
  let builder: HealthcareServiceBuilder;

  beforeEach(() => {
    builder = new HealthcareServiceBuilder();
  });

  it('should build a HealthcareService with identifier', () => {
    const identifier: IIdentifier = { system: 'http://example.com', value: '12345' };
    const healthcareService = builder.addIdentifier(identifier).build();
    expect(healthcareService.identifier).toContain(identifier);
  });

  it('should build a HealthcareService with active status', () => {
    const active = true;
    const healthcareService = builder.setActive(active).build();
    expect(healthcareService.active).toBe(active);
  });

  it('should build a HealthcareService with providedBy reference', () => {
    const providedBy: IReference = { reference: 'Organization/1' };
    const healthcareService = builder.setProvidedBy(providedBy).build();
    expect(healthcareService.providedBy).toBe(providedBy);
  });

  it('should build a HealthcareService with category', () => {
    const category: ICodeableConcept = { text: 'Primary Care' };
    const healthcareService = builder.addCategory(category).build();
    expect(healthcareService.category).toContain(category);
  });

  it('should build a HealthcareService with type', () => {
    const type: ICodeableConcept = { text: 'General Practice' };
    const healthcareService = builder.addType(type).build();
    expect(healthcareService.type).toContain(type);
  });

  it('should build a HealthcareService with specialty', () => {
    const specialty: ICodeableConcept = { text: 'Family Medicine' };
    const healthcareService = builder.addSpecialty(specialty).build();
    expect(healthcareService.specialty).toContain(specialty);
  });

  it('should build a HealthcareService with location', () => {
    const location: IReference = { reference: 'Location/1' };
    const healthcareService = builder.addLocation(location).build();
    expect(healthcareService.location).toContain(location);
  });

  it('should build a HealthcareService with name', () => {
    const name = 'Healthcare Service Name';
    const healthcareService = builder.setName(name).build();
    expect(healthcareService.name).toBe(name);
  });

  it('should build a HealthcareService with comment', () => {
    const comment = 'This is a comment';
    const healthcareService = builder.setComment(comment).build();
    expect(healthcareService.comment).toBe(comment);
  });

  it('should build a HealthcareService with extra details', () => {
    const extraDetails = 'Extra details about the service';
    const healthcareService = builder.setExtraDetails(extraDetails).build();
    expect(healthcareService.extraDetails).toBe(extraDetails);
  });

  it('should build a HealthcareService with photo', () => {
    const photo: IAttachment = { url: 'http://example.com/photo.jpg' };
    const healthcareService = builder.setPhoto(photo).build();
    expect(healthcareService.photo).toBe(photo);
  });

  it('should build a HealthcareService with telecom', () => {
    const telecom: IContactPoint = { system: 'phone', value: '123-456-7890' };
    const healthcareService = builder.addTelecom(telecom).build();
    expect(healthcareService.telecom).toContain(telecom);
  });

  it('should build a HealthcareService with coverage area', () => {
    const coverageArea: IReference = { reference: 'Location/2' };
    const healthcareService = builder.addCoverageArea(coverageArea).build();
    expect(healthcareService.coverageArea).toContain(coverageArea);
  });

  it('should build a HealthcareService with service provision code', () => {
    const serviceProvisionCode: ICodeableConcept = { text: 'Service Provision Code' };
    const healthcareService = builder.addServiceProvisionCode(serviceProvisionCode).build();
    expect(healthcareService.serviceProvisionCode).toContain(serviceProvisionCode);
  });

  it('should build a HealthcareService with eligibility', () => {
    const eligibility: IHealthcareServiceEligibility = {
      code: { text: 'Eligibility Code' },
      comment: 'Eligibility Comment',
    };
    const healthcareService = builder.addEligibility(eligibility).build();
    expect(healthcareService.eligibility).toContain(eligibility);
  });

  it('should build a HealthcareService with program', () => {
    const program: ICodeableConcept = { text: 'Program' };
    const healthcareService = builder.addProgram(program).build();
    expect(healthcareService.program).toContain(program);
  });

  it('should build a HealthcareService with characteristic', () => {
    const characteristic: ICodeableConcept = { text: 'Characteristic' };
    const healthcareService = builder.addCharacteristic(characteristic).build();
    expect(healthcareService.characteristic).toContain(characteristic);
  });

  it('should build a HealthcareService with communication', () => {
    const communication: ICodeableConcept = { text: 'English' };
    const healthcareService = builder.addCommunication(communication).build();
    expect(healthcareService.communication).toContain(communication);
  });

  it('should build a HealthcareService with referral method', () => {
    const referralMethod: ICodeableConcept = { text: 'Referral Method' };
    const healthcareService = builder.addReferralMethod(referralMethod).build();
    expect(healthcareService.referralMethod).toContain(referralMethod);
  });

  it('should build a HealthcareService with appointment required', () => {
    const appointmentRequired = true;
    const healthcareService = builder.setAppointmentRequired(appointmentRequired).build();
    expect(healthcareService.appointmentRequired).toBe(appointmentRequired);
  });

  it('should build a HealthcareService with available time', () => {
    const availableTime: IHealthcareServiceAvailableTime = { daysOfWeek: ['mon'], allDay: true };
    const healthcareService = builder.addAvailableTime(availableTime).build();
    expect(healthcareService.availableTime).toContain(availableTime);
  });

  it('should build a HealthcareService with not available time', () => {
    const notAvailable: IHealthcareServiceNotAvailable = { description: 'Not available on holidays' };
    const healthcareService = builder.addNotAvailable(notAvailable).build();
    expect(healthcareService.notAvailable).toContain(notAvailable);
  });

  it('should build a HealthcareService with availability exceptions', () => {
    const availabilityExceptions = 'Public holidays';
    const healthcareService = builder.setAvailabilityExceptions(availabilityExceptions).build();
    expect(healthcareService.availabilityExceptions).toBe(availabilityExceptions);
  });

  it('should build a HealthcareService with endpoint', () => {
    const endpoint: IReference = { reference: 'Endpoint/1' };
    const healthcareService = builder.addEndpoint(endpoint).build();
    expect(healthcareService.endpoint).toContain(endpoint);
  });

  it('should build a HealthcareService from JSON', () => {
    const json = '{"name": "Healthcare Service Name"}';
    const healthcareService = builder.fromJSON(json).build();
    expect(healthcareService.name).toBe('Healthcare Service Name');
  });

  it('should add a primitive extension to the HealthcareService', () => {
    const extension: IElement = { id: 'test-extension' };
    const healthcareService = builder.addPrimitiveExtension('_name', extension).build();
    expect(healthcareService._name).toBe(extension);
  });

  it('should handle empty JSON input', () => {
    const json = '{}';
    const healthcareService = builder.fromJSON(json).build();
    expect(healthcareService.resourceType).toBe('HealthcareService');
    expect(healthcareService.identifier).toBeUndefined();
    expect(healthcareService.active).toBeUndefined();
    expect(healthcareService.providedBy).toBeUndefined();
    expect(healthcareService.category).toBeUndefined();
    expect(healthcareService.type).toBeUndefined();
    expect(healthcareService.specialty).toBeUndefined();
    expect(healthcareService.location).toBeUndefined();
    expect(healthcareService.name).toBeUndefined();
    expect(healthcareService.comment).toBeUndefined();
    expect(healthcareService.extraDetails).toBeUndefined();
    expect(healthcareService.photo).toBeUndefined();
    expect(healthcareService.telecom).toBeUndefined();
    expect(healthcareService.coverageArea).toBeUndefined();
    expect(healthcareService.serviceProvisionCode).toBeUndefined();
    expect(healthcareService.eligibility).toBeUndefined();
    expect(healthcareService.program).toBeUndefined();
    expect(healthcareService.characteristic).toBeUndefined();
    expect(healthcareService.communication).toBeUndefined();
    expect(healthcareService.referralMethod).toBeUndefined();
    expect(healthcareService.appointmentRequired).toBeUndefined();
    expect(healthcareService.availableTime).toBeUndefined();
    expect(healthcareService.notAvailable).toBeUndefined();
    expect(healthcareService.availabilityExceptions).toBeUndefined();
    expect(healthcareService.endpoint).toBeUndefined();
  });
});

describe('HealthcareServiceValidator', () => {
  let errors: IOperationOutcomeIssue[];

  beforeEach(() => {
    errors = [];
  });

  it('should validate HealthcareService with all fields set correctly', () => {
    const healthcareService: IHealthcareService = {
      resourceType: 'HealthcareService',
      identifier: [{ system: 'http://example.com', value: '12345' }],
      active: true,
      providedBy: { reference: 'Organization/1' },
      category: [{ text: 'Primary Care' }],
      type: [{ text: 'General Practice' }],
      specialty: [{ text: 'Family Medicine' }],
      location: [{ reference: 'Location/1' }],
      name: 'Healthcare Service Name',
      comment: 'This is a comment',
      extraDetails: 'Extra details about the service',
      photo: { url: 'http://example.com/photo.jpg' },
      telecom: [{ system: 'phone', value: '123-456-7890' }],
      coverageArea: [{ reference: 'Location/2' }],
      serviceProvisionCode: [{ text: 'Service Provision Code' }],
      eligibility: [{ code: { text: 'Eligibility Code' }, comment: 'Eligibility Comment' }],
      program: [{ text: 'Program' }],
      characteristic: [{ text: 'Characteristic' }],
      communication: [{ text: 'English' }],
      referralMethod: [{ text: 'Referral Method' }],
      appointmentRequired: true,
      availableTime: [{ daysOfWeek: ['mon'], allDay: true }],
      notAvailable: [{ description: 'Not available on holidays' }],
      availabilityExceptions: 'Public holidays',
      endpoint: [{ reference: 'Endpoint/1' }],
    };
    HealthcareServiceValidator(healthcareService, 'HealthcareService', errors);
    expect(errors.length).toBe(0);
  });

  it('should add error if HealthcareService has missing required fields', () => {
    const healthcareService: IHealthcareService = {};
    HealthcareServiceValidator(healthcareService, 'HealthcareService', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should add error if HealthcareService has invalid reference type', () => {
    const healthcareService: IHealthcareService = {
      resourceType: 'HealthcareService',
      providedBy: { reference: 'InvalidType/1' },
    };
    HealthcareServiceValidator(healthcareService, 'HealthcareService', errors);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should validate HealthcareService with only required fields', () => {
    const healthcareService: IHealthcareService = {
      resourceType: 'HealthcareService',
      name: 'Valid Service',
    };
    HealthcareServiceValidator(healthcareService, 'HealthcareService', errors);
    expect(errors.length).toBe(0);
  });

  it('should add error if HealthcareService has invalid boolean field', () => {
    const healthcareService: IHealthcareService = {
      resourceType: 'HealthcareService',
      active: 'invalid-boolean' as unknown as boolean,
    };
    HealthcareServiceValidator(healthcareService, 'HealthcareService', errors);
    expect(errors.length).toBeGreaterThan(0);
  });
});
