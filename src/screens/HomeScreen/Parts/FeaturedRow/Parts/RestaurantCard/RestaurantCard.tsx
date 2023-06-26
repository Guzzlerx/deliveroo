import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { RestaurantScreenNavigationProps } from "screens/RestaurantScreen/type";
import { colorVariants } from "constants/colors";
import { PATH } from "constants/path";
import { defineRatingColor } from "utils/defineRatingColor";
import { urlFor } from "api/groq/sanityClient";
import { IRestaurantCardProps } from "./type";

const RestaurantCard: FC<IRestaurantCardProps> = ({
  _id,
  address,
  dishes,
  image,
  lat,
  long,
  rating,
  description,
  name,
  type,
}): JSX.Element => {
  const navigation = useNavigation<RestaurantScreenNavigationProps>();

  const color = defineRatingColor(rating);

  const onPressHandler = () => {
    navigation.navigate(PATH.RESTAURANT, {
      _id,
      address,
      dishes,
      image,
      lat,
      long,
      rating,
      description,
      type,
      name,
    });
  };

  return (
    <TouchableOpacity onPress={onPressHandler} className="mb-2 bg-white shadow">
      <Image className="w-60 h-36 rounded-sm" source={{ uri: urlFor(image).url() }} />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg mt-2">{name}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={color} opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className={colorVariants[color]}>{rating}</Text> · {type.name}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
