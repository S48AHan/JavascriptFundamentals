import { useEffect, useRef, useState } from "react";

export const UseRefTutorial = () => {
  const [count, setCount] = useState(0);
  const [effectRuns, setEffectRuns] = useState(0);

  const renderCount = useRef(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`rerendering happening ${renderCount.current}`);
    if (btnRef.current) {
      btnRef.current.style.backgroundColor = "red";
    }
    // setEffectRuns((n) => n + 1);
  }, [count]);

  return (
    <>
      <div>Current: {count}</div>
      <div>Effect runs: {effectRuns}</div>
      <button ref={btnRef} onClick={() => setCount((v) => v + 1)}>
        Click
      </button>
    </>
  );
};
