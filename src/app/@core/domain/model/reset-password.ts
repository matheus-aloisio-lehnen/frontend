import { User } from "./user";
import { ResetPasswordStatus } from "../enum/reset-password.enum";

export interface ResetPassword {
    id: string;
    user: User;
    status: ResetPasswordStatus;
    createdAt: Date;
    expiresAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
