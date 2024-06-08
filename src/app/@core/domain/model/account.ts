import { User } from "./user";

export interface Account {
    id:  number;
    balance: number;
    user: User;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
