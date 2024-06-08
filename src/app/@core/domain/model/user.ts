import { PersonalData } from "./personal-data";
import { Address } from "./address";
import { Logs } from "./logs";
import { Role } from "../enum/role.enum";

export interface User {
    id: number;
    email: string;
    password?: string;
    role: Role
    status: boolean;
    personalData: PersonalData;
    address: Address;
    logs?: Logs[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
