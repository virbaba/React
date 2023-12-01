Example without useCallback:

// WithoutUseCallback.jsx
import React, { useState } from 'react';

function CounterComponent() {
  const [count, setCount] = useState(0);

  // Function created on every render
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter Component (Without useCallback)</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default CounterComponent;
In this example:

incrementCount is created as a new function on every render, even though its logic doesn't change. 
  This happens because the component's state (count) is used within the function, causing the reference to change on each render.

Example using useCallback:
// WithUseCallback.jsx
import React, { useState, useCallback } from 'react';

function CounterComponent() {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the function
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Counter Component (With useCallback)</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default CounterComponent;
useCallback is used to memoize the incrementCount function. The empty dependency array [] indicates that incrementCount doesn’t depend on any external values.
The function passed to useCallback will only be recreated if any of the dependencies in the dependency array change. As there are no dependencies listed, 
  it creates the function only once during the initial render and retains the same reference in subsequent renders unless the component unmounts or updates.
Comparison:

In the version without useCallback, the incrementCount function is recreated on every render, potentially causing unnecessary re-renders of child components.
In the version using useCallback, the incrementCount function is memoized and remains constant across renders, optimizing performance by avoiding unnecessary function recreations.
By observing how the functions are recreated or memoized in these two examples, you can understand the difference in performance optimization when using useCallback in React.
