import { createAction } from '@ngrx/store';

export const toggleDarkMode = createAction(
    '[App] Toggle Dark Mode',
    (isDarkMode: boolean) => ({ isDarkMode })
);
