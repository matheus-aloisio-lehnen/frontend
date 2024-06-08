import { UserState } from "./user.state";
import { LoadingState } from "./loading.state";

export interface AppState {
    isDarkMode: boolean;
    loading: LoadingState;
    user: UserState
}
