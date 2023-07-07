import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ICategoriesScreenProps } from "./CategoriesScreen/type";
import { IRestaurant } from "./HomeScreen/Parts/FeaturedRow/type";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: IRestaurant;
  Categories: ICategoriesScreenProps;
  Basket: undefined;
  Allergy: undefined;
  PreparingOrder: undefined;
  Delivery: undefined;
};

export type RestaurantScreenProps = NativeStackScreenProps<RootStackParamList, "Restaurant">;
export type BasketScreenProps = NativeStackScreenProps<RootStackParamList, "Basket">;
export type CategoriesScreenProps = NativeStackScreenProps<RootStackParamList, "Categories">;
export type DeliveryScreenProps = NativeStackScreenProps<RootStackParamList, "Delivery">;
export type PreparingOrderScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "PreparingOrder"
>;
