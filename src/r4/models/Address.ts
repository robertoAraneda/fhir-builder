import { AddressBuilder } from "../builders";
import { IAddress } from "../interfaces/IAddress";
import { AddressModelValidator } from "../validators/AddressValidator";

export class Address implements IAddress{
    text: string;
    date: string;

    toJSON(): Address {
        return JSON.parse(JSON.stringify(this));
    }

    toPrettyString(): string {
        return `Address${JSON.stringify(this.toJSON(), null, 2)}`;
    }

    toShortString(): string {
        return `Address${JSON.stringify(this.toJSON())}`;
    }

    static builder(): AddressBuilder {
        return new AddressBuilder();
    }

    static fromJSON(json: any): Address {
        Address.validate(json);
        return new Address(json);
    }

    static validate(address: any): void {
        AddressModelValidator(address);
    }

    constructor(args: IAddress) {
        Object.assign(this, args);
    }
}