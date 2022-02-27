import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
// configureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter.
// We pass a configuration object where we then set a reducer property.

export const counterActions = counterSlice.actions;
// counterSlice.actions is an object with full of keys where the keynames is increment, decrement and so on.
// The methods on the actions object which we can call will create action objects for us.

export default store;
