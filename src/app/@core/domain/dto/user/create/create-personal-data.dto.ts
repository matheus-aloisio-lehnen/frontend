import { LegalStatus } from "../../../enum/legal.status";

export interface CreatePersonalDataDto {
    name: string;
    documentNumber: string;
    mobile: string;
    legalStatus: LegalStatus;
}
