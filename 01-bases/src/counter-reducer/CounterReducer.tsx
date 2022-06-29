import { useReducer } from "react";
import * as CounterActions from "./actions/actions";
import { counterReducer, INITIAL_STATE } from "./state/counterReducer";

const CounterReducerComponent = () => {
  const [CounterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(CounterActions.doReset());
  };

  const handleIncreaseBy = (value: number) => {
    dispatch(CounterActions.doIncreaseBy(value));
  };

  return (
    <>
      <h1>CounterReducerComponent Segmentado</h1>
      <pre>{JSON.stringify(CounterState, null, 2)}</pre>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>
    </>
  );
};

export default CounterReducerComponent;
