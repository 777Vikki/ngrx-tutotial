import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export enum AuthAction {
    LOGIN_START = '[auth page] login start',
    LOGIN_SUCCESS = '[auth page] login Success',
    LOGIN_FAIL = '[auth page] login Fail',
}

export const loginStart = createAction(
    AuthAction.LOGIN_START,
    props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(AuthAction.LOGIN_SUCCESS, props<{ user: User }>());