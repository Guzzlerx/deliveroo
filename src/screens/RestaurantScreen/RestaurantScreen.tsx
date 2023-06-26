import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import { urlFor } from "api/groq/sanityClient";
import RestaurantImage from "./Parts/RestaurantImage/RestaurantImage";
import RestaurantInfo from "./Parts/RestaurantInfo/RestaurantInfo";
import RestaurantMenu from "./Parts/RestaurantMenu/RestaurantMenu";
import { RestaurantScreenRouteProps } from "./type";

const RestaurantScreen = () => {
  const route = useRoute<RestaurantScreenRouteProps>();
  const navigation = useNavigation();

  const { _id, image, name, address, dishes, type, lat, long, rating, description } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <RestaurantImage imageUrl={urlFor(image).url()} onPressHandler={navigation.goBack} />
      <RestaurantInfo
        name={name}
        address={address}
        description={description}
        rating={rating}
        type={type}
        onPressAllergyBlockHandler={() => console.log("allergy")}
      />
      <RestaurantMenu data={dishes} />
    </ScrollView>
  );
};

export default RestaurantScreen;
