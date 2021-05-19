import { createAction, props } from '@ngrx/store';

export enum SharedAction {
    SET_LOADING = '[shared state] set loading spinner',
    SET_ERROR_MESSAGE = '[shared state] set error message'
}

export const setLoadingSpinner = createAction(
    SharedAction.SET_LOADING,
    props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
    SharedAction.SET_ERROR_MESSAGE,
    props<{ message: string }>()
);