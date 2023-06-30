import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRestaurantSlice } from "./type";

const initialState: IRestaurantSlice = {
  restaurant: {
    _id: "",
    address: "",
    name: "",
    description: "",
    dishes: [],
    image: null,
    lat: 0,
    long: 0,
    rating: 0,
    type: {
      name: "",
    },
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<IRestaurantSlice["restaurant"]>) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
