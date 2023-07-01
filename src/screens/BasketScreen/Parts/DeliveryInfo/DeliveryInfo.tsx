import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { HOME_SCREEN_IMAGES } from "constants/imageLinks";

const DeliveryInfo: FC = (): JSX.Element => {
  return (
    <View className="flex-row bg-white my-5 py-3 px-4 items-center space-x-4">
      <Image
        source={{ uri: HOME_SCREEN_IMAGES.deliveryIcon }}
        className="w-7 h-7 bg-gray-300 rounded-full"
      />
      <Text className="flex-1">Deliver in 50-75 min</Text>
      <TouchableOpacity>
        <Text className="text-[#00CCBB]">Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryInfo;
