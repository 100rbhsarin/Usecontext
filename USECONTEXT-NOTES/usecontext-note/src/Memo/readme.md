Key Differences & When to Use Each

Feature	Purpose	When to Use

React.memo	Memoizes       a React component to skip re-renders.	 When a component re-renders even though its props don’t change.


useMemo	Memoizes       a calculated value to avoid expensive re-calculations.	When you have a heavy computation inside your render logic that depends on props or state.

useCallback	Memoizes      a callback function to avoid re-creation.   	When you pass a function as a prop to a React .memo component or use it in dependencies.

Cheat Sheet
If it's a component that doesn't need re-rendering often → React.memo.
If it's a computed value that doesn’t need recalculating → useMemo.
If it's a function that’s being passed as a prop → useCallback.

Common Mistakes
Overusing Memoization: Only use these tools if performance issues are noticeable. They add complexity and may increase memory usage.
Ignoring Dependencies: Always list all dependencies in useMemo and useCallback arrays; missing them can cause bugs.
Misusing React.memo: Remember that it only works for props; state or context changes will still cause re-renders.
Let me know if you'd like further clarification or examples!