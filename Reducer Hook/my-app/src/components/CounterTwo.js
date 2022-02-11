/* Instead of using simple state and action, we are using a state object and action object */

import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
}; // Step 2

/* Reducer function accepts the current and action and return the new state depending on the action */
const reducer = (state, action) => {
  // Step 3
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState); // Step 1 (same as useState)
  /* Argument to the dispatch method is the action that is specified in the reducer function */
  /* Current value of the state is count variable */
  /* dispatch method which is capable of accepting the action to execute the code specified in the render function */
  return (
    <div>
      <div>First Counter - {count.firstCounter}</div> {/* Step 4 */}
      <div>Second Counter - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      {/* Step 5 */}
      {/* We use dipatch method to dispatch the appropriate action based on what button the user clicks */}
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment Counter 2
        </button>

        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement Counter 2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;

/* By making action as object, we can use additional data in reducer function */
