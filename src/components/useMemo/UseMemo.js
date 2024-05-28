import { useMemo, useState } from "react";

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
  const [num, setNum] = useState(20);
  const number = useMemo(() => {
    expensiveFunction(num);
  }, [num]);
  // khi co su thay doi o bien 'num' thi moi chay expensiveFunction()
  // k lam dung vi can bo nho san

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      {/*Khi co su thay doi trong state / props thi render lai*/}
      <p>Number: {number}</p>
    </>
  );
};
