import { text } from "stream/consumers";
import {FHIRContext} from "../../../src/index"
import { AddressModelValidator } from "../../../src/r4/validators/AddressValidator"


describe('Address FHIR R4', () => {

  
  const { getDataTypes } = new FHIRContext().forR4();


  it('should be able create a new address [new Address()]', async () => {
    const { Address } = getDataTypes();

    const item = new Address({
      text: 'test',
      date: "1983"
    });

    expect(item).toBeDefined();
    expect(item.text).toBe('test');
    expect(() => AddressModelValidator(item)).not.toThrow();
  });

  it('should be able create a multiples address [new Address()]', async () => {
    const { Address } = getDataTypes();

    const item1 = new Address({
      text: 'text',
      date: "1983"
    });


    const item2 = {
      text: 'hello',
      date: "1983",
    }

    const adresses = [item1, item2];

    expect(adresses).toBeDefined();
    expect(() => AddressModelValidator(adresses)).not.toThrow();
  });
});
