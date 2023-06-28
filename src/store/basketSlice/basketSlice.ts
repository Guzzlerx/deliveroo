import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDish } from "screens/HomeScreen/Parts/FeaturedRow/type";
import { IBasketSlice } from "./type";

const initialState: IBasketSlice = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IDish>) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action: PayloadAction<IDish["_id"]>) => {
      const itemIndex = state.items.findIndex(item => item._id === action.payload);
      state.items.splice(itemIndex, 1);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
