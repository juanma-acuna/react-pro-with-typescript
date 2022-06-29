import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialValue);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
