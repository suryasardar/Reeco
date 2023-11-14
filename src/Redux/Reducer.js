import { createSlice, current } from "@reduxjs/toolkit";

const yourSlice = createSlice({
  name: "yourSlice",
  initialState: {
    products: [],
    Display: [],
  },
  reducers: {
    setProducts: (state, action) => {
      // Assuming action.payload is an array
      state.products = action.payload;
      let tempProducts = state.products.map((item) => ({ ...item }));
      console.log([...tempProducts], "b");
    },
    cart: (state, action) => {
      // Assuming action.payload is an object

      const { products, Display } = current(state);
      // state.Display = action.payload;

      state.Display = [...Display, action.payload];
      console.log([...Display, action.payload]);
      console.log(current(state));
    },
      changeProductState: (state, action) => {
    
          
          const { products, Display } = current(state);
         
          const response = Display.map((obj) => {
              return {
                   ...obj,status:action.payload.status
               }
           })
          // Updating the array using spread operator
        state.Display=response
      console.log(current(state));
    },
    // Add more reducers as needed
  },
});

export const { setProducts, cart, changeProductState } = yourSlice.actions;
export default yourSlice.reducer;
