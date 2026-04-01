import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    document.title = `Count: ${counter}`;
  }, [counter]);

  return (
    <div className="bg-amber-400 min-h-screen flex justify-center items-center gap-3">
      <h1>Simple Counter!</h1>
      <div className="bg-gray-400 rounded-2xl p-2">Count:{counter}</div>
      <div className="flex gap-2 justify-evenly items-center">
        <button
          className="bg-green-500 rounded-2xl p-2 hover:bg-green-300"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increase
        </button>
        <button
          className="bg-red-500 rounded-2xl p-2 hover:bg-red-300"
          onClick={() => {
            setCounter((prev) => (prev > 0 ? prev - 1 : 0));
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
