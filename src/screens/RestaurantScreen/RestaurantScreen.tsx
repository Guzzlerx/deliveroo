import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import { setRestaurant } from "store/restaurantSlice/restaurantSlice";
import { selectBasketItems } from "store/selectors";
import { useAppDispatch, useAppSelector } from "store/store";
import BasketPopup from "components/BasketPopup/BasketPopup";
import { urlFor } from "api/groq/sanityClient";
import RestaurantImage from "./Parts/RestaurantImage/RestaurantImage";
import RestaurantInfo from "./Parts/RestaurantInfo/RestaurantInfo";
import RestaurantMenu from "./Parts/RestaurantMenu/RestaurantMenu";
import { RestaurantScreenRouteProps } from "./type";

const RestaurantScreen = () => {
  const route = useRoute<RestaurantScreenRouteProps>();
  const navigation = useNavigation();

  const { _id, image, name, address, dishes, type, lat, long, rating, description } = route.params;

  const items = useAppSelector(selectBasketItems);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({ _id, image, name, address, dishes, type, lat, long, rating, description }),
    );
  }, []);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantImage imageUrl={urlFor(image).url()} onPressHandler={navigation.goBack} />
        <RestaurantInfo
          name={name}
          address={address}
          description={description}
          rating={rating}
          type={type}
        />
        <RestaurantMenu dishes={dishes} />
      </ScrollView>
      {!!items?.length && <BasketPopup />}
    </>
  );
};

export default RestaurantScreen;
