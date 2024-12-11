// 2️⃣ useMemo
// useMemo is a hook used to memoize a calculated value. It recalculates the value only when its dependencies change, which can improve performance for expensive calculations.

// Use Case
// Use useMemo when:

// A computation inside the render function is expensive and you want to avoid recalculating it on every render.
// You want to optimize derived data or calculations based on props or state.
// Example


import React, { useMemo, useState } from "react";

function ExpensiveComponent({ number }) {
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return number * 2; // Simulate an expensive operation
  }, [number]);

  return <div>Result: {expensiveCalculation}</div>;
}

export const Usememoexample=()=> {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  return (
    <div>
        <p>Count : {count}</p>
        <p>Num : {num}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <button onClick={() => setNum(num + 1)}>Increase Number</button>
      <ExpensiveComponent number={num} />
    </div>
  );
}

// How it works:
// The expensive calculation (number * 2) only runs when number changes, not when count changes or the parent re-renders.
