import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterEffectWithEffects from "./bases/CounterEffectWithEffects";
import CounterHook from "./bases/CounterHook";
import CounterReducerComponent from "./counter-reducer/CounterReducer";

function App() {
  const initialValue = 15;

  return (
    <>
      <h1>React</h1>
      <hr />
      <CounterBy />
      <hr />
      <Counter initialValue={initialValue} />
      <hr />
      <CounterEffect />
      <hr />
      <CounterEffectWithEffects />
      <CounterHook />
      <CounterReducerComponent />
    </>
  );
}

export default App;
