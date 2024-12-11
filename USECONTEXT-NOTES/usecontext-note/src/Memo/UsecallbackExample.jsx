// 3️⃣ useCallback
// useCallback is a hook used to memoize a callback function. It ensures the function reference remains the same between renders unless its dependencies change.

// Use Case
// Use useCallback when:

// A callback function is passed to a child component wrapped in React.memo, and you want to prevent unnecessary re-renders caused by function re-creation.
// A function depends on certain props/state and is used in event handlers or child components.
// Example


import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export const ParentCallBackExample=()=> {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
        <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
