import React, { useReducer } from "react";

const initialState = 0; // Step 2
/* Reducer function accepts the current and action and return the new state depending on the action */
const reducer = (state, action) => {
  // Step 3
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState); // Step 1 (same as useState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  /* Argument to the dispatch method is the action that is specified in the reducer function */
  /* Current value of the state is count variable */
  /* dispatch method which is capable of accepting the action to execute the code specified in the render function */
  return (
    <div>
      <div>Count - {count}</div> {/* Step 4 */}
      <button onClick={() => dispatch("increment")}>Increment</button>{" "}
      {/* Step 5 */}
      {/* We use dipatch method to dispatch the appropriate action based on what button the user clicks */}
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>
        <div>Count Two - {countTwo}</div> {/* Step 4 */}
        <button onClick={() => dispatchTwo("increment")}>Increment</button>{" "}
        {/* Step 5 */}
        {/* We use dipatch method to dispatch the appropriate action based on what button the user clicks */}
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;


/*  Dealing with multiple state variable that have the same state transition, it is good idea to have multiple useReducer making use of the same reducer function */
/* This will void the complexity and prevent us from duplicating code in the reducer function like we have seen in CounterTwo.js */