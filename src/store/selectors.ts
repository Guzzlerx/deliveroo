import { createSelector } from "@reduxjs/toolkit";
import { IDish } from "screens/HomeScreen/Parts/FeaturedRow/type";
import { RootState } from "./store";

export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketItemsWithId = createSelector(
  [selectBasketItems, (items, id: IDish["_id"]) => id],
  (items, id) => items.filter(item => item._id === id),
);
export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce((total, item) => total + item.price, 0).toFixed(2);
export const selectRestaurant = (state: RootState) => state.restaurant.restaurant;
