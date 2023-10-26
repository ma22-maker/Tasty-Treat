import { configureStore, createSlice } from "@reduxjs/toolkit";
import products from "@/assets/assets/fake-data/products";

const initialState = {
  products,
  isOpen: false,
  checkoutdata: [],
};

const inputDataSlice = createSlice({
  name: "FoodData",
  initialState,
  reducers: {
    addtoCart_SUCCESS: (state, action) => {
      console.log(action.payload);
      console.log(state.checkoutdata);
      const newItem = action.payload;
      const existingItem = state.checkoutdata.find(
        (item) => item.id === newItem.id
      );
      console.log(existingItem);
      if (existingItem) {
        existingItem.quantity += 1;
        console.log(existingItem);
      } else {
        state.checkoutdata = [...state.checkoutdata, action.payload];
      }

      console.log(state.checkoutdata);
    },

    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    removeCartItem: (state, action) => {
      const removeId = action.payload;
      state.checkoutdata = state.checkoutdata.filter(
        (item) => item.id !== removeId
      );
    },
    addQuantity: (state, action) => {
      const addid = action.payload;
      const existingItem = state.checkoutdata.find((item) => item.id === addid);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    subractQuantity: (state, action) => {
      const subid = action.payload;
      const existingItemIndex = state.checkoutdata.findIndex(
        (item) => item.id === subid
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.checkoutdata[existingItemIndex];

        if (existingItem.quantity === 0) {
          state.checkoutdata.splice(existingItemIndex, 1);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
    Clearcark :(state,action)=>{
      state.checkoutdata =[];

    }
  },
});

export const {
  addtoCart_SUCCESS,
  openModal,
  closeModal,
  removeCartItem,
  addQuantity,
  subractQuantity,
  Clearcark
} = inputDataSlice.actions;

const store = configureStore({
  reducer: {
    FoodData: inputDataSlice.reducer,
  },
});

export default store;
