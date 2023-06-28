import { FC } from "react";
import { Image, Text, View } from "react-native";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";
import { COLOR_PALETTE } from "constants/colors";
import { HOME_SCREEN_IMAGES } from "constants/imageLinks";

const Header: FC = (): JSX.Element => {
  return (
    <View className="flex-row pb-3 items-center px-4 space-x-2">
      <Image
        source={{ uri: HOME_SCREEN_IMAGES.deliveryIcon }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deilver Now!</Text>
        <Text className="font-bold text-xl">
          Current Location
          <ChevronDownIcon size={20} color={COLOR_PALETTE.cyan} />
        </Text>
      </View>
      <UserIcon size={35} color={COLOR_PALETTE.cyan} />
    </View>
  );
};

export default Header;
