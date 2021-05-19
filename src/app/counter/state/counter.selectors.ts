import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";
import { StateList } from '../../store/state.enum';

const getCounterState = createFeatureSelector<CounterState>(StateList.COUTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) => state.counter);

export const getChannelName = createSelector(getCounterState, (state) => state.channelName);

