import { FC } from "react";
import { Text, View } from "react-native";
import Dish from "../Dish/Dish";
import { IRestaurantMenuProps } from "./type";

const RestaurantMenu: FC<IRestaurantMenuProps> = ({ data }) => {
  return (
    <View>
      <Text className="font-bold text-2xl px-4 pt-6 pb-5 ">Menu</Text>
      {data?.map(dish => (
        <Dish {...dish} key={dish._id} />
      ))}
    </View>
  );
};

export default RestaurantMenu;
