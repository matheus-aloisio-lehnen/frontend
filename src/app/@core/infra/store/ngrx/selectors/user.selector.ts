import { createSelector } from '@ngrx/store';
import { AppState } from "../state/app.state";
import { UserState } from "../state/user.state";

export const selectUser = createSelector(
    (state: AppState) => state.user,
    (userState: UserState) => userState.user
);
