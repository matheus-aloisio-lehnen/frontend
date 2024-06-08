import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as DarkModeActions from '../actions/dark-mode.actions';
import { initialDarkModeState } from "../state/dark-mode.state";

export const darkModeReducer: ActionReducer<boolean> = createReducer(
    initialDarkModeState,
    on(DarkModeActions.toggleDarkMode, (state: boolean): boolean => !state),
);
