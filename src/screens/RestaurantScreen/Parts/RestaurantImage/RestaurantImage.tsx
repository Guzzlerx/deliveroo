import { FC } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { COLOR_PALETTE } from "constants/colors";
import { IRestaurantImageProps } from "./type";

const RestaurantImage: FC<IRestaurantImageProps> = ({ imageUrl, onPressHandler }) => {
  return (
    <View className="relative">
      <Image className="w-full h-60 bg-gray-300" source={{ uri: imageUrl }} />
      <TouchableOpacity
        className="absolute top-14 left-4 bg-white rounded-full p-1.5 opacity-90"
        onPress={onPressHandler}
      >
        <ArrowLeftIcon color={COLOR_PALETTE.cyan} size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantImage;
