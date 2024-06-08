import { AppState } from "./app.state";

export const initialLoadingState: AppState['loading'] = {};

export interface LoadingState {
    [context: string]: boolean;
}
