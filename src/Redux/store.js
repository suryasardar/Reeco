 
import { configureStore } from '@reduxjs/toolkit';
import  yourSliceReducer    from "./Reducer";

const store = configureStore({
  reducer:yourSliceReducer,
    // Add more reducers if needed
  
});

export default store;
