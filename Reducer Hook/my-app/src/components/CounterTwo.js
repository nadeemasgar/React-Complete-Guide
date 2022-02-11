/* Instead of using simple state and action, we are using a state object and action object */

import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0
} // Step 2

/* Reducer function accepts the current and action and return the new state depending on the action */
const reducer = (state, action) => { // Step 3  
    switch(action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return  { firstCounter: state.firstCounter - action.value}
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterTwo() {
   const [count, dispatch] = useReducer(reducer, initialState); // Step 1 (same as useState)
   /* Argument to the dispatch method is the action that is specified in the reducer function */
   /* Current value of the state is count variable */
   /* dispatch method which is capable of accepting the action to execute the code specified in the render function */
  return (
    <div>
        <div>Count -  {count.firstCounter}</div> {/* Step 4 */}
        <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>  {/* Step 5 */}

        {/* We use dipatch method to dispatch the appropriate action based on what button the user clicks */}

        <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button> 

        <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button> 

        <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button> 

        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo

/* By making action as object, we can use additional data in reducer function */