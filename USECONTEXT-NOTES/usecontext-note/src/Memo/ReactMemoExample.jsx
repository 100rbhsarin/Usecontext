// 1️⃣ React.memo
// React.memo is a higher-order component used to memoize a React functional component. It prevents re-rendering of a component if its props haven't changed.

// Use Case
// Use React.memo when:

// A functional component is re-rendering unnecessarily, even though its props remain the same.
// The component does not depend on context or state from higher up.


import React from "react";

// Memoized Child Component
const Child = React.memo(({ name }) => {
  console.log("Child re-rendered");
  return <div>Hello, {name}!</div>;
});

export const  Parent=()=> {
  const [count, setCount] = React.useState(0);

  return (
    <div>
        <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Child name="GeekThreads" />
    </div>
  );
}

// How it works:
// If the name prop for Child doesn't change, 
// React.memo skips the re-rendering of Child, even when the parent component re-renders.
