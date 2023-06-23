import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon, QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { ChevronRightIcon, MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { defineRatingColor } from "src/utils/defineRatingColor";
import { COLOR_PALETTE, colorVariants } from "constants/colors";
import { urlFor } from "api/groq/sanityClient";
import Dish from "./Parts/Dish/Dish";
import { RestaurantScreenRouteProps } from "./type";

const RestaurantScreen = () => {
  const route = useRoute<RestaurantScreenRouteProps>();
  const navigation = useNavigation();

  const { _id, image, name, address, dishes, type, lat, long, rating, description } = route.params;

  const color = defineRatingColor(rating);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image className="w-full h-60 bg-gray-300" source={{ uri: urlFor(image).url() }} />
        <TouchableOpacity
          className="absolute top-14 left-4 bg-white rounded-full p-1.5 opacity-90"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon color={COLOR_PALETTE.default} size={22} />
        </TouchableOpacity>
      </View>

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

        <TouchableOpacity className="flex-row items-center p-4 space-x-3 border-y border-gray-300">
          <QuestionMarkCircleIcon color="gray" opacity={0.5} />
          <Text className="flex-1 font-bold">Have a food allergy?</Text>
          <ChevronRightIcon color={COLOR_PALETTE.default} size={18} />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="font-bold text-2xl px-4 pt-6 pb-5 ">Menu</Text>
        {dishes?.map(dish => (
          <Dish {...dish} key={dish._id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
