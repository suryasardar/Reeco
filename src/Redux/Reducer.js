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
      console.log(action.payload);
      const response = Display.map((obj) => {
        if (obj.id === action.payload.selected.id) {
          return {
            ...obj,
            status: action.payload.status,
          };
        } else {
          return { ...obj };
        }
      });
      // Updating the array using spread operator
      state.Display = response;
      console.log(current(state));
    },
    updateProductState: (state, action) => {
      const { Display } = current(state);

      const response = Display.map((obj) => {
        if (
          obj.quantity !== action.payload.num &&
          obj.id === action.payload.selected.id
        ) {
          return {
            ...obj,
            status: action.payload.status,
          };
        } else {
          return { ...obj };
        }
      });
      state.Display = response;
      console.log(current(state), "ok");
    },
    // Add more reducers as needed
  },
});

export const { setProducts, cart, changeProductState, updateProductState } =
  yourSlice.actions;
export default yourSlice.reducer;
