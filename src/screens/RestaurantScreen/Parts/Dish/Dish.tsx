import { FC } from "react";
import { Text, View } from "react-native";
import { IDishProps } from "./type";

const Dish: FC<IDishProps> = ({ _id, description, image, name, price }): JSX.Element => {
  return (
    <View className="flex-row bg-white p-4">
      <View>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>${price}</Text>
        <View className="flex-row"></View>
      </View>
    </View>
  );
};

export default Dish;
