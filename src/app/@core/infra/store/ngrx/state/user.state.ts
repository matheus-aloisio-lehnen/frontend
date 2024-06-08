import { User } from "../../../../domain/model/user";

export const initialUserState: UserState = {
    user: null,
};

export interface UserState {
    user: User | null;
}
