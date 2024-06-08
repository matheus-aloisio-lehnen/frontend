import { createAction, props } from '@ngrx/store';

export const startLoading = createAction('[Loading] Start Loading', props<{ context: string }>());
export const finishLoading = createAction('[Loading] Finish Loading', props<{ context: string }>());
