import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementInterval = 7;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>count is: {counter}</p>

        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            Increment
          </button>{" "}
          <button type="button" onClick={() => dispatch(decrement())}>
            decrement
          </button>{" "}
          <button
            type="button"
            onClick={() => dispatch(incrementBy(incrementInterval))}
          >
            Increment by {incrementInterval}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
