import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
// configureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter.
// We pass a configuration object where we then set a reducer property.
/*  This reducer actually does not just takeca reducer function as an argument but also an object which acts as a map of reducers
    where you can then have any key names of your choice */

export default store;
