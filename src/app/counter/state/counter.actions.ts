import { createAction, props } from "@ngrx/store";

export enum CounterAction {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
    RESET = 'reset',
    CUSTOM_INCREMENT = 'customincrement',
    CHANGE_CHANNEL_NAME = 'changeChannelName'
}

export const increment = createAction(CounterAction.INCREMENT);
export const decrement = createAction(CounterAction.DECREMENT);
export const reset = createAction(CounterAction.RESET);
export const customIncrement = createAction(CounterAction.CUSTOM_INCREMENT, props<{ value: number }>());
export const changeChannelName = createAction(CounterAction.CHANGE_CHANNEL_NAME);