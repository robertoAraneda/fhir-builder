import { contextR4 } from '../../../src';
import {
  IBundleEntry,
  IBundleLink,
  IBundleRequest,
  IBundleResponse,
  IBundleSearch,
  IElement,
  IOperationOutcomeIssue,
  IResource,
} from 'fhirtypes/dist/r4';
import { BundleEntryBuilder } from '../../../src/r4/builders';
import { BundleEntryValidator } from '../../../src/core/r4/validators/backbones';

const { BundleEntry } = contextR4();

describe('BundleEntry', () => {
  it('should initialize with default values', () => {
    const entry = new BundleEntry();
    expect(entry.link).toBeUndefined();
    expect(entry.fullUrl).toBeUndefined();
    expect(entry._fullUrl).toBeUndefined();
    expect(entry.resource).toBeUndefined();
    expect(entry.search).toBeUndefined();
    expect(entry.request).toBeUndefined();
    expect(entry.response).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const entry = new BundleEntry({
      fullUrl: 'http://example.com',
      resource: { id: '123' } as IResource,
    });
    expect(entry.fullUrl).toBe('http://example.com');
    expect(entry.resource?.id).toBe('123');
  });

  it('should return a JSON representation of the model', () => {
    const entry = new BundleEntry({
      fullUrl: 'http://example.com',
      resource: { id: '123' } as IResource,
    });
    const json = entry.toJson();
    expect(json.fullUrl).toBe('http://example.com');
    expect(json.resource.id).toBe('123');
  });

  it('should return a string representation of the model', () => {
    const entry = new BundleEntry({
      fullUrl: 'http://example.com',
      resource: { id: '123' } as IResource,
    });
    const str = entry.toString();
    expect(str).toContain('http://example.com');
    expect(str).toContain('123');
  });

  it('should return a pretty string representation of the model', () => {
    const entry = new BundleEntry({
      fullUrl: 'http://example.com',
      resource: { id: '123' } as IResource,
    });
    const prettyStr = entry.toPrettyString();
    expect(prettyStr).toContain('http://example.com');
    expect(prettyStr).toContain('123');
  });

  it('should return a serialized string representation of the model', () => {
    const entry = new BundleEntry({
      fullUrl: 'http://example.com',
      resource: { id: '123' } as IResource,
    });
    const serialized = entry.serialize();
    expect(serialized).toContain('http://example.com');
    expect(serialized).toContain('123');
  });

  it('should validate a valid model', () => {
    const entry = new BundleEntry({
      fullUrl: 'http://example.com',
      resource: { id: '123', resourceType: 'Resource' } as IResource,
    });
    const { isValid, operationOutcome } = entry.validate();
    expect(isValid).toBe(true);
    expect(operationOutcome.issue).toHaveLength(0);
  });
});

describe('BundleEntryBuilder', () => {
  it('should build a BundleEntry with default values', () => {
    const builder = new BundleEntryBuilder();
    const entry = builder.build();
    expect(entry.link).toBeUndefined();
    expect(entry.fullUrl).toBeUndefined();
    expect(entry.resource).toBeUndefined();
    expect(entry.search).toBeUndefined();
    expect(entry.request).toBeUndefined();
    expect(entry.response).toBeUndefined();
  });

  it('should set fullUrl correctly', () => {
    const builder = new BundleEntryBuilder();
    const entry = builder.setFullUrl('http://example.com').build();
    expect(entry.fullUrl).toBe('http://example.com');
  });

  it('should set resource correctly', () => {
    const builder = new BundleEntryBuilder();
    const resource = { id: '123' } as IResource;
    const entry = builder.setResource(resource).build();
    expect(entry.resource?.id).toBe('123');
  });

  it('should set search correctly', () => {
    const builder = new BundleEntryBuilder();
    const search = { mode: 'match' } as IBundleSearch;
    const entry = builder.setSearch(search).build();
    expect(entry.search?.mode).toBe('match');
  });

  it('should set request correctly', () => {
    const builder = new BundleEntryBuilder();
    const request = { method: 'GET', url: 'http://example.com' } as IBundleRequest;
    const entry = builder.setRequest(request).build();
    expect(entry.request?.method).toBe('GET');
    expect(entry.request?.url).toBe('http://example.com');
  });

  it('should set response correctly', () => {
    const builder = new BundleEntryBuilder();
    const response = { status: '200 OK' } as IBundleResponse;
    const entry = builder.setResponse(response).build();
    expect(entry.response?.status).toBe('200 OK');
  });

  it('should add link correctly', () => {
    const builder = new BundleEntryBuilder();
    const link = { relation: 'self', url: 'http://example.com' } as IBundleLink;
    const entry = builder.addLink(link).build();
    expect(entry.link?.[0].relation).toBe('self');
    expect(entry.link?.[0].url).toBe('http://example.com');
  });

  it('should add primitive extension correctly', () => {
    const builder = new BundleEntryBuilder();
    const extension = { id: 'ext1' } as IElement;
    const entry = builder.addPrimitiveExtension('_fullUrl', extension).build();
    expect(entry._fullUrl?.id).toBe('ext1');
  });
});

describe('BundleEntryValidator', () => {
  it('should validate a valid BundleEntry object', () => {
    const entry: IBundleEntry = {
      fullUrl: 'http://example.com',
      resource: { id: '123', resourceType: 'Resource' } as IResource,
    };
    const errors: IOperationOutcomeIssue[] = [];
    BundleEntryValidator(entry, 'BundleEntry', errors);
    expect(errors.length).toBe(0);
  });

  it('should add an error if link is not a valid BundleLink object', () => {
    const entry: IBundleEntry = {
      link: [{ invalidField: 'invalid' }] as any,
    };
    const errors: IOperationOutcomeIssue[] = [];
    BundleEntryValidator(entry, 'BundleEntry', errors);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].details?.text).toContain('link');
  });

  it('should add an error if search is not a valid BundleSearch object', () => {
    const entry: IBundleEntry = {
      search: { invalidField: 'invalid' } as any,
    };
    const errors: IOperationOutcomeIssue[] = [];
    BundleEntryValidator(entry, 'BundleEntry', errors);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].details?.text).toContain('search');
  });

  it('should add an error if request is not a valid BundleRequest object', () => {
    const entry: IBundleEntry = {
      request: { invalidField: 'invalid' } as any,
    };
    const errors: IOperationOutcomeIssue[] = [];
    BundleEntryValidator(entry, 'BundleEntry', errors);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].details?.text).toContain('request');
  });

  it('should add an error if response is not a valid BundleResponse object', () => {
    const entry: IBundleEntry = {
      response: { invalidField: 'invalid' } as any,
    };
    const errors: IOperationOutcomeIssue[] = [];
    BundleEntryValidator(entry, 'BundleEntry', errors);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].details?.text).toContain('response');
  });
});
