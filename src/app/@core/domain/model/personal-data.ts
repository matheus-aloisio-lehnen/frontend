import { LegalStatus } from '../enum/legal.status';
import { User } from "./user";

export interface PersonalData {
    id?: number;
    name: string;
    documentNumber: string;
    legalStatus: LegalStatus;
    mobile: string;
    user: User;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
