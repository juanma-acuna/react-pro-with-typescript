import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

const CounterEffectWithEffects = () => {
  const [counter, setCount] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCount((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useLayoutEffect(() => {
    if (counter < 10) return;
    console.log(
      "%cSe llegó al valor máximo",
      "color: red; background-colo: black"
    );

    const timeline = gsap.timeline();
    timeline.to(counterElement.current, {
      y: -15,
      duration: 0.2,
      ease: "ease.out",
    });
    timeline.to(counterElement.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });
  }, [counter]);

  return (
    <>
      <h1>CounterEffectWithEffects</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterEffectWithEffects;
