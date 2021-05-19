import { createAction, props } from '@ngrx/store';

export enum LoadingSpinAction {
    SET = '[shared state] set loading spinner'
}

export const setLoadingSpinner = createAction(
    LoadingSpinAction.SET,
    props<{ status: boolean }>()
);