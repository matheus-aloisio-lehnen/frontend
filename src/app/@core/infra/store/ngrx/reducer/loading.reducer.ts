import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as LoadingActions from '../actions/loading.actions';
import { initialLoadingState, LoadingState } from "../state/loading.state";


export const loadingReducer: ActionReducer<LoadingState> = createReducer(
    initialLoadingState,
    on(LoadingActions.startLoading, (state, { context }) => ({
        ...state,
        [context]: true
    })),
    on(LoadingActions.finishLoading, (state, { context }) => ({
        ...state,
        [context]: false
    }))
);
