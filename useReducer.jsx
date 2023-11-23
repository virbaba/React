import React, { useReducer } from "react";

let reducer = (count, action) => {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count > 0 && count - 1;
    default:
      throw new Error();
  }
};

function App() {
  let [count, dispatch] = useReducer(reducer, 0);

  function increment(){
    dispatch({ type: "increment" })
  }
  function decrement(){
    dispatch({ type: "decrement" })
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>+</button> &nbsp;
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
