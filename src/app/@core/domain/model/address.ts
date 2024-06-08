import { User } from "./user";

export interface Address {
    id?: number;
    user: User;
    zipCode: string;
    street: string;
    number: string;
    lat?: number;
    lng?: number;
    placeId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
