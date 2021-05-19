import { SharedState } from './Shared/shared.state';
import { StateList } from './state.enum';
import { SharedReducer } from './Shared/shared.reducer';

export interface AppState {
  [StateList.SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
    [StateList.SHARED_STATE_NAME]: SharedReducer,
};