
import { SharedState } from './shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateList } from '../state.enum';

const getSharedState = createFeatureSelector<SharedState>(StateList.SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});