import { AddressTypeEnum, AddressUseEnum } from "../enums";
import { IAddress } from "../interfaces/IAddress";
import { createDatatypeDefinition } from "../utils/resources";
import { globalValidator } from "../utils/validator";

export const addressType: string[] = Object.values(AddressTypeEnum);
export const addressUse: string[] = Object.values(AddressUseEnum);

export const addressModelFields = createDatatypeDefinition<IAddress>(
  [
    {
      name:"text",
      type: "string",
      isRequired: true,
      isArray: false
    },
    {
      name: "date",
      type: "dateTime",
      isRequired: true,
      isArray: false
    }
  ]
)


export function AddressModelValidator(dataToValidate: IAddress | IAddress[], path: string = "Address" ): void {
  console.log(dataToValidate);
  if(Array.isArray(dataToValidate)){
    dataToValidate.forEach((data, index) => {
      AddressModelValidator(data, `${path}[${index}]`);
    });
    return;
  }

  globalValidator(dataToValidate, addressModelFields, path);

}
