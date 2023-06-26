import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ChevronRightIcon, QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { COLOR_PALETTE, colorVariants } from "constants/colors";
import { defineRatingColor } from "utils/defineRatingColor";
import { IRestaurantInfoProps } from "./type";

const RestaurantInfo: FC<IRestaurantInfoProps> = ({
  address,
  name,
  description,
  rating,
  type,
  onPressAllergyBlockHandler,
}) => {
  const color = defineRatingColor(rating);

  return (
    <View className="bg-white">
      <View className="px-4 pt-4">
        <Text className="text-4xl font-bold">{name}</Text>
        <View className="flex-row space-x-2 items-center my-2">
          <View className="flex-row space-x-1 items-center">
            <StarIcon color={color} opacity={0.5} size={22} />
            <Text className="text-gray-500">
              <Text className={colorVariants[color]}>{rating}</Text> · {type.name}
            </Text>
          </View>
          <View className="flex-row space-x-1 items-center">
            <MapPinIcon color="gray" opacity={0.4} size={22} />
            <Text className="text-gray-500 w-4/5">Nearby · {address}</Text>
          </View>
        </View>
        <Text className="text-gray-500 text-base mt-2 pb-4">{description}</Text>
      </View>
      <TouchableOpacity
        onPress={onPressAllergyBlockHandler}
        className="flex-row items-center p-4 space-x-3 border-y border-gray-300"
      >
        <QuestionMarkCircleIcon color="gray" opacity={0.5} />
        <Text className="flex-1 font-bold">Have a food allergy?</Text>
        <ChevronRightIcon color={COLOR_PALETTE.default} size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantInfo;
