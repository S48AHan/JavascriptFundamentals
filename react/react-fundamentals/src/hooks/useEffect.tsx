import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState<number>(0);
  //     useEffect(() => {
  //   setCount(count+1);
  //   console.log(count)
  // },[]);

  useEffect(() => {
    //   setInterval(() => {
    //     console.log(count);
    //   }, 1000);

    const interval = setInterval(() => {
    //   setCount((prev) => prev + 1);
    //   console.log(count)
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>UseEffect</div>
      <button className="p-4 bg-amber-500" onClick={() => setCount(count + 1)}>
        Count = {count}
      </button>
    </>
  );
};

export default UseEffect;
