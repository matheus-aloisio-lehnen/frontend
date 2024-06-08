import { createAction, props } from '@ngrx/store';
import { User } from "../../../../domain/model/user";

export const createUser = createAction(
    '[User] Create User',
    props<{ user: User }>()
);

export const updateUser = createAction(
    '[User] Update User',
    props<{ user: User }>()
);

export const deleteUser = createAction(
    '[User] Delete User'
);

export const getUser = createAction(
    '[User] Get User'
);

export const setUser = createAction(
    '[User] Set User',
    props<{ user: User }>()
);
