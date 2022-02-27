import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
// configureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter.
// We pass a configuration object where we then set a reducer property.
/*  This reducer actually does not just takeca reducer function as an argument but also an object which acts as a map of reducers
    where you can then have any key names of your choice */

export const counterActions = counterSlice.actions;
// counterSlice.actions is an object with full of keys where the keynames is increment, decrement and so on.
// The methods on the actions object which we can call will create action objects for us.

export const authActions = authSlice.actions;

export default store;
