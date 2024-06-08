import { CreatePersonalDataDto } from "./create-personal-data.dto";
import { CreateAddressDto } from "./create-address.dto";
import { FormGroup } from "@angular/forms";
import { Role } from "../../../enum/role.enum";

export interface CreateUserDto {
    email: string;
    password: string;
    role: Role;
    personalData: CreatePersonalDataDto;
    address: CreateAddressDto;
}

export const createUserDtoFactory = (authForm: FormGroup, personalDataForm: FormGroup, addressForm: FormGroup): CreateUserDto => {
    return {
        email: authForm.get('email')?.value,
        password: authForm.get('password')?.value,
        role: authForm.get('role')?.value,
        personalData: {
            name: personalDataForm.get('name')?.value,
            documentNumber: personalDataForm.get('documentNumber')?.value,
            mobile: personalDataForm.get('mobile')?.value,
            legalStatus: personalDataForm.get('legalStatus')?.value,
        },
        address: {
            zipCode: addressForm.get('zipCode')?.value,
            street: addressForm.get('street')?.value,
            number: addressForm.get('number')?.value,
        }
    }
}
