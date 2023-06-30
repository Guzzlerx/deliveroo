import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IRestaurant } from "./HomeScreen/Parts/FeaturedRow/type";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: IRestaurant;
  Basket: undefined;
  Allergy: undefined;
};

export type RestaurantScreenProps = NativeStackScreenProps<RootStackParamList, "Restaurant">;
export type BasketScreenProps = NativeStackScreenProps<RootStackParamList, "Basket">;
