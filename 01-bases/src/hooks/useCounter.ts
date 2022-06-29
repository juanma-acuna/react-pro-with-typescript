import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setCount] = useState(5);
  const elementToAnimate = useRef<any>(null);

  const handleClick = () => {
    setCount((prev) => Math.min(prev + 1, maxCount));
  };

  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    timeline.current.to(elementToAnimate.current, {
      y: -15,
      duration: 0.2,
      ease: "ease.out",
    });
    timeline.current.to(elementToAnimate.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });
    timeline.current.pause();
  }, []);

  useEffect(() => {
    timeline.current.play(0);
  }, [counter]);

  return { counter, handleClick, elementToAnimate };
};
