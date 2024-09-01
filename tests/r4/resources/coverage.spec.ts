import { contextR4 } from '../../../src';
import { ICodeableConcept, IElement, IIdentifier, IPeriod, IReference } from 'fhirtypes/dist/r4';
import { FinancialResourceStatusCodesEnum } from 'fhirtypes/dist/r4/enums';
import { ICoverageClass, ICoverageCostToBeneficiary } from 'fhirtypes/dist/r4/backbones';

describe('Coverage FHIR R4', () => {
  const { Coverage, CoverageValidator, CoverageBuilder } = contextR4();

  describe('FHIR examples', () => {
    it('General Person Primary Coverage Example', () => {
      const item = new Coverage({
        resourceType: 'Coverage',
        id: '9876B1',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the coverage</div>',
        },
        identifier: [
          {
            system: 'http://benefitsinc.com/certificate',
            value: '12345',
          },
        ],
        status: 'active',
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
              code: 'EHCPOL',
              display: 'extended healthcare',
            },
          ],
        },
        policyHolder: {
          reference: 'http://benefitsinc.com/FHIR/Organization/CBI35',
        },
        subscriber: {
          reference: 'Patient/4',
        },
        beneficiary: {
          reference: 'Patient/4',
        },
        dependent: '0',
        relationship: {
          coding: [
            {
              code: 'self',
            },
          ],
        },
        period: {
          start: '2011-05-23',
          end: '2012-05-23',
        },
        payor: [
          {
            reference: 'Organization/2',
          },
        ],
        class: [
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'group',
                },
              ],
            },
            value: 'CB135',
            name: "Corporate Baker's Inc. Local #35",
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'subgroup',
                },
              ],
            },
            value: '123',
            name: 'Trainee Part-time Benefits',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'plan',
                },
              ],
            },
            value: 'B37FC',
            name: 'Full Coverage: Medical, Dental, Pharmacy, Vision, EHC',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'subplan',
                },
              ],
            },
            value: 'P7',
            name: 'Includes afterlife benefits',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'class',
                },
              ],
            },
            value: 'SILVER',
            name: 'Silver: Family Plan spouse only',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'subclass',
                },
              ],
            },
            value: 'Tier2',
            name: 'Low deductable, max $20 copay',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'sequence',
                },
              ],
            },
            value: '9',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'rxid',
                },
              ],
            },
            value: 'MDF12345',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'rxbin',
                },
              ],
            },
            value: '987654',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'rxgroup',
                },
              ],
            },
            value: 'M35PT',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'rxpcn',
                },
              ],
            },
            value: '234516',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'sequence',
                },
              ],
            },
            value: '9',
          },
        ],
      });
      const { isValid } = item.validate();
      expect(isValid).toBeTruthy();
    });

    it('General Person Secondary Coverage Example', () => {
      const item = new Coverage({
        resourceType: 'Coverage',
        id: '7546D',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the coverage</div>',
        },
        identifier: [
          {
            system: 'http://xyz.com/codes/identifier',
            value: 'AB98761',
          },
        ],
        status: 'active',
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
              code: 'EHCPOL',
              display: 'extended healthcare',
            },
          ],
        },
        subscriber: {
          reference: 'Patient/5',
        },
        subscriberId: 'AB9876',
        beneficiary: {
          reference: 'Patient/5',
        },
        dependent: '1',
        relationship: {
          coding: [
            {
              code: 'self',
            },
          ],
        },
        period: {
          start: '2011-03-17',
          end: '2012-03-17',
        },
        payor: [
          {
            reference: 'Organization/2',
          },
        ],
        class: [
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'group',
                },
              ],
            },
            value: 'WESTAIR',
            name: 'Western Airlines',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'plan',
                },
              ],
            },
            value: 'BG4352',
            name: 'Full Coverage: Medical, Dental, Pharmacy, Vision, EHC',
          },
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
                  code: 'subplan',
                },
              ],
            },
            value: 'D15C9',
            name: 'Platinum',
          },
        ],
        order: 2,
        network: '5',
        costToBeneficiary: [
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/coverage-copay-type',
                  code: 'gpvisit',
                },
              ],
            },
            valueMoney: {
              value: 20.0,
              currency: 'USD',
            },
            exception: [
              {
                type: {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/ex-coverage-financial-exception',
                      code: 'retired',
                    },
                  ],
                },
                period: {
                  start: '2018-01-01',
                  end: '2018-12-31',
                },
              },
            ],
          },
        ],
        contract: [
          {
            reference: 'Contract/INS-101',
          },
        ],
      });

      const { isValid } = item.validate();
      expect(isValid).toBeTruthy();
    });

    it('European Health Insurance Card', () => {
      const item = new Coverage({
        resourceType: 'Coverage',
        id: '7547E',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the European Health Insurance Card</div>',
        },
        identifier: [
          {
            system: 'http://ehic.com/insurer/123456789/member',
            value: 'A123456780',
          },
        ],
        status: 'active',
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
              code: 'EHCPOL',
              display: 'extended healthcare',
            },
          ],
        },
        subscriber: {
          reference: 'Patient/5',
        },
        beneficiary: {
          reference: 'Patient/5',
        },
        relationship: {
          coding: [
            {
              code: 'self',
            },
          ],
        },
        period: {
          end: '2012-03-17',
        },
        payor: [
          {
            identifier: {
              system: 'http://ehic.com/insurer',
              value: '123456789',
            },
          },
        ],
      });

      const { isValid } = item.validate();
      expect(isValid).toBeTruthy();
    });

    it('Self Payment Example', () => {
      const item = new Coverage({
        resourceType: 'Coverage',
        id: 'SP1234',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of a Self Pay Agreement.</div>',
        },
        identifier: [
          {
            system: 'http://hospitalx.com/selfpayagreement',
            value: 'SP12345678',
          },
        ],
        status: 'active',
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/coverage-selfpay',
              code: 'pay',
              display: 'PAY',
            },
          ],
        },
        subscriber: {
          reference: 'Patient/5',
        },
        beneficiary: {
          reference: 'Patient/5',
        },
        relationship: {
          coding: [
            {
              code: 'self',
            },
          ],
        },
        period: {
          end: '2012-03-17',
        },
        payor: [
          {
            reference: 'Patient/5',
          },
        ],
      });

      const { isValid } = item.validate();
      expect(isValid).toBeTruthy();
    });
  });

  describe('Coverage Model', () => {
    it('should initialize with default values', () => {
      const coverage = new Coverage();
      expect(coverage.resourceType).toBe('Coverage');
      expect(coverage.identifier).toBeUndefined();
      expect(coverage.status).toBeUndefined();
      expect(coverage.type).toBeUndefined();
      expect(coverage.policyHolder).toBeUndefined();
      expect(coverage.subscriber).toBeUndefined();
      expect(coverage.subscriberId).toBeUndefined();
      expect(coverage.beneficiary).toBeUndefined();
      expect(coverage.dependent).toBeUndefined();
      expect(coverage.relationship).toBeUndefined();
      expect(coverage.period).toBeUndefined();
      expect(coverage.payor).toBeUndefined();
      expect(coverage.class).toBeUndefined();
      expect(coverage.order).toBeUndefined();
      expect(coverage.network).toBeUndefined();
      expect(coverage.costToBeneficiary).toBeUndefined();
      expect(coverage.subrogation).toBeUndefined();
      expect(coverage.contract).toBeUndefined();
      expect(coverage._subscriberId).toBeUndefined();
      expect(coverage._dependent).toBeUndefined();
      expect(coverage._order).toBeUndefined();
      expect(coverage._network).toBeUndefined();
      expect(coverage._subrogation).toBeUndefined();
    });

    it('should initialize with provided values', () => {
      const coverage = new Coverage({
        identifier: [{ system: 'http://example.com', value: '12345' }],
        status: 'active',
        type: { text: 'Medical' },
        policyHolder: { reference: 'Patient/1' },
        subscriber: { reference: 'Patient/2' },
        subscriberId: 'sub123',
        beneficiary: { reference: 'Patient/3' },
        dependent: 'dep1',
        relationship: { text: 'self' },
        period: { start: '2023-01-01', end: '2023-12-31' },
        payor: [{ reference: 'Organization/1' }],
        class: [{ type: { text: 'class1' }, value: 'value1', _value: { id: 'id' } }],
        order: 1,
        network: 'network1',
        costToBeneficiary: [
          { type: { text: 'cost1' }, valueQuantity: { value: 100 }, valueMoney: { value: 4, currency: 'AED' } },
        ],
        subrogation: true,
        contract: [{ reference: 'Contract/1' }],
        _subscriberId: { id: 'ext1' },
        _dependent: { id: 'ext2' },
        _order: { id: 'ext3' },
        _network: { id: 'ext4' },
        _subrogation: { id: 'ext5' },
      });
      expect(coverage.identifier?.[0].system).toBe('http://example.com');
      expect(coverage.identifier?.[0].value).toBe('12345');
      expect(coverage.status).toBe('active');
      expect(coverage.type?.text).toBe('Medical');
      expect(coverage.policyHolder?.reference).toBe('Patient/1');
      expect(coverage.subscriber?.reference).toBe('Patient/2');
      expect(coverage.subscriberId).toBe('sub123');
      expect(coverage.beneficiary?.reference).toBe('Patient/3');
      expect(coverage.dependent).toBe('dep1');
      expect(coverage.relationship?.text).toBe('self');
      expect(coverage.period?.start).toBe('2023-01-01');
      expect(coverage.period?.end).toBe('2023-12-31');
      expect(coverage.payor?.[0].reference).toBe('Organization/1');
      expect(coverage.class?.[0].type.text).toBe('class1');
      expect(coverage.class?.[0].value).toBe('value1');
      expect(coverage.order).toBe(1);
      expect(coverage.network).toBe('network1');
      expect(coverage.costToBeneficiary?.[0].type?.text).toBe('cost1');
      expect(coverage.costToBeneficiary?.[0].valueQuantity?.value).toBe(100);
      expect(coverage.subrogation).toBe(true);
      expect(coverage.contract?.[0].reference).toBe('Contract/1');
      expect(coverage._subscriberId?.id).toBe('ext1');
      expect(coverage._dependent?.id).toBe('ext2');
      expect(coverage._order?.id).toBe('ext3');
      expect(coverage._network?.id).toBe('ext4');
      expect(coverage._subrogation?.id).toBe('ext5');
    });

    it('should serialize to JSON correctly', () => {
      const coverage = new Coverage({
        status: 'active',
        beneficiary: { reference: 'Patient/123' },
        payor: [{ reference: 'Organization/456' }],
      });
      const json = coverage.toJson();
      expect(json.status).toBe('active');
      expect(json.beneficiary.reference).toBe('Patient/123');
      expect(json.payor[0].reference).toBe('Organization/456');
    });

    it('should convert to pretty string correctly', () => {
      const coverage = new Coverage({
        status: 'active',
        beneficiary: { reference: 'Patient/123' },
        payor: [{ reference: 'Organization/456' }],
      });
      const prettyString = coverage.toPrettyString();
      expect(prettyString).toContain('"status": "active"');
      expect(prettyString).toContain('  "beneficiary": {\n' + '    "reference": "Patient/123"\n' + '  },');
      expect(prettyString).toContain(
        '  "payor": [\n' + '    {\n' + '      "reference": "Organization/456"\n' + '    }\n' + '  ]',
      );
    });

    it('should validate correctly', () => {
      const coverage = new Coverage({
        status: 'active',
        beneficiary: { reference: 'Patient/123' },
        payor: [{ reference: 'Organization/456' }],
      });
      const validationResult = coverage.validate();
      expect(validationResult).toBeTruthy();
    });

    it('should serialize correctly', () => {
      const coverage = new Coverage({
        status: 'active',
        beneficiary: { reference: 'Patient/123' },
        payor: [{ reference: 'Organization/456' }],
      });
      const serialized = coverage.serialize();
      expect(serialized).toBe(JSON.stringify(coverage.toJson()));
    });
  });

  describe('CoverageBuilder', () => {
    it('should build a Coverage with default values', () => {
      const builder = new CoverageBuilder();
      const coverage = builder.build();
      expect(coverage.resourceType).toBe('Coverage');
      expect(coverage.identifier).toBeUndefined();
      expect(coverage.status).toBeUndefined();
      expect(coverage.type).toBeUndefined();
      expect(coverage.policyHolder).toBeUndefined();
      expect(coverage.subscriber).toBeUndefined();
      expect(coverage.subscriberId).toBeUndefined();
      expect(coverage.beneficiary).toBeUndefined();
      expect(coverage.dependent).toBeUndefined();
      expect(coverage.relationship).toBeUndefined();
      expect(coverage.period).toBeUndefined();
      expect(coverage.payor).toBeUndefined();
      expect(coverage.class).toBeUndefined();
      expect(coverage.order).toBeUndefined();
      expect(coverage.network).toBeUndefined();
      expect(coverage.costToBeneficiary).toBeUndefined();
      expect(coverage.subrogation).toBeUndefined();
      expect(coverage.contract).toBeUndefined();
      expect(coverage._subscriberId).toBeUndefined();
      expect(coverage._dependent).toBeUndefined();
      expect(coverage._order).toBeUndefined();
      expect(coverage._network).toBeUndefined();
      expect(coverage._subrogation).toBeUndefined();
    });

    it('should set identifier correctly', () => {
      const builder = new CoverageBuilder();
      const identifier = { system: 'http://example.com', value: '12345' } as IIdentifier;
      const coverage = builder.addIdentifier(identifier).build();
      expect(coverage.identifier?.[0].system).toBe('http://example.com');
      expect(coverage.identifier?.[0].value).toBe('12345');
    });

    it('should set status correctly', () => {
      const builder = new CoverageBuilder();
      const status = FinancialResourceStatusCodesEnum.ACTIVE;
      const coverage = builder.setStatus(status).build();
      expect(coverage.status).toBe('active');
    });

    it('should set type correctly', () => {
      const builder = new CoverageBuilder();
      const type = { text: 'Medical' } as ICodeableConcept;
      const coverage = builder.setType(type).build();
      expect(coverage.type?.text).toBe('Medical');
    });

    it('should set policy holder correctly', () => {
      const builder = new CoverageBuilder();
      const policyHolder = { reference: 'Patient/1' } as IReference;
      const coverage = builder.setPolicyHolder(policyHolder).build();
      expect(coverage.policyHolder?.reference).toBe('Patient/1');
    });

    it('should set subscriber correctly', () => {
      const builder = new CoverageBuilder();
      const subscriber = { reference: 'Patient/2' } as IReference;
      const coverage = builder.setSubscriber(subscriber).build();
      expect(coverage.subscriber?.reference).toBe('Patient/2');
    });

    it('should set subscriber ID correctly', () => {
      const builder = new CoverageBuilder();
      const subscriberId = 'sub123';
      const coverage = builder.setSubscriberId(subscriberId).build();
      expect(coverage.subscriberId).toBe('sub123');
    });

    it('should set beneficiary correctly', () => {
      const builder = new CoverageBuilder();
      const beneficiary = { reference: 'Patient/3' } as IReference;
      const coverage = builder.setBeneficiary(beneficiary).build();
      expect(coverage.beneficiary?.reference).toBe('Patient/3');
    });

    it('should set dependent correctly', () => {
      const builder = new CoverageBuilder();
      const dependent = 'dep1';
      const coverage = builder.setDependent(dependent).build();
      expect(coverage.dependent).toBe('dep1');
    });

    it('should set relationship correctly', () => {
      const builder = new CoverageBuilder();
      const relationship = { text: 'self' } as ICodeableConcept;
      const coverage = builder.setRelationship(relationship).build();
      expect(coverage.relationship?.text).toBe('self');
    });

    it('should set period correctly', () => {
      const builder = new CoverageBuilder();
      const period = { start: '2023-01-01', end: '2023-12-31' } as IPeriod;
      const coverage = builder.setPeriod(period).build();
      expect(coverage.period?.start).toBe('2023-01-01');
      expect(coverage.period?.end).toBe('2023-12-31');
    });

    it('should add payor correctly', () => {
      const builder = new CoverageBuilder();
      const payor = { reference: 'Organization/1' } as IReference;
      const coverage = builder.addPayor(payor).build();
      expect(coverage.payor?.[0].reference).toBe('Organization/1');
    });

    it('should add class correctly', () => {
      const builder = new CoverageBuilder();
      const coverageClass = { type: { text: 'class1' }, value: 'value1' } as ICoverageClass;
      const coverage = builder.addClass(coverageClass).build();
      expect(coverage.class?.[0].type.text).toBe('class1');
      expect(coverage.class?.[0].value).toBe('value1');
    });

    it('should set order correctly', () => {
      const builder = new CoverageBuilder();
      const order = 1;
      const coverage = builder.setOrder(order).build();
      expect(coverage.order).toBe(1);
    });

    it('should set network correctly', () => {
      const builder = new CoverageBuilder();
      const network = 'network1';
      const coverage = builder.setNetwork(network).build();
      expect(coverage.network).toBe('network1');
    });

    it('should add cost to beneficiary correctly', () => {
      const builder = new CoverageBuilder();
      const costToBeneficiary = {
        type: { text: 'cost1' },
        valueQuantity: { value: 100 },
      } as ICoverageCostToBeneficiary;
      const coverage = builder.addCostToBeneficiary(costToBeneficiary).build();
      expect(coverage.costToBeneficiary?.[0].type?.text).toBe('cost1');
      expect(coverage.costToBeneficiary?.[0].valueQuantity?.value).toBe(100);
    });

    it('should set subrogation correctly', () => {
      const builder = new CoverageBuilder();
      const subrogation = true;
      const coverage = builder.setSubrogation(subrogation).build();
      expect(coverage.subrogation).toBe(true);
    });

    it('should add contract correctly', () => {
      const builder = new CoverageBuilder();
      const contract = { reference: 'Contract/1' } as IReference;
      const coverage = builder.addContract(contract).build();
      expect(coverage.contract?.[0].reference).toBe('Contract/1');
    });

    it('should add primitive extension correctly', () => {
      const builder = new CoverageBuilder();
      const extension = { id: 'ext1' } as IElement;
      const coverage = builder.addPrimitiveExtension('_subscriberId', extension).build();
      expect(coverage._subscriberId?.id).toBe('ext1');
    });
  });

  describe('CoverageValidator', () => {
    it('should validate a valid Coverage object', () => {
      const coverage = {
        resourceType: 'Coverage',
        status: 'active',
        beneficiary: { reference: 'Patient/123' },
        payor: [{ reference: 'Organization/456' }],
      };

      const { operationOutcome } = CoverageValidator(coverage);
      expect(operationOutcome.issue.length).toBe(0);
    });

    it('should add an error if status is missing', () => {
      const coverage = {
        resourceType: 'Coverage',
        beneficiary: { reference: 'Patient/123' },
        payor: [{ reference: 'Organization/456' }],
      };
      const { operationOutcome } = CoverageValidator(coverage);
      expect(operationOutcome.issue.length).toBeGreaterThan(0);
      expect(operationOutcome.issue[0].details?.text).toContain('status');
    });

    it('should add an error if beneficiary is missing', () => {
      const coverage = {
        resourceType: 'Coverage',
        status: 'active',
        payor: [{ reference: 'Organization/456' }],
      };
      const { operationOutcome } = CoverageValidator(coverage);
      expect(operationOutcome.issue.length).toBeGreaterThan(0);
      expect(operationOutcome.issue[0].details?.text).toContain('beneficiary');
    });

    it('should add an error if payor is missing', () => {
      const coverage = {
        resourceType: 'Coverage',
        status: 'active',
        beneficiary: { reference: 'Patient/123' },
      };
      const { operationOutcome } = CoverageValidator(coverage);
      expect(operationOutcome.issue.length).toBeGreaterThan(0);
      expect(operationOutcome.issue[0].details?.text).toContain('payor');
    });

    it('should add an error if period is not a valid Period object', () => {
      const coverage = {
        resourceType: 'Coverage',
        status: 'active',
        beneficiary: { reference: 'Patient/123' },
        payor: [{ reference: 'Organization/456' }],
        period: { start: 'invalid-date', end: '2023-12-31' } as any,
      };
      const { operationOutcome } = CoverageValidator(coverage);
      expect(operationOutcome.issue.length).toBeGreaterThan(0);
      expect(operationOutcome.issue[0].details?.text).toContain('period');
    });
  });
});
