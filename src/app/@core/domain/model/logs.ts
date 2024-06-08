import { User } from "./user";

export interface Logs {
    id?: number;
    ipAddress: string;
    userAgent: string;
    method: string;
    endpoint: string;
    payload: string;
    context: string;
    actionType: string;
    description: string;
    statusCode: number;
    timestamp: Date;
    user: User;
}
