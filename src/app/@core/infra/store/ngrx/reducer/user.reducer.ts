import { ActionReducer, createReducer, on } from '@ngrx/store';
import { initialUserState, UserState } from "../state/user.state";
import { createUser, deleteUser, setUser, updateUser } from "../actions/user.actions";

export const userReducer: ActionReducer<UserState> = createReducer(
    initialUserState,
    on(createUser, (state, { user }) => ({
        ...state,
        user
    })),
    on(updateUser, (state, { user }) => ({
        ...state,
        user
    })),
    on(deleteUser, (state) => ({
        ...state,
        user: null
    })),
    on(setUser, (state, { user }) => ({
        ...state,
        user
    }))
);
