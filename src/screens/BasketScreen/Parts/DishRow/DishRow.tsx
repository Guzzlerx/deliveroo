import React, { FC } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { removeFromBasket } from "store/basketSlice/basketSlice";
import { useAppDispatch } from "store/store";
import { IDishRowProps } from "./type";

const DishRow: FC<IDishRowProps> = ({ name, imageUrl, amount, id, price }): JSX.Element => {
  const dispatch = useAppDispatch();

  const onPressRemoveHandler = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <View className="flex-row py-2 px-5 items-center space-x-3 bg-white">
      <Text className="text-[#00CCBB]">{amount} x</Text>
      <Image className="rounded-full w-12 h-12" source={{ uri: imageUrl }} />
      <Text className="flex-1">{name}</Text>
      <Text className="text-gray-600">${price}</Text>
      <TouchableOpacity onPress={onPressRemoveHandler}>
        <Text className="text-[#00CCBB]">Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DishRow;
