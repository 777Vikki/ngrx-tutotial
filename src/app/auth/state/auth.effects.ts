
import { AuthService } from './../../services/auth.service';
import { exhaustMap, map } from 'rxjs/operators';
import { loginStart, loginSuccess } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setErrorMessage, setLoadingSpinner } from '../../store/Shared/shared.actions';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppState>) { }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        this.store.dispatch(setLoadingSpinner({ status: true }));
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            if(data.status) {
              const user = this.authService.formatUser(data);
              this.store.dispatch(setErrorMessage({message: ''}))
              return loginSuccess({ user });
            }
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return (setErrorMessage({ message: 'Either username or password invalid' }));
          })
        );
      })
    );
  });
}