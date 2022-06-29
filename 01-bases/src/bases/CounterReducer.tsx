import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { counter, changes } = state;
  switch (action.type) {
    case "increaseBy":
      return {
        ...state,
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1,
      };
    case "reset":
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

const CounterReducerComponent = () => {
  const [CounterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleIncreaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };

  return (
    <>
      <h1>CounterReducerComponent</h1>
      <pre>{JSON.stringify(CounterState, null, 2)}</pre>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>
    </>
  );
};

export default CounterReducerComponent;
