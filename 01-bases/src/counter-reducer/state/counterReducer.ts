import { CounterAction, INCREASE_BY, RESET } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { counter, changes } = state;
  switch (action.type) {
    case INCREASE_BY:
      return {
        ...state,
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1,
      };
    case RESET:
      return {
        ...state,
        counter: INITIAL_STATE.counter,
        previous: INITIAL_STATE.previous,
        changes: INITIAL_STATE.changes,
      };
    default:
      return state;
  }
};
