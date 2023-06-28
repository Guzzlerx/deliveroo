import { useFetch } from "hooks/useFetch";
import { FC, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "screens/HomeScreen/Parts/FeaturedRow/Parts/RestaurantCard/RestaurantCard";
import { COLOR_PALETTE } from "constants/colors";
import { IFeaturedRowProps, IRestaurant } from "./type";

const FeaturedRow: FC<IFeaturedRowProps> = ({ title, description, id }): JSX.Element => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const { isFetching, request } = useFetch();

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    request(
      `*[_type == "featured" && _id == $id] {
      ...,
      restaurants[] ->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      }
    }[0]`,
      { id },
    ).then(data => setRestaurants(data.restaurants));
  };

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={COLOR_PALETTE.cyan} />
      </View>
      <Text className="text-gray-500 text-xs pb-4 px-4">{description}</Text>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, gap: 12 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {restaurants?.map(props => (
          <RestaurantCard {...props} key={props._id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
