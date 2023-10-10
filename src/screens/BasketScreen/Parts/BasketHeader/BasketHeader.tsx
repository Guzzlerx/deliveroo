import { FC } from "react";
import { Text, View } from "react-native";
import CloseButton from "components/UI/CloseButton/CloseButton";
import { IBasketHeaderProps } from "./type";

const BasketHeader: FC<IBasketHeaderProps> = ({ title, onPressHandler }): JSX.Element => {
  return (
    <View className="p-5 bg-white flex-row items-center shadow-sm">
      <View className="flex-col flex-1">
        <Text className="font-bold text-center text-lg">Basket</Text>
        <Text className="text-gray-400 text-center">{title}</Text>
      </View>
      <CloseButton
        height={50}
        width={50}
        styles="absolute top-4 right-5"
        onPressHandler={onPressHandler}
      />
    </View>
  );
};

export default BasketHeader;
