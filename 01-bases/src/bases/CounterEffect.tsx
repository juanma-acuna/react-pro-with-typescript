import { useState, useEffect } from "react";

const MAXIMUN_COUNT = 10;

const CounterEffect = () => {
  const [counter, setCount] = useState(5);

  const handleClick = () => {
    setCount((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    console.log(
      "%cSe llegó al valor máximo",
      "color: red; background-colo: black"
    );
  }, [counter]);

  return (
    <>
      <h1>CounterEffect {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterEffect;
