import * as Progress from "react-native-progress";
import { FC } from "react";
import { Image, Text, View } from "react-native";
import { COLOR_PALETTE } from "constants/colors";
import { HOME_SCREEN_IMAGES } from "constants/imageLinks";
import { formatTime } from "utils/formatTime";
import { IDeliveryInfoProps } from "./type";

const DeliveryInfo: FC<IDeliveryInfoProps> = ({
  deliveryTime = 55,
  restaurantTitle,
}): JSX.Element => {
  return (
    <View className="bg-white m-4 p-4 rounded-lg">
      <View className="flex-row">
        <View className="flex-1">
          <Text className="text-gray-400 text-lg">Esitmated Arrival</Text>
          <Text className="font-bold text-3xl pb-3">{formatTime(deliveryTime)}</Text>
        </View>
        <Image className="w-20 h-20" source={{ uri: HOME_SCREEN_IMAGES.deliveryInProcessIcon }} />
      </View>
      <Progress.Bar indeterminate color={COLOR_PALETTE.cyan} />
      <Text className="mt-3">Your order at {restaurantTitle} is being prepared</Text>
    </View>
  );
};

export default DeliveryInfo;
