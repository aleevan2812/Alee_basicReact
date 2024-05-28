import { useState } from "react";

function expensiveFunction(number) {
  console.log("Start");
  const start = new Date();

  // wait for 3s
  while (new Date() - start < 3000) {}
  console.log("Finish", new Date() - start, "ms");
  return number * number;
}

export const UseMemo = () => {
  const [count, setCount] = useState(0);

  const number = expensiveFunction(10);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      {/*Khi co su thay doi trong state / props thi render lai*/}
      <p>Number: {number}</p>
    </>
  );
};
